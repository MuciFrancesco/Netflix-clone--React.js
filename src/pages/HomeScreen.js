import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../reguests";

function HomeScreen() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="Netflix Original"
        fechUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fechUrl={requests.fetchTrending} />
      <Row title="Top Rated" fechUrl={requests.fetchTrending} isLargeRow />
      <Row title="Action Movie" fechUrl={requests.fetchActionMovie} />
      <Row
        title="Comedy Movie"
        fechUrl={requests.fetchComedyMovie}
        isLargeRow
      />
      <Row title="Horror Movie" fechUrl={requests.fetchHorrorMovie} />
      <Row
        title="Romance Movie"
        fechUrl={requests.fetchRomanceMovie}
        isLargeRow
      />
      <Row title="Documentaries" fechUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
