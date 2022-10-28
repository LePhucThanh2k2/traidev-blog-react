import { api } from "./api";

const postService = {
  getList: (params) => {
    return api.get(`wp/v2/posts`, {
      params: params,
    });
  },
};
export default postService;
