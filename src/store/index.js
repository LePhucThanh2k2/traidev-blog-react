import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts/reducer";
import categoryReducer from "./categories/reducer";
import menuReducer from "./menu/reducer";
const rootReducer = combineReducers({
  postReducer,
  categoryReducer,
  menuReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
