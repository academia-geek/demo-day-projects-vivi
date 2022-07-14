import { Route, Routes } from "react-router-dom";
import { CalendarPage } from "../containers/CalendarPage";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </>
  );
};
