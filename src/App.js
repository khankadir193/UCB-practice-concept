import logo from "./logo.svg";
import "./App.css";
import DebounceComponent from "./Components/DebounceComponent";
import PaginationComponent from "./Components/PaginationComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomeComponent from "./Route.js/HomeComponent";
import AboutComponent from "./Route.js/AboutComponent";

function App() {
  return (
    <div className="App">
      {/* <DebounceComponent />  */}
      {/* <PaginationComponent /> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
