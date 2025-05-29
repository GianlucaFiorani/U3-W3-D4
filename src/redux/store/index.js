import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import errorReducer from "../reducers/errorReducer";
import jobsReducer from "../reducers/jobsReducer";
const rootReducer = combineReducers({
  favorite: favoritesReducer,
  error: errorReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: favoritesReducer,
});
export default store;
