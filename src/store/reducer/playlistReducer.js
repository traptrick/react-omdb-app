const INITIAL_STATE = {
  listOfPlaylists: ["favorite"],
  selectedPlaylist: [],
  fav: [{}],
};

const playlistReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_LIST_OF_PLAYLISTS":
      return {
        ...state,
        movieList: payload,
      };

    case "SELECTED_PLAYLIST":
      return {
        ...state,
        selected: payload,
      };

    case "ADD_FAV":
      return {
        ...state,
        fav: [...state.fav, { payload }],
      };

    /********** return the initial state ************/
    default:
      return state;
  }
};

export default playlistReducer;
