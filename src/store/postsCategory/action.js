import mappingPostData from "../../helper/mappingPostData";
import searchService from "../../services/search";

export const GET_LIST_POST_BY_ID_CATEGORY = "GET_LIST_POST_BY_ID_CATEGORY";

export function actGetListPostByIdCategory(data, totalPages, totalItems, page) {
  return {
    type: GET_LIST_POST_BY_ID_CATEGORY,
    payload: { data, totalPages, totalItems, currentPage: page },
  };
}

export function actGetListPostByIdCategoryAsync({
  per_page,
  page,
  categories,
}) {
  return async (dispatch) => {
    const response = await searchService.getList({
      per_page,
      page,
      categories,
    });
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const totalItems = parseInt(response.headers["x-wp-total"]);
    const data = response.data.map(mappingPostData);
    dispatch(actGetListPostByIdCategory(data, totalPages, totalItems, page));
  };
}
