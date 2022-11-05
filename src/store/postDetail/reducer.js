import { GET_POST_DETAIL } from "./action";

const initState = {
  data: [],
};
function postDetailReducer(state = initState, action) {
  switch (action.type) {
    case GET_POST_DETAIL:
      return { ...state, data: action.payload.data };

    default:
      return state;
  }
}
export default postDetailReducer;
