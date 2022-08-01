import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import tmdbApi, { category } from "./API/tmdbApi";
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
  const [moreInfo, setMoreInfo] = useState(-1);
  const [trailer, setTrailer] = useState(-1);
  const [showTrailer, SetShowTrailer] = useState("");

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

  const handleClick = useCallback((i) => {
    setMoreInfo(i);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseDetails = useCallback(() => {
    setMoreInfo(-1);
    document.body.style.overflow = "auto";
  }, []);

  const selectedTrailer = useCallback((i) => setTrailer(i), []);

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
      <Footer />
    </>
  );
}

export default AppRouter;
