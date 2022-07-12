import React from "react";
import { useSelector } from "react-redux";
import Card from "./searched/Card";
import "./PlaylistDetail.css";
import { favoriteHandler } from "../utils/contentManagement";

const PlaylistDetail = () => {
  const fav = useSelector((state) => state.playlist.fav);

  return (
    <>
      {fav?.length ? (
        <div className="favorites">
          {fav.map((movie) => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              addFavorite={(e) => favoriteHandler(movie, e)}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="favorite_warning"> There is no favorite movie.</div>
      )}
    </>
  );
};

export default PlaylistDetail;
