import React from "react";
import Row from "../components/Row";
import Banner from "../components/Banner";

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
  prova,
  actionMovie,
  popular,
  topRated,
  upcoming,
  horrorMovie,
  romanceMovie,
  provatwo,
}) {
  return (
    <div className="movie-list">
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
      />
    </div>
  );
}

export default MovieList;
