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
};
export default postService;
