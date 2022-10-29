import { GET_POST_LATEST, GET_POST_POPULAR, GET_POST_GENERAL } from "./action";

const initState = {
  listPostLatest: [],
  listPostPopular: [],
  listPostGeneral: { list: [], currentPage: 1 },
};
function postReducer(state = initState, action) {
  switch (action.type) {
    case GET_POST_LATEST:
      return { ...state, listPostLatest: action.payload.post };
    case GET_POST_POPULAR:
      return { ...state, listPostPopular: action.payload.post };
    case GET_POST_GENERAL:
      return {
        ...state,
        listPostGeneral: {
          ...state.listPostGeneral,
          list: [...state.listPostGeneral.list, ...action.payload.post],
          totalPages: action.payload.totalPages,
        },
      };
    default:
      return state;
  }
}
export default postReducer;
