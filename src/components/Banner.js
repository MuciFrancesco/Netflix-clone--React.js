/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import apiConfig from "../API/reguests";
import tmdbApi, { category, movieType, tvType } from "../API/tmdbApi";

function Banner({
  cart,
  addToFavorite,
  removeToFavorite,
  upcomingFilmsBanner,
  upcomingTvBanner,
  topRatedFilmsBanner,
}) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const params = { page: 1 };
      let response;
      if (topRatedFilmsBanner) {
        response = await tmdbApi.getMovieList(movieType.top_rated, {
          params,
        });
      }
      if (upcomingTvBanner) {
        response = await tmdbApi.getTvList(tvType.popular, {
          params,
        });
      }
      if (upcomingFilmsBanner) {
        response = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
      }
      do {
        const singleMovie =
          response.results[Math.floor(Math.random() * response.results.length)];
        setMovie(singleMovie);
      } while (movie === {});
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const [showTrailer, SetShowTrailer] = useState("");
  const [trailer, setTrailer] = useState(false);

  const handlePlayTrailer = async () => {
    let request;
    let response;
    if (upcomingFilmsBanner) {
      request = await tmdbApi.getVideos(category.movie, movie.id);
      response = request.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(response);
      setTrailer(true);
    } else if (topRatedFilmsBanner) {
      request = await tmdbApi.getVideos(category.movie, movie.id);
      response = request.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(response);
      setTrailer(true);
    } else if (upcomingTvBanner) {
      request = await tmdbApi.getVideos(category.tv, movie.id);
      response = request.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(response);
      setTrailer(true);
    } else {
      SetShowTrailer("");
      setTrailer(false);
    }
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
      {!trailer ? (
        <>
          {" "}
          <div className="banner-contents">
            <h1 className="banner-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons">
              <button className="banner-button" onClick={handlePlayTrailer}>
                Play
              </button>
              <button
                className="banner-button"
                onClick={
                  cart.find((movies) => movies.id === movie.id)
                    ? () => removeToFavorite(movie)
                    : () => addToFavorite(movie)
                }
              >
                {cart.find((movies) => movies.id === movie.id)
                  ? "Already on the list"
                  : "Add into My List"}
              </button>
            </div>
            <h1 className="bunner-description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
          <div className="banner-fade-button" />
          <div className="banner-bg" />
        </>
      ) : (
        <>
          <ReactPlayer
            width={"100vw"}
            height={"100%"}
            playing={true}
            url={`https://www.youtube.com/watch?v=${showTrailer}&SameSite=Strict&Secure`}
          />
          <div className="banner-close-btn">
            <button
              onClick={() => {
                setTrailer(false);
                SetShowTrailer("");
              }}
              className="banner-close-trailer-btn"
            >
              Close
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Banner;
