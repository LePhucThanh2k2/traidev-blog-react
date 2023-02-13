import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actGetCommentAsync,
  actPostNewCommentAsync,
} from "../../store/comment/action";
import CommentItem from "../CommentItem";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FormComment from "../FormComment";

function PostDetailComments() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const idPostDetail = useSelector((state) => state.postReducer.postDetail.id);
  const idAuthor = useSelector((state) => state.infoAuthorReducer.infoAuthor);
  const { currentPage, listComment, totalComment, totalPages, exclude } =
    useSelector((state) => {
      return state.commentReducer.dataComment;
    });

  const avtUser = idAuthor?.simple_local_avatar?.full;
  const restComment = totalComment - 5 * currentPage;
  const hasMorePost = currentPage < totalPages;
  function handleLoadMore() {
    toast("Wow so easy!");
    dispatch(
      actGetCommentAsync({ post: idPostDetail, page: currentPage + 1, exclude })
    );
  }

  function handleChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit() {
    const data = {
      author: idAuthor.id,
      content: content,
      post: idPostDetail,
      parent: 0,
    };

    dispatch(actPostNewCommentAsync(data)).then((res) => {
      if (res.ok) {
        // dispatch(actGetCommentAsync({ post: idPostDetail, page: 1 }));
        setContent("");
      }
    });
  }
  return (
    <div className="post-detail__comments">
      <FormComment
        funcHandleChange={handleChange}
        funcHandleSubmit={handleSubmit}
        content={content}
        avatar={avtUser}
      />
      {
        <>
          <p>{totalComment} Comments</p>
          <ul className="comments">
            {listComment.map((item) => (
              <CommentItem key={item.id} item={item} />
            ))}
            <ToastContainer />
            {hasMorePost && (
              <div className="comments-load_more" onClick={handleLoadMore}>
                Xem thêm {restComment} comments
              </div>
            )}
          </ul>
        </>
      }
    </div>
  );
}
export default PostDetailComments;
