import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import netflix from "../assets/netflix-logo.svg";
import search from "../assets/search-nav.svg";
import close from "../assets/close.svg";
import apiConfig from "../API/reguests";
const searchMovieUrl = `${apiConfig.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiConfig.APIKEY}`;
function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(movies);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleShowSearch = () => {
    setShowSearch(true);
  };
  const handleHideSearch = () => {
    setShowSearch(false);
  };

  return (
    <>
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
          {showSearch ? (
            <form
              autoComplete="off"
              onSubmit={
                searchMovie /*sistemare onsubmit se e vuoto o direttamente al value change del input  */
              }
            >
              <input
                type="text"
                name="query"
                value={query}
                onChange={changeHandler}
                placeholder="Search..."
              />
            </form>
          ) : null}
          <button
            onClick={!showSearch ? handleShowSearch : handleHideSearch}
            className="search-button"
          >
            <img src={showSearch ? close : search} alt="search-bar" />
          </button>
          <button className="login-button">Login</button>
        </div>
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((el) => {
            return <div>{el.title}</div>;
          })}
        </div>
      ) : null}
    </>
  );
}

export default Nav;
