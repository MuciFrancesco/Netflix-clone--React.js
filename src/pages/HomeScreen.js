import React, { useEffect, useMemo, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import tmdbApi, { movieType, tvType } from "../API/tmdbApi";
import axios from "axios";
import { urlLinks } from "../utility/urlLinks";

//hero block

function HomeScreen({
  cart,
  addToFavorite,
  moreInfo,
  handleClick,
  handleCloseDetails,
  trailer,
  selectedTrailer,
  showTrailer,
  removeToFavorite,
  videoMovieTrailer,
  videoTvTrailer,
}) {
  const [topRated, SetTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [tvPopular, setTvPopular] = useState([]);
  const [tvOnAir, setTvOnAir] = useState([]);
  const [tvTopRated, setTvTopRated] = useState([]);
  const [tvComedy, setTvComedy] = useState([]);

  useEffect(() => {
    Promise.all([
      tmdbApi
        .getMovieList(movieType.popular, {
          params: {},
        })
        .then((el) => setPopular(el.results)),
      tmdbApi
        .getMovieList(movieType.top_rated, {
          params: {},
        })
        .then((el) => SetTopRated(el.results)),

      tmdbApi
        .getMovieList(movieType.upcoming, {
          params: {},
        })
        .then((el) => setUpcoming(el.results)),
      axios
        .get(urlLinks.actionMovie)
        .then((el) => setActionMovie(el.data.results)),
      tmdbApi
        .getTvList(tvType.popular, {
          params: {},
        })
        .then((el) => setTvPopular(el.results)),
      tmdbApi
        .getTvList(tvType.top_rated, {
          params: {},
        })
        .then((el) => setTvTopRated(el.results)),
      tmdbApi
        .getTvList(tvType.on_the_air, {
          params: {},
        })
        .then((el) => setTvOnAir(el.results)),
      axios.get(urlLinks.tvComedy).then((el) => setTvComedy(el.data.results)),
    ]);
  }, []);

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner
        cart={cart}
        addToFavorite={addToFavorite}
        removeToFavorite={removeToFavorite}
        topRatedFilmsBanner
      />
      <Row
        title="Netflix Original"
        movie={popular}
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      ,
      <Row
        title="Trending Now"
        movie={topRated}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      ,
      <Row
        title="Top Rated Movie"
        movie={upcoming}
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      <Row
        isSeries
        title="Top rated Series"
        movie={tvTopRated}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      <Row
        title="Action Movie"
        movie={actionMovie}
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      <Row
        isSeries
        title="Popular Series"
        movie={tvPopular}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      <Row
        isSeries
        title="Series on air"
        movie={tvOnAir}
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
      <Row
        isSeries
        title="Comedy Tv"
        movie={tvComedy}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
        videoMovieTrailer={videoMovieTrailer}
        videoTvTrailer={videoTvTrailer}
      />
    </motion.div>
  );
}

export default HomeScreen;
