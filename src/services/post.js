import { api } from "./api";

const postService = {
  getList: (params) => {
    return api.get(`wp/v2/posts`, {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
  getPostsPopular: (params) => {
    return postService.getList({ ...params, orderby: "post_views" });
  },
  getPostDetail: (slug) => {
    return postService.getList({ slug });
  },
  getListPostBySearch: (params) => {
    return postService.getList({ ...params });
  },
  getCommentPostDetail: (params) => {
    return api.get(`/wp/v2/comments`, {
      params: {
        per_page: 3,
        page: 1,
        parent: 0,
        ...params,
      },
    });
  },
};
export default postService;
