import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import movieReducer from "./reducer/movieReducer";
import playlistReducer from "./reducer/playlistReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    playlist: playlistReducer,
  },
});

export default store;
