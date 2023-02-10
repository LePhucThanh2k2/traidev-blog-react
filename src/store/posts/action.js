import {
  mappingListComment,
  mappingPostData,
  mappingPostDetailData,
} from "../../helper";
import postService from "../../services/post";

//==================================Action type============================================================
export const GET_POST_LATEST = "GET_POST_LATEST ";
export const GET_POST_POPULAR = "GET_POST_POPULAR ";
export const GET_POST_GENERAL = "GET_POST_GENERAL ";
export const GET_POST_DETAIL = "GET_POST_DETAIL ";
export const GET_POST_RELATED_BY_AUTHOR = "GET_POST_RELATED_BY_AUTHOR ";
export const GET_LIST_POST_BY_ID_CATEGORY = "GET_LIST_POST_BY_ID_CATEGORY";
export const GET_LIST_POST_BY_KEYWORD = "GET_LIST_POST_BY_KEYWORD";
export const GET_LIST_COMMENT = "GET_LIST_COMMENT";
export const GET_LIST_CHILD_COMMENT = "GET_LIST_CHILD_COMMENT";
//==================================Action Creator============================================================
export function actGetPostLatest(posts) {
  return { type: GET_POST_LATEST, payload: { posts } };
}

export function actGetPostPopular(posts) {
  return { type: GET_POST_POPULAR, payload: { posts } };
}

export function actGetPostGeneral(posts, totalPages) {
  return {
    type: GET_POST_GENERAL,
    payload: { posts, totalPages },
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
    payload: { posts, totalPages, totalItems, currentPage: page },
  };
}
export function actGetComment(params) {
  return {
    type: GET_LIST_COMMENT,
    payload: { ...params },
  };
}
export function actGetListChildComment(params) {
  return {
    type: GET_LIST_CHILD_COMMENT,
    payload: { ...params },
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
export function actGetPostGeneralAsync({ per_page, page }) {
  return async (dispatch) => {
    const response = await postService.getList({ per_page, page });
    const totalPages = parseInt(response.headers["x-wp-totalpages"]);
    const posts = response.data.map(mappingPostData);
    dispatch(actGetPostGeneral(posts, totalPages));
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
export function actGetCommentAsync(params) {
  return async (dispatch) => {
    try {
      const response = await postService.getCommentPostDetail({ ...params });
      const listComment = response.data.map(mappingListComment);
      dispatch(
        actGetComment({
          totalPages: response.headers["x-wp-totalpages"],
          totalComment: response.headers["x-wp-total"],
          data: listComment,
          currentPage: params.page,
        })
      );

      return { ok: true };
    } catch (error) {
      return { ok: false, message: "List Comment NotFound" };
    }
  };
}
export function actGetListChildCommentAsync(params) {
  return async (dispatch) => {
    try {
      const response = await postService.getCommentPostDetail({ ...params });
      // console.log(response);
      const listComment = response.data.map(mappingListComment);
      dispatch(
        actGetListChildComment({
          totalPages: response.headers["x-wp-totalpages"],
          totalComment: response.headers["x-wp-total"],
          data: listComment,
          parentId: params.parent,
          currentPage: params.page,
        })
      );
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "List Comment NotFound" };
    }
  };
}
