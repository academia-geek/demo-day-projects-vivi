import { Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home";
import { Profile } from "../containers/Profile";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
