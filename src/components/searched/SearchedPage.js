import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchedPage.css";
import { favoriteHandler } from "../../utils/contentManagement";

const SearchedPage = () => {
  const movies = useSelector((state) => state.movie.movieList);
  return (
    <div className="outerDiv">
      <div className="movies">
        {movies?.map((movie) => {
          return (
            <Link
              to={{
                pathname: `/query/selected/${movie.imdbID}`,
              }}
              style={{ textDecoration: "none", color: "inherit" }}
              key={movie.imdbID}
            >
              <Card
                key={movie.imdbID}
                image={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                addFavorite={(e) => favoriteHandler(movie, e)}
                isFavorite={movie.isFavorite}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchedPage;
