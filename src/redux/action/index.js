export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_JOBS = "SET_JOBS";
export const SET_JOBS_LOADING_ON = "SET_JOBS_LOADING_ON";
export const SET_JOBS_LOADING_OFF = "SET_JOBS_LOADING_OFF";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const addToFaoritesAction = (job) => ({ type: ADD_TO_FAVORITES, payload: job });
export const removeFromFavoritesAction = (id) => ({ type: REMOVE_FROM_FAVORITES, payload: id });

export const getJobsAction = (endpoint) => {
  return async (dispatch, getState) => {
    const globalState = getState();
    dispatch({ type: SET_JOBS_LOADING_ON });
    try {
      let resp = await fetch(endpoint);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({ type: SET_JOBS, payload: fetchedJobs });
      } else {
        console.log("error");
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      console.log(error);

      dispatch({ type: HAS_ERROR_ON });
      dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
    } finally {
      dispatch({ type: SET_JOBS_LOADING_OFF });
    }
  };
};
