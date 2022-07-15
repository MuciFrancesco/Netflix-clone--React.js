import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import apiConfig from "../API/reguests";
import tmdbApi, { category, movieType } from "../API/tmdbApi";
import RowHover from "../components/RowHover";
import Details from "../components/Details";

function MyList({ isLargeRow, cart, addToFavorite }) {
  return (
    <div>
      {cart.map((el, i) => {
        return (
          <img
            key={i}
            src={apiConfig.originalImage(el.poster_path)}
            width={"500px"}
            height={"500px"}
            alt={el.title}
          />
        );
      })}
    </div>
  );
}

export default MyList;
