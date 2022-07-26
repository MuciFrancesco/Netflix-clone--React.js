import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { motion } from "framer-motion";

function TvList({
  tvTopRated,
  tvOnAir,
  tvComedy,
  tvPopular,
  removeToFavorite,
  showTrailer,
  cart,
  addToFavorite,
  moreInfo,
  handleClick,
  handleCloseDetails,
  trailer,
  selectedTrailer,
  realityTv,
  tvDramma,
  videoMovieTrailer,
  videoTvTrailer,
}) {
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
