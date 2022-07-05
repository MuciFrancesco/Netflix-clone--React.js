import React from "react";
import apiConfig from "../API/reguests";

function Details({ movie, handleCloseDetails, prova }) {
  return (
    <div className="details">
      <div className="details-img">
        <img
          src={
            apiConfig.originalImage(movie.poster_path) ||
            apiConfig.originalImage(movie.backdrop_path)
          }
          alt={movie?.title || movie?.name || movie?.original_name}
        />
      </div>
      <div className="details-info">
        <div className="details-title">
          <h1> {movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="details-release">
          <h3>
            Release data: {movie?.release_date || "Movie release not available"}
          </h3>
          <h2>Story:</h2>
          <p className="details-overview">
            {movie?.overview || "Movie overview not available"}
          </p>
          <h3>Vote: {movie?.vote_average || "Movie vote not available"}</h3>
        </div>
        <div className="details-button">
          <button onClick={() => handleCloseDetails()}>Close info</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
