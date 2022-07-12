import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getData } from "../../../utils/contentManagement";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faSearch} size="2x" />
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
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleClearBtn}
          size="2x"
          className="fa-times"
        />
      </div>
    </div>
  );
};

export default SearchBar;
