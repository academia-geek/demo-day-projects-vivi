import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Business } from "../containers/Administrator/Business";
import { RegisterAdmi } from "../containers/RegisterAdmi";
import { LandingPageEn } from "../containers/LandingPageEn";
import { LandingPage } from "../containers/LandingPage";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { PublicRoutes } from "./Public";
import { PrivateRoutes } from "./Private";
import { Dashboard } from "./Dashboard";
import { Spin } from "../components/Spin";
import { AdminLogin } from "../components/admin/AdminLogin";
import { AdminConfirmation } from "../components/admin/AdminConfirmation";
import { DetailEvents } from "../containers/Administrator/DetailEvents";
import { DetailItinerary } from "../containers/Administrator/DetailItinerary";
import { EventSchedule } from "../containers/Administrator/EventSchedule";
import { AddEvent } from "../containers/Administrator/AddEvent";
import { AdminHome } from "../containers/Administrator/AdminHome";

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
          path="/login/company"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <AdminLogin />
            </PublicRoutes>
          }
        />
        <Route
          path="/login/company/confirmation"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <AdminConfirmation />
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
          path="/sign__in/Admi"
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
        <Route path="/detail" element={
          <PublicRoutes isAuthenticated={isLogged}>
            <DetailEvents />
          </PublicRoutes>
        } />
        <Route path="/detailItinerary/:id" element={
          <PublicRoutes isAuthenticated={isLogged}>
            <DetailItinerary />
          </PublicRoutes>
        } />
        <Route path="/addEvent" element={
          <PublicRoutes isAuthenticated={isLogged}>
            <AddEvent />
          </PublicRoutes>
        } />

        <Route path="/admin/home" element={
          <PublicRoutes isAuthenticated={isLogged}>
            <AdminHome />
          </PublicRoutes>
        } />
        
        <Route path="/Schedule" element={
          <PublicRoutes isAuthenticated={isLogged}>
            <EventSchedule />
          </PublicRoutes>
        } />
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
