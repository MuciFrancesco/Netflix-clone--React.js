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
  horrorMovie,
  upcoming,
  romanceMovie,
  actionMovie,
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
        title="Top Rated"
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
        title="Action Movie"
        movie={actionMovie}
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
        movie={horrorMovie}
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
        movie={romanceMovie}
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
