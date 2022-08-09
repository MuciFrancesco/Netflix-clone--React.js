/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";
import Details from "./Details";

function SearchBar({
  movies,
  query,
  trailer,
  showTrailer,
  selectedTrailer,
  cart,
  addToFavorite,
  removeToFavorite,
  videoMovieTrailer,
}) {
  const [isHovering, SetIsOvering] = useState(-1);
  const [openDetails, setOpenDetails] = useState(false);
  const [moreInfo, setMoreInfo] = useState(-1);

  const handleMouseOver = useCallback((i) => SetIsOvering(i), []);

  const handleMouseOut = useCallback(() => SetIsOvering(-1), []);

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleClick = useCallback((i, movie) => {
    setMoreInfo(i);
    setOpenDetails(movie);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div
        className="search-bar-container"
        style={openDetails !== false ? { display: "none" } : null}
      >
        {query !== "" && movies ? (
          movies?.map((movies, i) => (
            <div className="search-bar-movies" key={i}>
              {openDetails === false ? (
                <div className="movies-content">
                  <a
                    onMouseOver={() => handleMouseOver(i)}
                    onMouseOut={() => handleMouseOut()}
                    onClick={() => {
                      handleClick(i, movies);
                      selectedTrailer(i);
                      videoMovieTrailer(movies.id);
                    }}
                  >
                    {movies.title}
                  </a>
                </div>
              ) : null}
            </div>
          ))
        ) : !movies ? (
          <h1>No movie Found</h1>
        ) : (
          <h1>Search a Movie</h1>
        )}
      </div>
      {openDetails ? (
        <Details
          i={moreInfo}
          handleCloseDetails={handleCloseDetails}
          movie={openDetails}
          trailer={trailer}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          removeToFavorite={removeToFavorite}
        />
      ) : null}
    </>
  );
}

export default SearchBar;
