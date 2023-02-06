import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentItem, createMarkup, strHtmlAfterMarkup } from "../../helper";
import { actGetListChildCommentAsync } from "../../store/posts/action";
import "./main.css";

function CommentItem({ item }) {
  const idPostDetail = useSelector((state) => state.postReducer.postDetail.id);
  const strMarkup = createMarkup(item.content);
  const dispatch = useDispatch();
  const idComment = item.id;
  const dataChildComment = useSelector(
    (state) => state.postReducer.listChildComment[idComment]
  );

  console.log("item", item);
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
          <i className="ion-reply comments__section--reply"></i>
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
