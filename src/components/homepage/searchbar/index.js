import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getData } from "../../../utils/contentManagement";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  const pressedEntered = (e) => {
    if (e.keyCode == 13) {
      if (searchVal && searchVal.length > 2) {
        navigate("/query");
        dispatch(getData(searchVal));
      }
    }
  };

  return (
    <div className="container">
      <div className="input-wrap">
        <i className="fas fa-search"></i>
        <label for="movie-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="movie-search"
          id="movie-search"
          placeholder="Search Movies"
          autoComplete="off"
          onKeyDown={(e) => pressedEntered(e)}
        />
        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default SearchBar;
