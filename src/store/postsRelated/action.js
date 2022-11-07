import mappingPostData from "../../helper/mappingPostData";
import postService from "../../services/post";
export const GET_POST_RELATED_BY_AUTHOR = "GET_POST_RELATED_BY_AUTHOR ";
export function actGetPostsRelated(data) {
  return { type: GET_POST_RELATED_BY_AUTHOR, payload: { data } };
}

export function actGetPostsRelatedAsync({ author }) {
  return async (dispatch) => {
    const response = await postService.getList({ author });
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostsRelated(posts));
  };
}
