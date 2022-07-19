import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { requests } from "../API/tmdbApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//hero block

function HomeScreen({
  cart,
  addToFavorite,
  moreInfo,
  handleClick,
  handleCloseDetails,
  trailer,
  selectedTrailer,
  prova,
  showTrailer,
  removeToFavorite,
}) {
  return (
    <div className="App">
      <Banner
        cart={cart}
        addToFavorite={addToFavorite}
        removeToFavorite={removeToFavorite}
      />
      <Row
        title="Netflix Original"
        urlLink="popular"
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        title="Trending Now"
        urlLink="upComing"
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        title="Top Rated"
        urlLink="topRated"
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        title="Action Movie"
        urlLink={requests.fetchActionMovie}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        title="Horror Movie"
        urlLink={requests.fetchHorrorMovie}
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        title="Romance Movie"
        urlLink={requests.fetchRomanceMovie}
        cart={cart}
        addToFavorite={addToFavorite}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleCloseDetails={handleCloseDetails}
        trailer={trailer}
        selectedTrailer={selectedTrailer}
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
    </div>
  );
}

export default HomeScreen;
