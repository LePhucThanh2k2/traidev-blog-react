import menuService from "../../services/menu";

export const GET_MAIN_MENU = "GET_MAIN_MENU ";

export function actGetMainMenu(post) {
  return { type: GET_MAIN_MENU, payload: { post } };
}

export function actGetMainMenuAsync() {
  return async (dispatch) => {
    const response = await menuService.getList();
    const menuList = response.data.items;
    dispatch(actGetMainMenu(menuList));
  };
}
