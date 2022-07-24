import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import tmdbApi, { category, movieType, requests, tvType } from "../API/tmdbApi";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeScreen from "../pages/HomeScreen";
import MovieList from "../pages/MovieList";
import MyList from "../pages/MyList";
import TvList from "../pages/TvList";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  const [cart, setCart] = useState([]);
  const [topRated, SetTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [HorrorMovie, setHorrorMovie] = useState([]);
  const [romanceMovie, SetRomanceMovie] = useState([]);
  const [tvPopular, setTvPopular] = useState([]);
  const [tvOnAir, setTvOnAir] = useState([]);
  const [tvTopRated, setTvTopRated] = useState([]);
  const [tvComedy, setTvComedy] = useState([]);
  const [realityTv, setRealityTv] = useState([]);
  const [tvDramma, setTvDramma] = useState([]);

  const addToFavorite = useCallback(
    (item) => {
      const control = cart.find((movie) => movie.id === item.id);
      if (control === undefined) {
        setCart(() => [...cart, { ...item }]);
      } else {
        setCart(cart.filter((movie) => cart.id !== movie.id));
      }
    },
    [cart]
  );
  const removeToFavorite = useCallback(
    (movieToRemove) => {
      setCart(cart.filter((movie) => movie.id !== movieToRemove.id));
    },
    [cart]
  );
  console.log(cart);

  const [moreInfo, setMoreInfo] = useState(-1);

  const handleClick = useCallback((i) => {
    setMoreInfo(i);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseDetails = useCallback(() => {
    setMoreInfo(-1);
    document.body.style.overflow = "auto";
  }, []);

  const [trailer, setTrailer] = useState(-1);

  const selectedTrailer = useCallback((i) => setTrailer(i), []);

  const [showTrailer, SetShowTrailer] = useState("");

  const prova = useCallback(
    async (movieId) => {
      const pr = await tmdbApi.getVideos(category.movie, movieId);
      const prova = pr.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(prova);
      console.log(showTrailer);
    },
    [showTrailer]
  );

  const provatwo = useCallback(
    async (tvId) => {
      const pr = await tmdbApi.getVideos(category.tv, tvId);
      const prova = pr.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(prova);
      console.log(showTrailer);
    },
    [showTrailer]
  );

  useEffect(() => {
    (async function fetchData() {
      const popular = await tmdbApi.getMovieList(movieType.popular, {
        params: {},
      });
      setPopular(popular?.results);

      const topRated = await tmdbApi.getMovieList(movieType.top_rated, {
        params: {},
      });
      SetTopRated(topRated?.results);

      const horrorMovie = await tmdbApi.getMovieList(movieType.upcoming, {
        params: {},
      });
      setUpcoming(horrorMovie?.results);

      const horrorMovies = await axios.get(urlLinks.horrorMovie);
      setHorrorMovie(horrorMovies?.data?.results);

      const actionMovie = await axios.get(urlLinks.actionMovie);
      setActionMovie(actionMovie?.data?.results);

      const romanceMovie = await axios.get(urlLinks.romanceMovie);
      SetRomanceMovie(romanceMovie?.data?.results);

      const tvPopular = await tmdbApi.getTvList(tvType.popular, {
        params: {},
      });
      setTvPopular(tvPopular?.results);

      const tvTopRated = await tmdbApi.getTvList(tvType.top_rated, {
        params: {},
      });
      setTvTopRated(tvTopRated?.results);

      const tvOnAir = await tmdbApi.getTvList(tvType.on_the_air, {
        params: {},
      });
      setTvOnAir(tvOnAir?.results);

      const tvComedy = await axios.get(urlLinks.tvComedy);
      setTvComedy(tvComedy?.data?.results);

      const tvReality = await axios.get(urlLinks.realityTv);
      setRealityTv(tvReality?.data?.results);

      const tvDramma = await axios.get(urlLinks.tvDramma);
      setTvDramma(tvDramma?.data?.results);
    })();
  }, []);

  const urlLinks = {
    popular: requests.fetchTrending,
    upComing: "upComing",
    topRated: "topRated",
    actionMovie: requests.fetchActionMovie,
    horrorMovie: requests.fetchHorrorMovie,
    romanceMovie: requests.fetchRomanceMovie,
    tvComedy: requests.fetchComedyTv,
    realityTv: requests.fetchRealityTv,
    tvDramma: requests.fetchDrammaTv,
  };

  return (
    <div className="root">
      <BrowserRouter>
        <Nav
          moreInfo={moreInfo}
          handleCloseDetails={handleCloseDetails}
          handleClick={handleClick}
          trailer={trailer}
          showTrailer={showTrailer}
          prova={prova}
          selectedTrailer={selectedTrailer}
          cart={cart}
          addToFavorite={addToFavorite}
          removeToFavorite={removeToFavorite}
        />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <HomeScreen
                  provatwo={provatwo}
                  tvTopRated={tvTopRated}
                  tvOnAir={tvOnAir}
                  tvComedy={tvComedy}
                  tvPopular={tvPopular}
                  actionMovie={actionMovie}
                  popular={popular}
                  topRated={topRated}
                  upcoming={upcoming}
                  urlLinks={urlLinks}
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
                />
              }
            />

            <Route
              path="/series"
              element={
                <TvList
                  realityTv={realityTv}
                  tvDramma={tvDramma}
                  tvTopRated={tvTopRated}
                  tvOnAir={tvOnAir}
                  tvComedy={tvComedy}
                  tvPopular={tvPopular}
                  urlLinks={urlLinks}
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
              }
            ></Route>
            <Route
              path="/film"
              element={
                <MovieList
                  actionMovie={actionMovie}
                  popular={popular}
                  topRated={topRated}
                  upcoming={upcoming}
                  horrorMovie={HorrorMovie}
                  romanceMovie={romanceMovie}
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
              }
            />
            <Route
              path="/myList"
              element={
                <MyList cart={cart} removeToFavorite={removeToFavorite} />
              }
            ></Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
