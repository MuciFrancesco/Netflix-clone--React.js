import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
