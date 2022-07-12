import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mainNav">
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            OMDB Movie App
          </Link>
        </div>
        <div className="navbar__item navbar__profile">
          <img
            src="https://www.gravatar.com/avatar/?d=mp"
            alt="user"
            srcset=""
            onMouseEnter={() => setExpanded(!expanded)}
          />

          <div
            className="options"
            style={{ display: expanded ? "block" : "none" }}
            onMouseLeave={() => setExpanded(false)}
          >
            <div>Logout</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
