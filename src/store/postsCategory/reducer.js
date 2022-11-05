import { GET_LIST_POST_BY_ID_CATEGORY } from "./action";

const initState = {
  listPost: { list: [], totalPages: 0, totalItems: 0 },
};
function postsCategory(state = initState, action) {
  switch (action.type) {
    case GET_LIST_POST_BY_ID_CATEGORY:
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
export default postsCategory;
