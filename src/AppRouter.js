/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import tmdbApi, { category } from "./API/tmdbApi";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomeScreen from "./pages/HomeScreen";
import MovieList from "./pages/MovieList";
import MyList from "./pages/MyList";
import TvList from "./pages/TvList";
import HomePage from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import ProfilesManager from "./pages/ProfilesManager";
import Loading from "./components/Loading";

function AppRouter() {
  const [cart, setCart] = useState([]);
  const [moreInfo, setMoreInfo] = useState(-1);
  const [trailer, setTrailer] = useState(-1);
  const [showTrailer, SetShowTrailer] = useState("");
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
    } else {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
      }, 2500);
      clearTimeout();
    }
  }, [location.pathname]);

  useEffect(() => {}, [location]);

  const handleClickLogin = () => {
    setLogin(true);
  };

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

  const handleClick = useCallback((i) => {
    setMoreInfo(i);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseDetails = useCallback(() => {
    setMoreInfo(-1);
    SetShowTrailer("");
    document.body.style.overflow = "auto";
  }, []);

  const selectedTrailer = useCallback((i) => setTrailer(i), []);

  const videoMovieTrailer = useCallback(async (movieId) => {
    const pr = await tmdbApi.getVideos(category.movie, movieId);
    const prova = pr.results.slice(0, 1).map((el) => el.key);
    SetShowTrailer(prova);
  }, []);

  const videoTvTrailer = useCallback(async (tvId) => {
    const pr = await tmdbApi.getVideos(category.tv, tvId);
    const prova = pr.results.slice(0, 1).map((el) => el.key);
    SetShowTrailer(prova);
  }, []);

  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/profiles" ? null : loading === true ? (
        <Loading />
      ) : (
        <Nav
          setMoreInfo={setMoreInfo}
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
      )}
      <AnimatePresence>
        <ScrollToTop>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<HomePage handleClickLogin={handleClickLogin} />}
            ></Route>
            <Route path="/profiles" element={<ProfilesManager />} />
            <Route
              path="/homePage"
              element={
                <HomeScreen
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
      {location.pathname === "/" || location.pathname === "/profiles" ? null : (
        <Footer />
      )}
    </>
  );
}

export default AppRouter;
