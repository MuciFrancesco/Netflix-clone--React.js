import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";

function TvList({
  tvTopRated,
  tvOnAir,
  tvComedy,
  tvPopular,
  urlLinks,
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
  realityTv,
  tvDramma,
  provatwo,
}) {
  return (
    <div className="tv-list">
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
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
        prova={prova}
        provatwo={provatwo}
      />
    </div>
  );
}

export default TvList;
