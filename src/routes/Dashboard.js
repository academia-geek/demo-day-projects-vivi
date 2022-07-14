import { Route, Routes } from "react-router-dom";
import { AddLocation } from "../components/AddLocation";
import { Mapped } from "../components/Mapped";
import { NavUser } from "../components/NavUser";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  return (
    <>
    <NavUser />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/locations" element={<AddLocation />} />
        <Route path="/map" element={<Mapped />} />
      </Routes>
    </>
  );
};
