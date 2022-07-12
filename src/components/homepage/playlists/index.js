import React, { useState } from "react";
import "./Playlists.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Playlists = () => {
  const listOfPlaylists = useSelector(
    (state) => state.playlist.listOfPlaylists
  );

  return (
    <div className="wrapper">
      {listOfPlaylists?.map((list, id) => {
        return (
          <Link
            to={{
              pathname: `/playlist/${id}`,
            }}
            style={{ textDecoration: "none", color: "inherit" }}
            key={id}
          >
            <div className="rounded">
              <h3>{list}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Playlists;
