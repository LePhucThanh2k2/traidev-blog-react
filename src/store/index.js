import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts/reducer";
import categoryReducer from "./categories/reducer";
import menuReducer from "./menu/reducer";
import infoAuthorReducer from "./auth/reducer";
import uploadAvatar from "./updateProfile/reducer";
import commentReducer from "./comment/reducer";

const rootReducer = combineReducers({
  postReducer,
  categoryReducer,
  menuReducer,
  infoAuthorReducer, //authReducer
  uploadAvatar,
  commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
