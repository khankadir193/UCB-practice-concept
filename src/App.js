import logo from "./logo.svg";
import "./App.css";
import DebounceComponent from "./Components/DebounceComponent";
import PaginationComponent from "./Components/PaginationComponent";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  // useHistory,
  Switch,
  useNavigate,
} from "react-router-dom";
import HomeComponent from "./Route.js/HomeComponent";
import AboutComponent from "./Route.js/AboutComponent";
import Dashboard from "./Route.js/Dashboard";
import RoleBasedRoute from "./Route.js/RoleBasedRoute";
import Unauthorized from "./Route.js/Unauthorized";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import AnnouncementTab from "./AnnoucementComponent/AnnoucementComp";
import { useCallback } from "react";

const oktaAuth = new OktaAuth({
  issuer: "https://{yourOktaDomain}/oauth2/default",
  clientId: "{yourClientID}",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email", "offline_access"],
});

function App() {
  const userRole = "admin";
  const navigate = useNavigate();

  const restoreOriginalUri = useCallback(
    (_oktaAuth, originalUri) => {
      const relativeUri = toRelativeUrl(originalUri || "/", window.location.origin);
      navigate(relativeUri, { replace: true });
    },
    [navigate]
  );

  return (
    <div className="App">
      {/* <DebounceComponent />  */}
      {/* <PaginationComponent /> */}
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
      {/* okta authentication */}
      {/* <BrowserRouter> */}
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            {/* <Route path="/login/callback" element={<LoginCallback />} /> */}
            {/* <Route path="*" element={<Navigate to="/" />} />{" "} */}
            {/* Handles unknown routes */}
          </Routes>
        </Security>
      {/* </BrowserRouter> */}
      {/* <AnnouncementTab /> */}
    </div>
  );
}

export default App;
