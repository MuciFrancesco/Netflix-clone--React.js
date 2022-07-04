import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import tmdbApi, { requests } from "../API/tmdbApi";

function HomeScreen() {
  return (
    <div className="App">
      <Banner />
      <Row title="Netflix Original" urlLink="popular" isLargeRow />
      <Row title="Trending Now" urlLink="upComing" />
      <Row title="Top Rated" urlLink="topRated" isLargeRow />
      <Row title="Action Movie" urlLink={requests.fetchActionMovie} />
      <Row
        title="Horror Movie"
        urlLink={requests.fetchHorrorMovie}
        isLargeRow
      />
      <Row title="Romance Movie" urlLink={requests.fetchRomanceMovie} />
    </div>
  );
}

export default HomeScreen;
