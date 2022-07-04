import React from "react";

function Details({ movie }) {
  return <div>{movie?.title || movie?.name || movie?.original_name}</div>;
}

export default Details;
