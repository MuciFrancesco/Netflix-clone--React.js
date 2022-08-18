import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { fetchHomeScreen } from "../API/APIcall/ApiHomeScreen";

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
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    fetchHomeScreen()
      .then((res) => {
        setPopular(res.populars.results);
        SetTopRated(res.topRateds.results);
        setUpcoming(res.upcomings.results);
        setActionMovie(res.actionMovies.data.results);
        setTvPopular(res.tvPopulars.results);
        setTvTopRated(res.tvTopRateds.results);
        setTvOnAir(res.tvOnAirs.results);
        setTvComedy(res.tvComedys.data.results);
      })
      .then(setStatus("resolved"));
  }, []);

  return (
    <>
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
        ,
        <Row
          status={status}
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
          status={status}
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
          status={status}
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
        ,
        <Row
          status={status}
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
        ,
        <Row
          status={status}
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
        ,
        <Row
          status={status}
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
        ,
        <Row
          status={status}
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
        ,
        <Row
          status={status}
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
        ,
      </motion.div>
    </>
  );
}

export default HomeScreen;
