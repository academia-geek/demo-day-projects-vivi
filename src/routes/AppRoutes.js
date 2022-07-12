import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../containers/LandingPage";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { PublicRoutes } from "./Public";
import { PrivateRoutes } from "./Private";
import { Dashboard } from "./Dashboard";

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogged(true);
        user.getIdToken().then((token) => {
          return token;
        });
      } else {
        setIsLogged(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <LandingPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes isAuthenticated={isLogged}>
              <Dashboard />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
