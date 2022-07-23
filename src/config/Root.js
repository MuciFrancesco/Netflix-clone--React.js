import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import tmdbApi, { category, movieType, requests } from "../API/tmdbApi";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeScreen from "../pages/HomeScreen";
import MovieList from "../pages/MovieList";
import MyList from "../pages/MyList";

function App() {
  const [cart, setCart] = useState([]);
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

  const [topRated, SetTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [HorrorMovie, setHorrorMovie] = useState([]);
  const [romanceMovie, SetRomanceMovie] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const popular = await tmdbApi.getMovieList(movieType.popular, {
        params: {},
      });
      setPopular(popular.results);

      const topRated = await tmdbApi.getMovieList(movieType.top_rated, {
        params: {},
      });
      SetTopRated(topRated.results);

      const horrorMovie = await tmdbApi.getMovieList(movieType.upcoming, {
        params: {},
      });
      setUpcoming(horrorMovie.results);

      const horrorMovies = await axios.get(urlLinks.horrorMovie);
      setHorrorMovie(horrorMovies.data.results);

      const actionMovie = await axios.get(urlLinks.actionMovie);
      setActionMovie(actionMovie.data.results);

      const romanceMovie = await axios.get(urlLinks.romanceMovie);
      SetRomanceMovie(romanceMovie.data.results);

      const movieList = [...topRated.results, ...popular.results];
      setMovie(movieList);
    })();
  }, []);

  const urlLinks = {
    popular: requests.fetchTrending,
    upComing: "upComing",
    topRated: "topRated",
    actionMovie: requests.fetchActionMovie,
    horrorMovie: requests.fetchHorrorMovie,
    romanceMovie: requests.fetchRomanceMovie,
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
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                romanceMovie={romanceMovie}
                actionMovie={actionMovie}
                popular={popular}
                topRated={topRated}
                horrorMovie={HorrorMovie}
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
            path="/film"
            element={
              <MovieList
                movie={movie}
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
            path="/myList"
            element={<MyList cart={cart} removeToFavorite={removeToFavorite} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
