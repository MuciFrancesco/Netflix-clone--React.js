import React from "react";
import { Link } from "react-router-dom";
import netflix from "../assets/netflix-logo.svg";
import search from "../assets/search-nav.svg";
function Nav() {
  return (
    <div className="nav">
      <div className="nav-group-1">
        <img className="nav-logo" src={netflix} alt="Netflix-logo" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/series">Tv Series</Link>
          <Link to="/film">Film</Link>
          <Link to="/myList">My List</Link>
        </div>
      </div>
      <div className="nav-group-2">
        <button className="search-button">
          <img src={search} alt="search-bar" />
        </button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Nav;
