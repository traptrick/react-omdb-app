import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  // return (
  //   <button className="loginBtn" onClick={() => loginWithRedirect()}>
  //     Log In
  //   </button>
  // );
};

export default LoginButton;
