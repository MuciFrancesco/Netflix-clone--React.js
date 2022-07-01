import React, { useCallback, useEffect, useState } from "react";
import axios from "../axios";
import addToList from "../assets/add-to-list-row.svg";
import playVideo from "../assets/play-row.svg";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
const youtube = "https://www.youtube.com/watch?v=";
function Row({ title, fechUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fechUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fechUrl]);
  console.log(movie);

  const [isHovering, SetIsOvering] = useState(-1);

  const handleMouseOver = useCallback((i) => SetIsOvering(i), []);
  const handleMouseOut = useCallback(() => SetIsOvering(-1), []);
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleClick = (movie) =>
    movieTrailer(`${base_url}/movie/550/videos? ${movie.id}`)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movie.map((movie, i) => (
          <a
            onMouseOver={() => handleMouseOver(i)}
            onMouseOut={handleMouseOut}
            key={movie.id}
          >
            {isHovering === i ? (
              <>
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="row-bg" />
                <div className={isLargeRow ? "large-row-button" : "row-button"}>
                  <button onClick={() => handleClick(movie.id)}>
                    <img src={playVideo} alt="Play Video" />
                  </button>
                  <button>
                    <img src={addToList} alt="Add To List" />
                  </button>
                </div>
              </>
            ) : null}
            <img
              className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </a>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
