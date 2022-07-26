import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import tmdbApi, { category, movieType, requests, tvType } from "./API/tmdbApi";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomeScreen from "./pages/HomeScreen";
import MovieList from "./pages/MovieList";
import MyList from "./pages/MyList";
import TvList from "./pages/TvList";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function AppRouter() {
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

  const videoMovieTrailer = useCallback(
    async (movieId) => {
      const pr = await tmdbApi.getVideos(category.movie, movieId);
      const prova = pr.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(prova);
      console.log(showTrailer);
    },
    [showTrailer]
  );

  const videoTvTrailer = useCallback(
    async (tvId) => {
      const pr = await tmdbApi.getVideos(category.tv, tvId);
      const prova = pr.results.slice(0, 1).map((el) => el.key);
      SetShowTrailer(prova);
      console.log(showTrailer);
    },
    [showTrailer]
  );

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

  useEffect(() => {
    Promise.all([
      tmdbApi
        .getMovieList(movieType.popular, {
          params: {},
        })
        .then((el) => setPopular(el.results)),
      tmdbApi
        .getMovieList(movieType.top_rated, {
          params: {},
        })
        .then((el) => SetTopRated(el.results)),

      tmdbApi
        .getMovieList(movieType.upcoming, {
          params: {},
        })
        .then((el) => setUpcoming(el.results)),
      axios
        .get(urlLinks.horrorMovie)
        .then((el) => setHorrorMovie(el.data.results)),
      axios
        .get(urlLinks.actionMovie)
        .then((el) => setActionMovie(el.data.results)),
      axios
        .get(urlLinks.romanceMovie)
        .then((el) => SetRomanceMovie(el.data.results)),
      tmdbApi
        .getTvList(tvType.popular, {
          params: {},
        })
        .then((el) => setTvPopular(el.results)),
      tmdbApi
        .getTvList(tvType.top_rated, {
          params: {},
        })
        .then((el) => setTvTopRated(el.results)),
      tmdbApi
        .getTvList(tvType.on_the_air, {
          params: {},
        })
        .then((el) => setTvOnAir(el.results)),
      axios.get(urlLinks.tvComedy).then((el) => setTvComedy(el.data.results)),
      axios.get(urlLinks.realityTv).then((el) => setRealityTv(el.data.results)),
      axios.get(urlLinks.tvDramma).then((el) => setTvDramma(el.data.results)),
    ]);
  }, [
    urlLinks.actionMovie,
    urlLinks.horrorMovie,
    urlLinks.realityTv,
    urlLinks.romanceMovie,
    urlLinks.tvComedy,
    urlLinks.tvDramma,
  ]);

  const location = useLocation();
  return (
    <>
      <Nav
        moreInfo={moreInfo}
        handleCloseDetails={handleCloseDetails}
        handleClick={handleClick}
        trailer={trailer}
        showTrailer={showTrailer}
        videoMovieTrailer={videoMovieTrailer}
        selectedTrailer={selectedTrailer}
        cart={cart}
        addToFavorite={addToFavorite}
        removeToFavorite={removeToFavorite}
      />
      <AnimatePresence>
        <ScrollToTop>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <HomeScreen
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
                  videoMovieTrailer={videoMovieTrailer}
                  videoTvTrailer={videoTvTrailer}
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
                  videoMovieTrailer={videoMovieTrailer}
                  videoTvTrailer={videoTvTrailer}
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
                  videoMovieTrailer={videoMovieTrailer}
                  videoTvTrailer={videoTvTrailer}
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
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default AppRouter;
