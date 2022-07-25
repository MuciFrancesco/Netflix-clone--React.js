import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
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
  popular,
  topRated,
  upcoming,
  actionMovie,
  tvPopular,
  tvComedy,
  tvTopRated,
  tvOnAir,
  provatwo,
}) {
  return (
    <div className="App">
      <Banner
        cart={cart}
        addToFavorite={addToFavorite}
        removeToFavorite={removeToFavorite}
        topRatedFilmsBanner
      />
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      ,
      <Row
        provatwo={provatwo}
        title="Trending Now"
        movie={topRated}
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
      ,
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
      <Row
        provatwo={provatwo}
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
        prova={prova}
        showTrailer={showTrailer}
        removeToFavorite={removeToFavorite}
      />
    </div>
  );
}

export default HomeScreen;
