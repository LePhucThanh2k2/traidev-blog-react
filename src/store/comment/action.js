import { mappingListComment } from "../../helper";
import commentService from "../../services/comment";
export const GET_LIST_COMMENT = "GET_LIST_COMMENT";
export const REPLY_COMMENT = "REPLY_COMMENT";
export const GET_LIST_CHILD_COMMENT = "GET_LIST_CHILD_COMMENT";

export const ACT_POST_NEW_COMMENT = " ACT_POST_NEW_COMMENT";

export function actGetComment(params) {
  return {
    type: GET_LIST_COMMENT,
    payload: { ...params },
  };
}

export function actPostNewComment(data) {
  return { type: ACT_POST_NEW_COMMENT, payload: { data } };
}
export function actReplyComment(data) {
  return { type: REPLY_COMMENT, payload: { data } };
}
// ASYNC
export function actPostNewCommentAsync(data) {
  console.log("data actPostNewCommentAsync", data);
  return async (dispatch) => {
    try {
      const response = await commentService.postNewComment(data);
      const newComment = mappingListComment(response.data);
      const parenId = response.data.parent;

      if (parenId === 0) {
        dispatch(actPostNewComment(newComment));
      } else {
        dispatch(actReplyComment(newComment));
      }
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Posting A New Comment Is Wrong" };
    }
  };
}

export function actGetCommentAsync(params) {
  return async (dispatch) => {
    try {
      const response = await commentService.getCommentPostDetail({ ...params });
      const listComment = response.data.map(mappingListComment);

      dispatch(
        actGetComment({
          totalPages: response.headers["x-wp-totalpages"],
          totalComment: response.headers["x-wp-total"],
          data: listComment,
          currentPage: params.page,
        })
      );

      return { ok: true };
    } catch (error) {
      return { ok: false, message: "List Comment NotFound" };
    }
  };
}
