import React, { useEffect, useState } from "react";
import Row from "../components/Row";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import tmdbApi, { movieType } from "../API/tmdbApi";
import axios from "axios";
import { urlLinks } from "../utility/urlLinks";
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
  useEffect(() => {
    Promise.all([
      tmdbApi
        .getMovieList(movieType.popular, {
          params: {},
        })
        .then((el) => setPopular(el.results))
        .catch((err) => console.log(err)),
      tmdbApi
        .getMovieList(movieType.top_rated, {
          params: {},
        })
        .then((el) => SetTopRated(el.results))
        .catch((err) => console.log(err)),

      tmdbApi
        .getMovieList(movieType.upcoming, {
          params: {},
        })
        .then((el) => setUpcoming(el.results))
        .catch((err) => console.log(err)),
      axios
        .get(urlLinks.horrorMovie)
        .then((el) => setHorrorMovie(el.data.results))
        .catch((err) => console.log(err)),
      axios
        .get(urlLinks.actionMovie)
        .then((el) => setActionMovie(el.data.results))
        .catch((err) => console.log(err)),
      axios
        .get(urlLinks.romanceMovie)
        .then((el) => SetRomanceMovie(el.data.results))
        .catch((err) => console.log(err)),
    ]);
  }, []);
  return (
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
  );
}

export default MovieList;
