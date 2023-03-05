import * as CONSTANTS from "./constant";

const initialState = {
  blogs: [],
  singleBlog: {},
  loading: false,
  error: null,
};

export default function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case CONSTANTS.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONSTANTS.GET_SINGLE_BLOG:
      return {
        ...state,
        loading: false,
        singleBlog: action.payload,
      };
    case CONSTANTS.DELETE_BLOG:
      return {
        ...state,
        loading: false,
        blogs: state.blogs?.filter((blog) => {
          return blog.id !== action.payload;
        }),
      };
    case CONSTANTS.CLEAN:
      return {
        ...state,
        singleBlog: {},
      };

    default:
      return state;
  }
}
