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
export function actGetListChildComment(params) {
  return {
    type: GET_LIST_CHILD_COMMENT,
    payload: params,
  };
}
export function actPostNewComment(data) {
  return { type: ACT_POST_NEW_COMMENT, payload: { data } };
}
export function actReplyComment(data) {
  console.log(data);
  return { type: REPLY_COMMENT, payload: { data } };
}
// ASYNC
export function actPostNewCommentAsync(data) {
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
  const { parent } = { ...params };
  return async (dispatch) => {
    try {
      const response = await commentService.getCommentPostDetail({ ...params });
      const listComment = response.data.map(mappingListComment);
      const totalPages = response.headers["x-wp-totalpages"];
      const totalComment = response.headers["x-wp-total"];
      const currentPage = params.page;
      if (parent === 0) {
        dispatch(
          actGetComment({
            totalPages,
            totalComment,
            data: listComment,
            currentPage,
          })
        );
      } else {
        dispatch(
          actGetListChildComment({
            totalPages,
            totalComment,
            data: listComment,
            currentPage,
            parent,
          })
        );
      }

      return { ok: true };
    } catch (error) {
      return { ok: false, message: "List Comment NotFound" };
    }
  };
}
