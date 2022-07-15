import React from "react";
import apiConfig from "../API/reguests";

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
