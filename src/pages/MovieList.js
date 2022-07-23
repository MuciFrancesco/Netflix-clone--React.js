import React, { useEffect, useState } from "react";
import tmdbApi, { movieType } from "../API/tmdbApi";
import Row from "../components/Row";

function MovieList({
  removeToFavorite,
  showTrailer,
  cart,
  addToFavorite,
  moreInfo,
  handleClick,
  handleCloseDetails,
  trailer,
  selectedTrailer,
  prova,
  movie,
}) {
  return (
    <div className="movie-list">
      <Row
        movie={movie}
        title="Films"
        removeToFavorite={removeToFavorite}
        showTrailer={showTrailer}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
      />
    </div>
  );
}

export default MovieList;
