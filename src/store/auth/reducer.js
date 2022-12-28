import { ACT_LOGIN, ACT_FETCH_ME, ACT_LOGIN_SUCCESS } from "../auth/action";

const initState = {
  infoLogin: null,
  infoAuthor: null,
  token: "",
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
    case "ACT_LOGOUT":
      return {
        ...state,
        token: "",
        infoAuthor: null,
      };
    case ACT_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        infoAuthor: action.payload.user,
      };

    default:
      return state;
  }
}

export default infoAuthorReducer;
