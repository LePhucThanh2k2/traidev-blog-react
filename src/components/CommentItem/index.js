import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMarkup, strHtmlAfterMarkup } from "../../helper";
import { actPostNewCommentAsync } from "../../store/comment/action";
import FormComment from "../FormComment";
import "./main.css";

function CommentItem({ item }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const strMarkup = createMarkup(item.content);
  const idComment = item.id;
  let currentPage = 0;
  const idPostDetail = useSelector((state) => state.postReducer.postDetail.id);
  // const demo = useSelector((state) => state);
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);
  const idAuthor = useSelector((state) => state.infoAuthorReducer.infoAuthor);
  const dataChildComment = useSelector((state) => state.commentReducer);
  // const test = useSelector((state) => state.postReducer);
  const listComment = useSelector(
    (state) =>
      state.commentReducer.listChildComment[idComment]?.listComment || []
  );
  let restComment = item.totalCommentReply - 3 * currentPage;

  // function handleLoadMore() {
  //   dispatch(
  //     actGetListChildCommentAsync({
  //       per_page: 3,
  //       page: currentPage + 1,
  //       parent: idComment,
  //       post: idPostDetail,
  //     })
  //   );
  // }

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
    dispatch(actPostNewCommentAsync(data, token));
    console.log("dataChildComment", dataChildComment);
  }
  console.log("listCommentChild", listComment);
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
            <FormComment
              funcHandleChange={handleChange}
              funcHandleSubmit={handleSubmit}
              content={content}
            />
          )}
        </div>
      </div>

      {/* Reply Comments */}

      {listComment.length > 0 && (
        <ul className="comments">
          {listComment.map((item) => (
            <CommentItem key={item.id} item={item} />
          ))}
          {/* {hasMorePost && (
            <div className="comments-load_more" onClick={handleLoadMore}>
              Xem thêm {restComment} comments
            </div>
          )} */}
        </ul>
      )}
    </li>
  );
}

export default CommentItem;
