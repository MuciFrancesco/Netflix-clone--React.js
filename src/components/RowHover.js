import React from "react";
import addToList from "../assets/add-to-list-row.svg";
import ellipsis from "../assets/ellipsis.svg";

function RowHover({ movie, isLargeRow, handleClick, i }) {
  return (
    <>
      <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className="row-bg" />
      <div className={isLargeRow ? "large-row-button" : "row-button"}>
        <button onClick={() => handleClick(i)}>
          <img src={ellipsis} alt="More Info" />
        </button>
        <button>
          <img src={addToList} alt="Add To List" />
        </button>
      </div>
    </>
  );
}

export default RowHover;
