import logo from "./logo.svg";
import "./App.css";
import DebounceComponent from "./Components/DebounceComponent";
import PaginationComponent from "./Components/PaginationComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomeComponent from "./Route.js/HomeComponent";
import AboutComponent from "./Route.js/AboutComponent";
import Dashboard from "./Route.js/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <DebounceComponent />  */}
      {/* <PaginationComponent /> */}
      <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
