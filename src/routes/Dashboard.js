import { Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
