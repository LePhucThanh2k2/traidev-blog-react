import { api } from "./api";

const commentService = {
  postNewComment: (params) => {
    return api.get(`wp/v2/comments`, {
      params: {
        ...params,
        author: 4,
        content: "User Test 03 demo bình luận bài viết id 45",
        post: 4555,
        parent: 0,
      },
    });
  },
};
export default commentService;
