import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import errorReducer from "../reducers/errorReducer";
import jobsReducer from "../reducers/jobsReducer";
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  error: errorReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
