import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../components/Details";
import Nav from "../components/Nav";
import Row from "../components/Row";
import HomeScreen from "../pages/HomeScreen";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
