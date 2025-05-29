import { SET_JOBS, SET_JOBS_LOADING_OFF, SET_JOBS_LOADING_ON } from "../action";

const initialState = {
  content: [],
  isLoading: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case SET_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case SET_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default jobsReducer;
