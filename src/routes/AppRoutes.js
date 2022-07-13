import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../containers/LandingPage'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Business } from '../containers/Business'
import { RegisterAdmi } from '../containers/RegisterAdmi'
import { LandingPageEn } from '../containers/LandingPageEn'

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
import { Spin } from "../components/Spin";

export const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
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
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <Spin height={"100vh"} />;
  }

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
          path="/En"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <LandingPageEn />
          </PublicRoutes>
          }
        />
       
        <Route
          path="/bienvenido"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <RegisterAdmi />
          </PublicRoutes>
          }
        />
         
         <Route
          path="/business"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
            <Business />
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
