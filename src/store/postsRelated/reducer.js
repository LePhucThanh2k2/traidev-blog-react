import { GET_POST_RELATED_BY_AUTHOR } from "./action";

const initState = {
  data: [],
};
function postsRelatedReducer(state = initState, action) {
  switch (action.type) {
    case GET_POST_RELATED_BY_AUTHOR:
      return { ...state, data: action.payload.data };

    default:
      return state;
  }
}
export default postsRelatedReducer;
