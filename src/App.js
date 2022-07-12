import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import PlaylistDetail from "./components/PlaylistDetail";
import SearchedPage from "./components/searched/SearchedPage";
import MovieDetail from "./components/movieDetail/MovieDetail";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthenticationButton from "./auth/authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    setAuthCheck(true);
  }, [isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {authCheck && !isAuthenticated ? (
        <AuthenticationButton />
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/query" element={<SearchedPage />} />
            <Route path="/query/selected/:id" element={<MovieDetail />} />
            <Route path="/playlist/:id" element={<PlaylistDetail />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
