import {
  ACT_LOGIN,
  ACT_FETCH_ME,
  ACT_LOGIN_SUCCESS,
  ACT_GET_USER,
} from "../auth/action";

const initState = {
  infoLogin: null,
  infoAuthor: null,
  token: "",
  avtUser: null,
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
    case ACT_GET_USER:
      return {
        ...state,
        avtUser: action.payload.data,
      };

    default:
      return state;
  }
}

export default infoAuthorReducer;
