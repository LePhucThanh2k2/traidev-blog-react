import { api } from "./api";

const postService = {
  getList: (params) => {
    return api.get(`post/getListPagination.php`, {
      params: params,
    });
  },
};
export default postService;
