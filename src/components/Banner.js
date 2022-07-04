import React, { useEffect, useState } from "react";
import apiConfig from "../API/reguests";
import tmdbApi, { movieType } from "../API/tmdbApi";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
        setMovie(
          response.results[
            Math.floor(Math.random() * response.results.length - 1)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${apiConfig.originalImage(
          movie?.backdrop_path
        )})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="bunner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fade-button" />
      <div className="banner-bg" />
    </header>
  );
}

export default Banner;
