import React from "react";
import addToList from "../assets/add-to-list-row.svg";
import ellipsis from "../assets/ellipsis.svg";
import check from "../assets/check.svg";

function RowHover({
  movie,
  isLargeRow,
  handleClick,
  i,
  selectedTrailer,
  prova,
  addToFavorite,
  cart,
}) {
  return (
    <>
      <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className="row-bg" />
      <div className={isLargeRow ? "large-row-button" : "row-button"}>
        <button
          className="primary-btn"
          onClick={() => {
            handleClick(i);
            selectedTrailer(i);
            prova(movie.id);
          }}
        >
          <img src={ellipsis} alt="More Info" />
        </button>
        <button
          className={
            cart.find((movies) => movies.id === movie.id)
              ? null
              : "secondary-btn"
          }
          onClick={() => addToFavorite(movie)}
        >
          {cart.find((movies) => movies.id === movie.id) ? (
            <img src={check} alt="Already on the list" />
          ) : (
            <img src={addToList} alt="Add To List" />
          )}
        </button>
      </div>
    </>
  );
}

export default RowHover;
