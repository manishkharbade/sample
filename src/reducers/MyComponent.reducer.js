import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actions/actions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const MyComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_DATA_ERROR":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

export default MyComponentReducer;
