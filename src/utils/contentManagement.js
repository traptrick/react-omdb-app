import axios from "axios";
const API_KEY = "133e6fdd";

export const getData = (query) => async (dispatch) => {
  const response = await axios(
    `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
  );

  if (response) {
    //console.log("respo", response.data.Search);
    dispatch({ type: "GET_DATA", payload: response.data.Search });
  }
};

export const getDetails = (id) => async (dispatch) => {
  const response = await axios(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );

  if (response) {
    console.log("respo", response.data);
    dispatch({ type: "GET_DETAILS", payload: response.data });
  }
};

export const favoriteHandler = (movie, e) => async (dispatch) => {
  e.preventDefault();
  dispatch({ type: "ADD_FAV", payload: movie });
};
