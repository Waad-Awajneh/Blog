import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import blogsReducer from "../reducers/blogsReducer";

const allReducers = combineReducers({
  blogsReducer,
});

const store = createStore(allReducers, {}, applyMiddleware(thunk));
export default store;
