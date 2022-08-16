import React, { useEffect, useState } from "react";
import Row from "../components/Row";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import { fetchFilmList } from "../API/APIcall/ApiFilmList";
function MovieList({
  removeToFavorite,
  showTrailer,
  cart,
  addToFavorite,
  moreInfo,
  handleClick,
  handleCloseDetails,
  trailer,
  selectedTrailer,
  videoMovieTrailer,
  videoTvTrailer,
}) {
  const [topRated, SetTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [horrorMovie, setHorrorMovie] = useState([]);
  const [romanceMovie, SetRomanceMovie] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    fetchFilmList().then((res) => {
      setPopular(res.populars.results);
      SetTopRated(res.topRateds.results);
      setUpcoming(res.upcomings.results);
      setHorrorMovie(res.horrorMovies.data.results);
      setActionMovie(res.actionMovies.data.results);
      SetRomanceMovie(res.romanceMovies.data.results);
    });

    setStatus("resolved");
  }, []);
  return (
    <>
      <motion.div
        className="movie-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Banner
          upcomingFilmsBanner
          cart={cart}
          addToFavorite={addToFavorite}
          removeToFavorite={removeToFavorite}
        />
        <Row
          status={status}
          isLargeRow
          movie={popular}
          title="Popular Films"
          removeToFavorite={removeToFavorite}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          moreInfo={moreInfo}
          handleClick={handleClick}
          handleCloseDetails={handleCloseDetails}
          trailer={trailer}
          selectedTrailer={selectedTrailer}
          videoMovieTrailer={videoMovieTrailer}
          videoTvTrailer={videoTvTrailer}
        />
        <Row
          status={status}
          isLargeRow
          movie={topRated}
          title="Top rated Films"
          removeToFavorite={removeToFavorite}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          moreInfo={moreInfo}
          handleClick={handleClick}
          handleCloseDetails={handleCloseDetails}
          trailer={trailer}
          selectedTrailer={selectedTrailer}
          videoMovieTrailer={videoMovieTrailer}
          videoTvTrailer={videoTvTrailer}
        />
        <Row
          status={status}
          isLargeRow
          movie={upcoming}
          title="Upcoming Films"
          removeToFavorite={removeToFavorite}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          moreInfo={moreInfo}
          handleClick={handleClick}
          handleCloseDetails={handleCloseDetails}
          trailer={trailer}
          selectedTrailer={selectedTrailer}
          videoMovieTrailer={videoMovieTrailer}
          videoTvTrailer={videoTvTrailer}
        />
        <Row
          status={status}
          isLargeRow
          movie={actionMovie}
          title="Action Films"
          removeToFavorite={removeToFavorite}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          moreInfo={moreInfo}
          handleClick={handleClick}
          handleCloseDetails={handleCloseDetails}
          trailer={trailer}
          selectedTrailer={selectedTrailer}
          videoMovieTrailer={videoMovieTrailer}
          videoTvTrailer={videoTvTrailer}
        />
        <Row
          status={status}
          isLargeRow
          movie={horrorMovie}
          title="Horror Films"
          removeToFavorite={removeToFavorite}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          moreInfo={moreInfo}
          handleClick={handleClick}
          handleCloseDetails={handleCloseDetails}
          trailer={trailer}
          selectedTrailer={selectedTrailer}
          videoMovieTrailer={videoMovieTrailer}
          videoTvTrailer={videoTvTrailer}
        />
        <Row
          status={status}
          isLargeRow
          movie={romanceMovie}
          title="Romance Films"
          removeToFavorite={removeToFavorite}
          showTrailer={showTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          moreInfo={moreInfo}
          handleClick={handleClick}
          handleCloseDetails={handleCloseDetails}
          trailer={trailer}
          selectedTrailer={selectedTrailer}
          videoMovieTrailer={videoMovieTrailer}
          videoTvTrailer={videoTvTrailer}
        />
      </motion.div>
    </>
  );
}

export default MovieList;
