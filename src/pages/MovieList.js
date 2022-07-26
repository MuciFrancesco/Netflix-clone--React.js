import React from "react";
import Row from "../components/Row";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
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
  actionMovie,
  popular,
  topRated,
  upcoming,
  horrorMovie,
  romanceMovie,
  videoMovieTrailer,
  videoTvTrailer,
}) {
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
