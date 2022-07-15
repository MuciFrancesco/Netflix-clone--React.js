import React, { useCallback, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { requests } from "../API/tmdbApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeScreen({ cart, addToFavorite }) {
  return (
    <div className="App">
      <Banner cart={cart} addToFavorite={addToFavorite} />
      <Row
        title="Netflix Original"
        urlLink="popular"
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
      />
      <Row
        title="Trending Now"
        urlLink="upComing"
        cart={cart}
        addToFavorite={addToFavorite}
      />
      <Row
        title="Top Rated"
        urlLink="topRated"
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
      />
      <Row
        title="Action Movie"
        urlLink={requests.fetchActionMovie}
        cart={cart}
        addToFavorite={addToFavorite}
      />
      <Row
        title="Horror Movie"
        urlLink={requests.fetchHorrorMovie}
        isLargeRow
        cart={cart}
        addToFavorite={addToFavorite}
      />
      <Row
        title="Romance Movie"
        urlLink={requests.fetchRomanceMovie}
        cart={cart}
        addToFavorite={addToFavorite}
      />
    </div>
  );
}

export default HomeScreen;
