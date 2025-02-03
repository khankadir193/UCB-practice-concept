import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignComponent = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  if (!authState) return null;

  const handleLogin = async () => {
    if(!authState || !oktaAuth.isAuthenticated){
        await oktaAuth.signInWithRedirect();
    }else{
        alert("please login first");
    }

  };

  const handleLogout = ()=>{
    oktaAuth.signOut();
    navigate("/");
  }

  return (
    <div>
      <h2>Welcome to the Sign Components</h2>
      {
        !oktaAuth.isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
        ) : (
            <button onClick={handleLogin}>Login</button>
        )
      }
    </div>
  );
};

export default SignComponent;
