import mappingPostData from "../../helper/mappingPostData";
import searchService from "../../services/search";

export const GET_LIST_POST_BY_KEYWORD = "GET_LIST_POST_BY_KEYWORD";

export function actGetListPostByKeyword(data, totalPages, totalItems, page) {
  return {
    type: GET_LIST_POST_BY_KEYWORD,
    payload: { data, totalPages, totalItems, currentPage: page },
  };
}

export function actGetListPostByKeywordAsync({ per_page, page, search }) {
  return async (dispatch) => {
    const response = await searchService.getList({ per_page, page, search });
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const totalItems = parseInt(response.headers["x-wp-total"]);
    const data = response.data.map(mappingPostData);
    dispatch(actGetListPostByKeyword(data, totalPages, totalItems, page));
  };
}
