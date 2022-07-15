import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import apiConfig from "../API/reguests";
import tmdbApi, { category, movieType } from "../API/tmdbApi";
import RowHover from "./RowHover";
import Details from "./Details";
function Row({ title, urlLink, isLargeRow, cart, addToFavorite }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (urlLink) {
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
          const request = await axios.get(urlLink);
          setMovie(request.data.results);
          return request;
        }
        setMovie(response.results);
      })();
    }
  }, [urlLink]);

  const [isHovering, SetIsOvering] = useState(-1);

  const handleMouseOver = useCallback((i) => SetIsOvering(i), []);
  const handleMouseOut = useCallback(() => SetIsOvering(-1), []);

  const [moreInfo, setMoreInfo] = useState(-1);

  const handleClick = useCallback((i) => {
    setMoreInfo(i);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseDetails = useCallback(() => {
    setMoreInfo(-1);
    document.body.style.overflow = "auto";
  }, []);

  const [trailer, setTrailer] = useState(-1);

  const selectedTrailer = useCallback((i) => setTrailer(i), []);

  const [showTrailer, SetShowTrailer] = useState("");

  const prova = async (movieId) => {
    const pr = await tmdbApi.getVideos(category.movie, movieId);
    const prova = pr.results.slice(0, 1).map((el) => el.key);
    SetShowTrailer(prova);
    console.log(showTrailer);
  };

  return (
    <div className="row">
      <div className="bg"></div>
      <h2>{title}</h2>

      <div className="row-posters">
        {movie.map((movie, i) => (
          <>
            <div className="row-poster-div" key={i}>
              <a
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={() => handleMouseOut()}
                key={movie.id}
              >
                {isHovering === i ? (
                  <>
                    <RowHover
                      prova={prova}
                      selectedTrailer={selectedTrailer}
                      i={i}
                      movie={movie}
                      handleClick={handleClick}
                      isLargeRow={isLargeRow}
                      moreInfo={moreInfo}
                      addToFavorite={addToFavorite}
                      cart={cart}
                    />
                  </>
                ) : null}
                <img
                  className={`row-poster ${
                    isLargeRow ? "row-posterLarge" : ""
                  }`}
                  src={
                    isLargeRow
                      ? apiConfig.originalImage(movie.poster_path)
                      : apiConfig.originalImage(movie.backdrop_path)
                  }
                  alt={movie.name}
                />
              </a>
            </div>
            <div className="row-details">
              {moreInfo === i ? (
                <Details
                  handleCloseDetails={handleCloseDetails}
                  movie={movie}
                  trailer={trailer}
                  i={i}
                  showTrailer={showTrailer}
                />
              ) : null}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
