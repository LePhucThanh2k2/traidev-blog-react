import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentItem, createMarkup, strHtmlAfterMarkup } from "../../helper";
import { actPostNewCommentAsync } from "../../store/comment/action";
import {
  actGetCommentAsync,
  actGetListChildCommentAsync,
} from "../../store/posts/action";
import "./main.css";

function CommentItem({ item }) {
  const idPostDetail = useSelector((state) => state.postReducer.postDetail.id);
  const strMarkup = createMarkup(item.content);
  const dispatch = useDispatch();
  const idComment = item.id;
  const dataChildComment = useSelector(
    (state) => state.postReducer.listChildComment[idComment]
  );
  const test = useSelector((state) => state.postReducer);
  let currentPage = 0;
  let totalPages = 0;
  let listComment = [];
  let totalComment = 0;
  if (dataChildComment) {
    currentPage = dataChildComment.currentPage;
    totalPages = dataChildComment.totalPages;
    listComment = [...dataChildComment.listComment];
    totalComment = dataChildComment.currentPage;
  }
  let restComment = item.totalCommentReply - 3 * currentPage;
  const [showForm, setShowForm] = useState(false);
  function handleLoadMore() {
    dispatch(
      actGetListChildCommentAsync({
        per_page: 3,
        page: currentPage + 1,
        parent: idComment,
        post: idPostDetail,
      })
    );
  }
  const token = localStorage.getItem("token");
  const [content, setContent] = useState("");
  const idAuthor = useSelector((state) => state.infoAuthorReducer.infoAuthor);
  function handleChange(e) {
    setContent(e.target.value);
  }
  function handleSubmit() {
    const data = {
      author: idAuthor.id,
      content: content,
      post: idPostDetail,
      parent: idComment,
    };
    dispatch(actPostNewCommentAsync(data, token)).then((res) => {
      if (res.ok) {
        dispatch(actGetCommentAsync({ post: idPostDetail, page: 1 }));
        setContent("");
        console.log(test);
      }
    });
  }
  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/#">
            <img src={item.author.avatar} alt="avatar" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/#" className="comments__section--user">
            {item.author.nickname}
          </a>
          <p className="comments__section--time">{item.date}</p>
          <div className="comments__section--text">
            {strHtmlAfterMarkup(strMarkup)}
          </div>
          <i
            className="ion-reply comments__section--reply"
            onClick={() => {
              setShowForm(!showForm);
            }}
          ></i>
          {showForm && (
            <>
              <div className="comments__form-reply">
                <div className="comments__form-reply--control">
                  <textarea value={content} onChange={handleChange} />
                </div>
                <div className="text-right">
                  <button className="btn btn-default" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Reply Comments */}

      {listComment.length > 0 && (
        <ul className="comments">
          {listComment.map((item) => (
            <CommentItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {restComment > 0 && (
        <div className="comments__hidden">
          <p onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm {restComment} câu trả
            lời
          </p>
        </div>
      )}
      {/* Reply form */}
      {/* <div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <a href="/#">
              <img src="./assets/images/avatar1.jpg" alt="a" />
            </a>
          </div>
          <textarea defaultValue={""} />
        </div>
        <div className="text-right">
          <button className="btn btn-default">Submit</button>
        </div>
      </div> */}
    </li>
  );
}

export default CommentItem;
