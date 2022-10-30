import { api } from "./api";

const categoryService = {
  getList: (params) => {
    return api.get(`/wp/v2/categories`, {
      params: params,
    });
  },
};
export default categoryService;
