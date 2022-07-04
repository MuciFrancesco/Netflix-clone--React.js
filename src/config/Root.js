import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import HomeScreen from "../pages/HomeScreen";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
