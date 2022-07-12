const INITIAL_STATE = {
  isLoggedIn: false,
  userData: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return {
        ...state,
        userData: payload,
        isLoggedIn: true,
      };

    case "LOG_OUT":
      return {
        ...INITIAL_STATE,
        isLoggedIn: false,
      };

    /********** return the initial state ************/
    default:
      return state;
  }
};

export default userReducer;
