import { api } from "./api";

const commentService = {
  postNewComment: (data, token) => {
    return api.post(
      `wp/v2/comments`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
export default commentService;
