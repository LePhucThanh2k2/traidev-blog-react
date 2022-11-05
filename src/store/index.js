import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts/reducer";
import categoryReducer from "./categories/reducer";
import menuReducer from "./menu/reducer";
import searchReducer from "./search/reducer";
import postDetailReducer from "./postDetail/reducer";
import postsRelatedReducer from "./postsRelated/reducer";
import postsCategory from "./postsCategory/reducer";
const rootReducer = combineReducers({
  postReducer,
  categoryReducer,
  menuReducer,
  searchReducer,
  postDetailReducer,
  postsRelatedReducer,
  postsCategory,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
