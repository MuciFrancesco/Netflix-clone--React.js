import React, { useCallback, useEffect, useState } from "react";
import apiConfig from "../API/reguests";
import tmdbApi, { movieType, requests } from "../API/tmdbApi";
import addToList from "../assets/add-to-list-row.svg";
import ellipsis from "../assets/ellipsis.svg";
import Details from "./Details";
import RowHover from "./RowHover";

function Row({ title, urlLink, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      let response = null;
      if (urlLink === "popular") {
        response = await tmdbApi.getMovieList(movieType.popular, {
          params: {},
        });
      } else if (urlLink === "topRated") {
        response = await tmdbApi.getMovieList(movieType.top_rated, {
          params: {},
        });
      } else if (urlLink === "upComing") {
        response = await tmdbApi.getMovieList(movieType.upcoming, {
          params: {},
        });
      } else {
        response = await requests;
      }
      setMovie(response.results);
    })();
  }, []);

  const [isHovering, SetIsOvering] = useState(-1);

  const handleMouseOver = useCallback((i) => SetIsOvering(i), []);
  const handleMouseOut = useCallback(() => SetIsOvering(-1), []);

  const [moreInfo, setMoreInfo] = useState(-1);

  const handleClick = useCallback((i) => setMoreInfo(i), []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movie.map((movie, i) => (
          <>
            <a
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={() => handleMouseOut()}
              key={movie.id}
            >
              {isHovering === i ? (
                <>
                  <RowHover
                    i={i}
                    movie={movie}
                    handleClick={handleClick}
                    isLargeRow={isLargeRow}
                  />
                </>
              ) : null}
              <img
                className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
                src={
                  isLargeRow
                    ? apiConfig.originalImage(movie.poster_path)
                    : apiConfig.originalImage(movie.backdrop_path)
                }
                alt={movie.name}
              />
            </a>
            {moreInfo === i ? <Details movie={movie} /> : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
