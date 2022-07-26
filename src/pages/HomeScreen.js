import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

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
  popular,
  topRated,
  upcoming,
  actionMovie,
  tvPopular,
  tvComedy,
  tvTopRated,
  tvOnAir,
  videoMovieTrailer,
  videoTvTrailer,
}) {
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
