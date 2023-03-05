import * as CONSTANTS from "./constant";

export const getBlogs = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.LOADING });
  try {
    const response = await fetch("http://localhost:8000/Blogs");
    const data = await response.json();
    if (data) {
      dispatch({ type: CONSTANTS.FETCH_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.FETCH_FAILED, payload: error });
  }
};

export const getSingleBlog = (id) => async (dispatch) => {
  dispatch({ type: CONSTANTS.LOADING });
  try {
    const response = await fetch(`http://localhost:8000/Blogs/${id}`);
    const data = await response.json();
    if (data) {
      dispatch({ type: CONSTANTS.GET_SINGLE_BLOG, payload: data });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.FETCH_FAILED, payload: error });
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  dispatch({ type: CONSTANTS.LOADING });
  try {
    await fetch(`http://localhost:8000/Blogs/${id}`, { method: "DELETE" });
    dispatch({ type: CONSTANTS.DELETE_BLOG, payload: id });
  } catch (error) {
    dispatch({ type: CONSTANTS.FETCH_FAILED, payload: error });
  }
};
