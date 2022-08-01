import React, { useCallback, useState } from "react";
import apiConfig from "../API/reguests";
import tmdbApi, { category } from "../API/tmdbApi";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function MyList({ cart, removeToFavorite }) {
  const [showTrailer, SetShowTrailer] = useState([]);
  const [showTvTrailer, SetShowTvTrailer] = useState("");
  const [trailer, setTrailer] = useState(-1);

  const selectedTrailer = useCallback((i) => {
    setTrailer(i);
    window.scroll(0, 0);
  }, []);
  const handleCloseTrailer = useCallback(() => {
    setTrailer(-1);
    SetShowTrailer([]);
    SetShowTvTrailer("");
  }, []);

  const videoMovieTrailer = useCallback(async (movieId) => {
    const pr = await tmdbApi.getVideos(category.movie, movieId);
    const prova = pr?.results?.slice(0, 1).map((el) => el?.key);
    SetShowTrailer(prova);
  }, []);
  const videoTvTrailer = useCallback(async (tvId) => {
    const pr = await tmdbApi.getVideos(category.tv, tvId);
    const prova = pr?.results?.slice(0, 1).map((el) => el?.key);
    SetShowTvTrailer(prova);
  }, []);

  return (
    <motion.div
      className="my-list-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {cart.length > 0 ? (
        cart.map((el, i) => {
          return (
            <div className="my-list" key={i}>
              <div className="my-list-img">
                <img
                  src={apiConfig.originalImage(el.poster_path)}
                  alt={el.title}
                />
              </div>
              <div className="my-list-description">
                <h2>{el.title || el.name}</h2>
                <p>{el.overview}</p>
                <p className="detail">
                  Original language : {el.original_language.toUpperCase()}
                </p>
                <p className="detail">Relase Date: {el.release_date}</p>
                {el.adult === false ? (
                  <p className="detail">For the whole family</p>
                ) : el.adult === true ? (
                  <p>Adult only</p>
                ) : null}
                <p className="detail">Vote: {el.vote_average}</p>
                <button
                  onClick={() => {
                    selectedTrailer(i);
                    videoMovieTrailer(el.id);
                    videoTvTrailer(el.id);
                  }}
                >
                  Whatch Trailer
                </button>
                <button onClick={() => removeToFavorite(el)}>Delete</button>

                {trailer === i ? (
                  <>
                    <ReactPlayer
                      key={i}
                      playing={true}
                      controls={true}
                      width={"100%"}
                      height={"100%"}
                      style={{
                        position: "absolute",
                        top: "45px",
                        left: "0",
                      }}
                      url={`https://www.youtube.com/watch?v=${
                        showTrailer.length !== 0 ? showTrailer : showTvTrailer
                      }`}
                    />
                    <button
                      onClick={() => handleCloseTrailer()}
                      className="video-btn-list"
                    >
                      Close
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="alert-list">No Movie in My List</h1>
      )}
    </motion.div>
  );
}

export default MyList;
