import { handleHashCategoryById } from "../../helper";
import categoryService from "../../services/category";

export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";

export function actGetListCategory(post) {
  return { type: GET_LIST_CATEGORY, payload: { post } };
}

export function actGetListCategoryAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await categoryService.getList({ per_page, page });
    const posts = response.data;
    const data = handleHashCategoryById(posts);
    dispatch(actGetListCategory(data));
  };
}
