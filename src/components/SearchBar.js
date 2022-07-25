/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Details from "./Details";

function SearchBar({
  openDetails,
  movies,
  query,
  handleOpenDetail,
  handleCloseDetails,
  trailer,
  showTrailer,
  prova,
  selectedTrailer,
  cart,
  addToFavorite,
  removeToFavorite,
}) {
  return (
    <div className="search-bar-container">
      {query !== "" && movies ? (
        movies?.map((movies, i) => (
          <div className="search-bar-movies" key={i}>
            <div className="movies-content">
              <a
                onClick={() => {
                  handleOpenDetail(i);
                  selectedTrailer(i);
                  prova(movies.id);
                }}
              >
                {movies.title}
              </a>
            </div>
            {openDetails === i ? (
              <Details
                i={i}
                handleCloseDetails={handleCloseDetails}
                movie={movies}
                trailer={trailer}
                showTrailer={showTrailer}
                cart={cart}
                addToFavorite={addToFavorite}
                removeToFavorite={removeToFavorite}
              />
            ) : null}
          </div>
        ))
      ) : !movies ? (
        <h1>No movie Found</h1>
      ) : (
        <h1>Search a Movie</h1>
      )}
    </div>
  );
}

export default SearchBar;
