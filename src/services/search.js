import { api } from "./api";

const searchService = {
  getList: (params) => {
    return api.get(`wp/v2/posts`, {
      params,
    });
  },
};
export default searchService;
