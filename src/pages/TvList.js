import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { motion } from "framer-motion";
import { fetchTvList } from "../API/APIcall/ApiTvList";

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
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    fetchTvList().then((res) => {
      console.log(res);
      setTvComedy(res.tvComedys.data.results);
      setTvOnAir(res.tvOnAirs.results);
      setTvDramma(res.tvDrammas.data.results);
      setTvPopular(res.tvPopulars.results);
      setTvTopRated(res.tvTopRateds.results);
      setRealityTv(res.realityTvs.data.results);
    });
    setStatus("resolved");
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
        status={status}
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
        status={status}
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
        status={status}
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
        status={status}
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
        status={status}
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
        status={status}
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
