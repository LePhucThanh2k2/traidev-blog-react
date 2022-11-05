import postService from "../../services/post";
export const GET_POST_DETAIL = "GET_POST_DETAIL ";
export function actGetPostDetail(data) {
  return { type: GET_POST_DETAIL, payload: { data } };
}

export function actGetPostDetailAsync({ slug }) {
  return async (dispatch) => {
    const response = await postService.getList({ slug });
    const posts = response.data;
    dispatch(actGetPostDetail(posts));
  };
}
