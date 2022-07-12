import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoutButton from "../../auth/login-signup/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const { user } = useAuth0();
  const { name, picture, email } = user;

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
            src={
              picture != null
                ? picture
                : "https://www.gravatar.com/avatar/?d=mp"
            }
            alt="user"
            srcset=""
            onMouseEnter={() => setExpanded(!expanded)}
          />

          <div
            className="options"
            style={{ display: expanded ? "block" : "none" }}
            onMouseLeave={() => setExpanded(false)}
          >
            <LogoutButton />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
