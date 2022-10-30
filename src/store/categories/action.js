import categoryService from "../../services/category";

export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";

export function actGetListCategory(post) {
  return { type: GET_LIST_CATEGORY, payload: { post } };
}

export function actGetListCategoryAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await categoryService.getList({ per_page, page });
    const posts = response.data;
    dispatch(actGetListCategory(posts));
  };
}
