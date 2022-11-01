import { api } from "./api";

const menuService = {
  getList: (params) => {
    return api.get(`/menus/v1/menus/main-menu-vi`, {
      params: params,
    });
  },
};
export default menuService;
