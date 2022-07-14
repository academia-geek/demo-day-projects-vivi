import { Route, Routes } from "react-router-dom";
import { AddLocation } from "../components/AddLocation";
import { Mapped } from "../components/Mapped";
import { NavUser } from "../components/NavUser";
import { AddEvent } from "../containers/AddEvent";
import { CalendarPage } from "../containers/CalendarPage";
import { EventSchedule } from "../containers/EventSchedule";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  return (
    <>
    <NavUser />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/locations" element={<AddLocation />} />
        <Route path="/map" element={<Mapped />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/addEvent" element={<AddEvent/>} />
        <Route path="/Schedule" element={<EventSchedule/>} />
      </Routes>
    </>
  );
};
