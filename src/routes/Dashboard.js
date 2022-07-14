import { Route, Routes } from "react-router-dom";
import { AddEvent } from "../containers/AddEvent";
import { CalendarPage } from "../containers/CalendarPage";
import { EventSchedule } from "../containers/EventSchedule";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/addEvent" element={<AddEvent/>} />
        <Route path="/Schedule" element={<EventSchedule/>} />
      </Routes>
    </>
  );
};
