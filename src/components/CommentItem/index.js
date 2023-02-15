import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMarkup, strHtmlAfterMarkup } from "../../helper";
import {
  actGetCommentAsync,
  actPostNewCommentAsync,
} from "../../store/comment/action";
import FormComment from "../FormComment";
import "./main.css";

function CommentItem({ item }) {
  // the number of comments you want to display
  const THE_NUMBER = 3;

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const strMarkup = createMarkup(item.content);
  const idComment = item.id;
  const idPostDetail = useSelector((state) => state.postReducer.postDetail.id);
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);
  const idAuthor = useSelector((state) => state.infoAuthorReducer.infoAuthor);
  const listComment = useSelector(
    (state) =>
      state.commentReducer.listChildComment[idComment]?.listComment || []
  );
  const { currentPage, exclude } = useSelector((state) => {
    return state.commentReducer.listChildComment;
  });

  useEffect(() => {
    dispatch(
      actGetCommentAsync({
        per_page: THE_NUMBER,
        post: idPostDetail,
        parent: idComment,
        page: currentPage || 1,
      })
    );
  }, []);
  let hasMorePost = false;
  let restComment;
  if (listComment.length > 0) {
    restComment = item.totalCommentReply - THE_NUMBER * currentPage;

    hasMorePost = restComment > 0;
  }
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
  }
  function handleLoadMore() {
    dispatch(
      actGetCommentAsync({
        per_page: THE_NUMBER,
        post: idPostDetail,
        parent: idComment,
        page: currentPage + 1,
        exclude,
      })
    );
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
        </ul>
      )}
      {hasMorePost && (
        <div className="comments-load_more" onClick={handleLoadMore}>
          Xem thêm {restComment} comments
        </div>
      )}
    </li>
  );
}

export default CommentItem;
