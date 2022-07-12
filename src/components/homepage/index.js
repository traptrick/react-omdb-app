import React from "react";
import "./Homepage.css";
import SearchBar from "./searchbar";
import Playlists from "./playlists";

const Homepage = () => {
  return (
    <div className="mainDiv">
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="playlistDiv">
        <Playlists />
      </div>
    </div>
  );
};

export default Homepage;
