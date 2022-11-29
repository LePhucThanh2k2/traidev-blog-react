import {
  GET_POST_LATEST,
  GET_POST_POPULAR,
  GET_POST_GENERAL,
  GET_POST_DETAIL,
  GET_POST_RELATED_BY_AUTHOR,
  GET_LIST_POST_BY_ID_CATEGORY,
  GET_LIST_POST_BY_KEYWORD,
  GET_LIST_COMMENT,
} from "./action";

const initState = {
  listPostLatest: [],
  listPostPopular: [],
  listPostGeneral: { list: [], currentPageSearch: 1 },
  postDetail: null,
  listPostRelated: [],
  listPostByCategory: { list: [], currentPageCategory: 1 },
  listPostBySearch: [],
  dataComment: { listComment: [], totalComment: 0 },
};
function postReducer(state = initState, action) {
  switch (action.type) {
    case GET_POST_LATEST:
      return { ...state, listPostLatest: action.payload.posts };
    case GET_POST_POPULAR:
      return { ...state, listPostPopular: action.payload.posts };
    case GET_POST_GENERAL:
      return {
        ...state,
        listPostGeneral: {
          ...state.listPostGeneral,
          list: [...state.listPostGeneral.list, ...action.payload.posts],
          totalPages: action.payload.totalPages,
        },
      };
    case GET_POST_DETAIL:
      return { ...state, postDetail: action.payload.post };
    case GET_POST_RELATED_BY_AUTHOR:
      return { ...state, listPostRelated: action.payload.posts };
    case GET_LIST_POST_BY_ID_CATEGORY:
      const currentPageCategory = action.payload.currentPage;
      return {
        ...state,
        listPostByCategory: {
          ...state.listPostByCategory,
          list:
            currentPageCategory < 2
              ? [...action.payload.data]
              : [...state.listPostByCategory.list, ...action.payload.data],
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPageCategory: action.payload.currentPage,
        },
      };
    case GET_LIST_POST_BY_KEYWORD:
      const currentPageSearch = action.payload.currentPage;
      return {
        ...state,
        listPostBySearch: {
          ...state.listPostBySearch,

          list:
            currentPageSearch < 2
              ? [...action.payload.posts]
              : [...state.listPostBySearch.list, ...action.payload.posts],
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPageSearch: action.payload.currentPage,
        },
      };
    case GET_LIST_COMMENT:
      return {
        ...state,
        dataComment: {
          listComment: action.payload.data,
          totalComment: action.payload.totalComment,
        },
      };
    default:
      return state;
  }
}
export default postReducer;
