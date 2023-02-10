import commentService from "../../services/comment";

export const ACT_POST_NEW_COMMENT = " ACT_POST_NEW_COMMENT";

export function actPostNewCommentAsync(data, token) {
  return async () => {
    try {
      await commentService.postNewComment(data, token);
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Posting A New Comment Is Wrong" };
    }
  };
}
