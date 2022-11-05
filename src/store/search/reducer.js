import { GET_LIST_POST_BY_KEYWORD } from "./action";

const initState = {
  listPost: { list: [], totalPages: 0, totalItems: 0 },
};
function searchReducer(state = initState, action) {
  switch (action.type) {
    case GET_LIST_POST_BY_KEYWORD:
      const currentPage = action.payload.currentPage;
      return {
        ...state,
        listPost: {
          ...state.listPost,

          list:
            currentPage < 2
              ? [...action.payload.data]
              : [...state.listPost.list, ...action.payload.data],
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPage,
        },
      };

    default:
      return state;
  }
}
export default searchReducer;
