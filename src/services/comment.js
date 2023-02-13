import { api } from "./api";

const commentService = {
  getCommentPostDetail: (params) => {
    return api.get(`/wp/v2/comments`, {
      params: {
        per_page: 5,
        page: 1,
        parent: 0,
        order: "asc",
        ...params,
      },
    });
  },
  postNewComment: (data) => {
    const token = localStorage.getItem("token");

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
