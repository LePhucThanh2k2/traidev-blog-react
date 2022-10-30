import mappingPostData from "../../helper/mappingPostData";
import postService from "../../services/post";

export const GET_POST_LATEST = "GET_POST_LATEST ";
export const GET_POST_POPULAR = "GET_POST_POPULAR ";
export const GET_POST_GENERAL = "GET_POST_GENERAL ";

export function actGetPostLatest(post) {
  return { type: GET_POST_LATEST, payload: { post } };
}
export function actGetPostPopular(post) {
  return { type: GET_POST_POPULAR, payload: { post } };
}
export function actGetPostGeneral(post, totalPages) {
  return {
    type: GET_POST_GENERAL,
    payload: { post, totalPages },
  };
}

export function actGetPostLatestAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await postService.getList({ per_page, page });
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostLatest(posts));
  };
}

export function actGetPostPopularAsync({ per_page, page, orderby }) {
  return async (dispatch) => {
    const response = await postService.getList({ per_page, page, orderby });
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostPopular(posts));
  };
}
export function actGetPostGeneralAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await postService.getList({ per_page, page });
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostGeneral(posts, totalPages));
  };
}
