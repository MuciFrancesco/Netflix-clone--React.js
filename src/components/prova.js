import React, { useEffect, useState } from "react";
import axios from "../axios";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fechUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const request = await axios.get(fechUrl);
      setMovie(request.data.results);
      return request;
    })();
  }, [fechUrl]);
  console.log(movie);

  const [isHovering, SetIsOvering] = useState(-1);

  const handleMouseOver = (i) => SetIsOvering(i);
  const handleMouseOut = () => SetIsOvering(-1);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movie.map((movie, i) => (
          <div
            onMouseOver={() => handleMouseOver(i)}
            onMouseOut={handleMouseOut}
            key={movie.id}
          >
            {isHovering === i ? (
              <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            ) : null}
            <img
              className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
