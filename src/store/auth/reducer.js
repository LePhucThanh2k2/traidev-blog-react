import { ACT_LOGIN, ACT_FETCH_ME } from "../auth/action";

const initState = {
  infoLogin: {},
  infoAuthor: {},
};
function infoAuthorReducer(state = initState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      return {
        ...state,
        infoLogin: action.payload.data,
      };
    case ACT_FETCH_ME:
      return {
        ...state,
        infoAuthor: action.payload.data,
      };

    default:
      return state;
  }
}
export default infoAuthorReducer;
