import { Route, Routes } from "react-router-dom";
import { AddLocation } from "../components/AddLocation";
import { Mapped } from "../components/Mapped";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/locations" element={<AddLocation />} />
        <Route path="/map" element={<Mapped />} />
      </Routes>
    </>
  );
};
