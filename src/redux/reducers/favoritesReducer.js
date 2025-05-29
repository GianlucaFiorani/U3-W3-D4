import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../action";

const initialState = {
  jobs: {
    createdAt: new Date().toISOString(),
    content: [],
  },
};
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: state.jobs.content.filter((j) => j._id !== action.payload),
        },
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};
export default favoritesReducer;
