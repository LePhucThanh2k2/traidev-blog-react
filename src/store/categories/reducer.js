import { GET_LIST_CATEGORY } from "./action";

const initState = {
  categoryList: [],
};
function categoryReducer(state = initState, action) {
  switch (action.type) {
    case GET_LIST_CATEGORY:
      return { ...state, categoryList: action.payload.post };

    default:
      return state;
  }
}
export default categoryReducer;
