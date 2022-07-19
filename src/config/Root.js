import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import tmdbApi, { category } from "../API/tmdbApi";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeScreen from "../pages/HomeScreen";
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

  const prova = async (movieId) => {
    const pr = await tmdbApi.getVideos(category.movie, movieId);
    const prova = pr.results.slice(0, 1).map((el) => el.key);
    SetShowTrailer(prova);
    console.log(showTrailer);
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
          ></Route>
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
