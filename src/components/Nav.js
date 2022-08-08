import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import netflix from "../assets/netflix-logo.svg";
import search from "../assets/search-nav.svg";
import close from "../assets/close.svg";
import SearchBar from "./SearchBar";

function Nav({
  handleCloseDetails,
  handleClick,
  moreInfo,
  trailer,
  showTrailer,
  videoMovieTrailer,
  selectedTrailer,
  cart,
  addToFavorite,
  removeToFavorite,
  setMoreInfo,
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovie = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("Searching");

      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      fetch(url)
        .then((data) => data.json())
        .then((data) => setMovies(data?.results));
    },
    [query]
  );
  console.log(movies);
  const changeHandler = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const clearInput = useCallback(() => {
    setQuery("");
    setMovies([]);
  }, []);

  const handleShowSearch = useCallback(() => {
    setShowSearch(true);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);
  const handleHideSearch = useCallback(() => {
    setShowSearch(false);
    document.body.style.overflow = "auto";
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <div
        className="nav"
        style={showSearch ? { background: " #000000f5" } : null}
      >
        <div className="nav-group-1">
          <img className="nav-logo" src={netflix} alt="Netflix-logo" />
          {width >= 700 ? (
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/series">Tv Series</Link>
              <Link to="/film">Film</Link>
              <Link to="/myList">My List</Link>
            </div>
          ) : (
            <div className="nav-links-dropdown">
              <button className="dropbtn">Browse</button>
              <div className="dropdown-content">
                <Link to="/">Home</Link>
                <Link to="/series">Tv Series</Link>
                <Link to="/film">Film</Link>
                <Link to="/myList">My List</Link>
              </div>
            </div>
          )}
        </div>
        <div className="nav-group-2">
          {showSearch ? (
            <input
              autoComplete="off"
              type="text"
              name="query"
              value={query}
              onChange={(e) => {
                changeHandler(e);
                searchMovie(e);
              }}
              placeholder="Search..."
              disabled={moreInfo !== -1}
            />
          ) : null}
          <button
            onClick={
              !showSearch
                ? handleShowSearch
                : () => {
                    clearInput();
                    handleHideSearch();
                  }
            }
            className="search-button"
          >
            {moreInfo !== -1 ? null : (
              <img
                className={showSearch ? "close" : "search"}
                src={showSearch ? close : search}
                alt="search-bar"
              />
            )}
          </button>
          <button className="login-button">Login</button>
        </div>
      </div>
      {showSearch === true ? (
        <SearchBar
          setMoreInfo={setMoreInfo}
          handleHideSearch={handleHideSearch}
          handleOpenDetail={handleClick}
          query={query}
          movies={movies}
          handleCloseDetails={handleCloseDetails}
          openDetails={moreInfo}
          trailer={trailer}
          showTrailer={showTrailer}
          videoMovieTrailer={videoMovieTrailer}
          selectedTrailer={selectedTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          removeToFavorite={removeToFavorite}
        />
      ) : null}
    </>
  );
}

export default Nav;
