const INITIAL_STATE = {
  movieList: [],
  selected: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return {
        ...state,
        movieList: payload,
      };

    case "GET_DETAILS":
      return {
        ...state,
        selected: payload,
      };

    /********** return the initial state ************/
    default:
      return state;
  }
};

export default movieReducer;
