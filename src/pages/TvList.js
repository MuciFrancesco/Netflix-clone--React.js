import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { motion } from "framer-motion";
import axios from "axios";
import { urlLinks } from "../utility/urlLinks";
import tmdbApi, { tvType } from "../API/tmdbApi";

function TvList({
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
  const [tvPopular, setTvPopular] = useState([]);
  const [tvOnAir, setTvOnAir] = useState([]);
  const [tvTopRated, setTvTopRated] = useState([]);
  const [tvComedy, setTvComedy] = useState([]);
  const [realityTv, setRealityTv] = useState([]);
  const [tvDramma, setTvDramma] = useState([]);
  useEffect(() => {
    Promise.all([
      tmdbApi
        .getTvList(tvType.popular, {
          params: {},
        })
        .then((el) => setTvPopular(el.results))
        .catch((err) => console.log(err)),
      tmdbApi
        .getTvList(tvType.top_rated, {
          params: {},
        })
        .then((el) => setTvTopRated(el.results))
        .catch((err) => console.log(err)),
      tmdbApi
        .getTvList(tvType.on_the_air, {
          params: {},
        })
        .then((el) => setTvOnAir(el.results))
        .catch((err) => console.log(err)),
      axios
        .get(urlLinks.tvComedy)
        .then((el) => setTvComedy(el.data.results))
        .catch((err) => console.log(err)),
      axios
        .get(urlLinks.realityTv)
        .then((el) => setRealityTv(el.data.results))
        .catch((err) => console.log(err)),
      axios
        .get(urlLinks.tvDramma)
        .then((el) => setTvDramma(el.data.results))
        .catch((err) => console.log(err)),
    ]);
  }, []);
  return (
    <motion.div
      className="tv-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner
        upcomingTvBanner
        cart={cart}
        addToFavorite={addToFavorite}
        removeToFavorite={removeToFavorite}
      />
      <Row
        isSeries
        isLargeRow
        movie={tvTopRated}
        title="Top rated Series"
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
        isSeries
        isLargeRow
        movie={tvPopular}
        title="Popular Series"
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
        isSeries
        isLargeRow
        movie={tvOnAir}
        title="On air Series"
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
        isSeries
        isLargeRow
        movie={tvComedy}
        title="Comedy Series"
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
        isSeries
        isLargeRow
        movie={realityTv}
        title="Reality Series"
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
        isSeries
        isLargeRow
        movie={tvDramma}
        title="Dramma Series"
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

export default TvList;
