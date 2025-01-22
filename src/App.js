import logo from "./logo.svg";
import "./App.css";
import DebounceComponent from "./Components/DebounceComponent";
import PaginationComponent from "./Components/PaginationComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomeComponent from "./Route.js/HomeComponent";
import AboutComponent from "./Route.js/AboutComponent";
import Dashboard from "./Route.js/Dashboard";
import RoleBasedRoute from "./Route.js/RoleBasedRoute";
import Unauthorized from "./Route.js/Unauthorized";

function App() {
  const userRole = 'user';
  return (
    <div className="App">
      {/* <DebounceComponent />  */}
      <PaginationComponent />
      {/* implementation authorized routing */}
      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/dashboard" element={
              <RoleBasedRoute element={<Dashboard />} allowedRoles={["admin"]} userRole={userRole} />
            } />
            <Route path="/unauthorized" element={<Unauthorized />}  />
          </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
