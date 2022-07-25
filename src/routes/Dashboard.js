import { Route, Routes } from "react-router-dom";
import { Map } from "../components/Map";
import { NavUser } from "../components/NavUser";
import { CalendarPage } from "../containers/CalendarPage";
import { Favorites } from "../containers/Favorites";
import { Home } from "../containers/Home";
import { Profile } from "../containers/Profile";
import { Programming } from "../containers/Programming";
import { AdminHome } from "../containers/Administrator/AdminHome";

export const Dashboard = () => {
  return (
    <>
      <NavUser />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map/:id" element={<Map />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* Admin Routes */}
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/programming/:id" element={<Programming />} />
      </Routes>
    </>
  );
};
