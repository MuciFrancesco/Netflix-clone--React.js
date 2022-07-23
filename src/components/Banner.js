import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import apiConfig from "../API/reguests";
import tmdbApi, { category, movieType } from "../API/tmdbApi";

function Banner({ cart, addToFavorite, removeToFavorite }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.top_rated, {
          params,
        });
        const singleMovie =
          response.results[
            Math.floor(Math.random() * response.results.length - 1)
          ];
        setMovie(singleMovie);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const [showTrailer, SetShowTrailer] = useState("");
  const [trailer, setTrailer] = useState(false);

  const handlePlayTrailer = async () => {
    const request = await tmdbApi.getVideos(category.movie, movie.id);
    const response = request.results.slice(0, 1).map((el) => el.key);
    SetShowTrailer(response);
    setTrailer(true);
    console.log(showTrailer);
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
            url={`https://www.youtube.com/watch?v=${showTrailer}`}
          />
          <div className="banner-close-btn">
            <button
              onClick={() => setTrailer(false)}
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
