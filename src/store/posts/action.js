import { mappingPostData, mappingPostDetailData } from "../../helper";
import postService from "../../services/post";
import { actGetCommentAsync } from "../comment/action";

//==================================Action type============================================================
export const GET_POST_LATEST = "GET_POST_LATEST ";
export const GET_POST_POPULAR = "GET_POST_POPULAR ";
export const GET_POST_GENERAL = "GET_POST_GENERAL ";
export const GET_POST_DETAIL = "GET_POST_DETAIL ";
export const GET_POST_RELATED_BY_AUTHOR = "GET_POST_RELATED_BY_AUTHOR ";
export const GET_LIST_POST_BY_ID_CATEGORY = "GET_LIST_POST_BY_ID_CATEGORY";
export const GET_LIST_POST_BY_KEYWORD = "GET_LIST_POST_BY_KEYWORD";
export const GET_POST_PAGING = "GET_POST_PAGING";

//==================================Action Creator============================================================
export function actGetPostLatest(posts) {
  return { type: GET_POST_LATEST, payload: { posts } };
}

export function actGetPostPopular(posts) {
  return { type: GET_POST_POPULAR, payload: { posts } };
}

export function actGetPostGeneral(params) {
  return {
    type: GET_POST_GENERAL,
    payload: { ...params },
  };
}
export function actGetPostPaging(params) {
  return {
    type: GET_POST_PAGING,
    payload: { ...params },
  };
}

export function actGetPostDetail(post) {
  return { type: GET_POST_DETAIL, payload: { post } };
}

export function actGetPostsRelated(posts) {
  return { type: GET_POST_RELATED_BY_AUTHOR, payload: { posts } };
}

export function actGetListPostByIdCategory(data, totalPages, totalItems, page) {
  return {
    type: GET_LIST_POST_BY_ID_CATEGORY,
    payload: { data, totalPages, totalItems, currentPage: page },
  };
}

export function actGetListPostByKeyword(posts, totalPages, totalItems, page) {
  return {
    type: GET_LIST_POST_BY_KEYWORD,
    payload: { posts, totalPages, totalItems, page },
  };
}
//==================================Action Async============================================================
export function actGetPostLatestAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await postService.getList({ per_page, page });
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostLatest(posts));
  };
}

export function actGetPostPopularAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await postService.getPostsPopular({ per_page, page });
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostPopular(posts));
  };
}
export function actGetPostGeneralAsync(params) {
  const { search, page } = { ...params };
  return async (dispatch) => {
    const response = await postService.getList({ ...params });
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const totalItems = parseInt(response.headers["x-wp-total"]);
    const posts = response.data.map(mappingPostData);
    if (search) {
      dispatch(actGetListPostByKeyword(posts, totalPages, totalItems, page));
    } else {
      dispatch(actGetPostGeneral({ posts, totalPages, page }));
    }
  };
}
export function actGetPostPagingAsync(params) {
  console.log("params", params);
  const { page } = { ...params };
  return async (dispatch) => {
    const response = await postService.getList(params);
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const totalItems = parseInt(response.headers["x-wp-total"]);
    const posts = response.data.map(mappingPostData);

    dispatch(actGetPostPaging({ posts, totalPages, page, totalItems }));
  };
}

export function actGetPostDetailAsync({ slug }) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostDetail(slug);
      const post = response.data[0];
      if (!post) throw new Error("post not found");
      const authorId = post.author;
      dispatch(actGetPostDetail(mappingPostDetailData(post)));
      dispatch(actGetPostsRelatedAsync({ authorId }));
      dispatch(actGetCommentAsync({ post: post.id, per_page: 5, page: 1 }));
      return { ok: true };
    } catch (error) {
      // console.log(error.message);
      return { ok: false };
    }
  };
}

export function actGetPostsRelatedAsync({ author }) {
  return async (dispatch) => {
    const response = await postService.getList({ author });
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostsRelated(posts));
  };
}

export function actGetListPostByIdCategoryAsync({
  per_page,
  page,
  categories,
}) {
  return async (dispatch) => {
    const response = await postService.getListPostBySearch({
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

export function actGetListPostByKeywordAsync({ per_page, page, search }) {
  return async (dispatch) => {
    const response = await postService.getListPostBySearch({
      per_page,
      page,
      search,
    });
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const totalItems = parseInt(response.headers["x-wp-total"]);
    const posts = response.data.map(mappingPostData);
    dispatch(actGetListPostByKeyword(posts, totalPages, totalItems, page));
  };
}
