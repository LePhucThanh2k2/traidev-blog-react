import { GET_MAIN_MENU } from "../menu/action";

const initState = {
  listMenu: [],
};
function menuReducer(state = initState, action) {
  switch (action.type) {
    case GET_MAIN_MENU:
      return { ...state, listMenu: action.payload.post };

    default:
      return state;
  }
}
export default menuReducer;
