import React, { useCallback, useState } from "react";
import apiConfig from "../API/reguests";
import tmdbApi, { category } from "../API/tmdbApi";
import ReactPlayer from "react-player";

function MyList({ cart, removeToFavorite }) {
  const [showTrailer, SetShowTrailer] = useState("");
  const [trailer, setTrailer] = useState(-1);

  const selectedTrailer = useCallback((i) => {
    setTrailer(i);
    window.scroll(0, 0);
  }, []);
  const handleCloseTrailer = useCallback(() => {
    setTrailer(-1);
  }, []);
  const prova = async (movieId) => {
    const pr = await tmdbApi.getVideos(category.movie, movieId);
    const prova = pr.results.slice(0, 1).map((el) => el.key);
    SetShowTrailer(prova);
    console.log(showTrailer);
  };
  return (
    <div className="my-list-container">
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
                <h2>{el.title}</h2>
                <p>{el.overview}</p>
                <p className="detail">
                  Original language : {el.original_language.toUpperCase()}
                </p>
                <p className="detail">Relase Date: {el.release_date}</p>
                {el.adult === false ? (
                  <p className="detail">For the whole family</p>
                ) : (
                  <p>Adult only</p>
                )}
                <p className="detail">Vote: {el.vote_average}</p>
                <button
                  onClick={() => {
                    selectedTrailer(i);
                    prova(el.id);
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
                      url={`https://www.youtube.com/watch?v=${showTrailer}`}
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
    </div>
  );
}

export default MyList;
