import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../components/Details";
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
  console.log(cart);
  return (
    <div className="root">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<HomeScreen cart={cart} addToFavorite={addToFavorite} />}
          ></Route>
          <Route path="/myList" element={<MyList cart={cart} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
