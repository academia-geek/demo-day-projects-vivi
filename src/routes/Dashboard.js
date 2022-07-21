import { Route, Routes } from "react-router-dom";
import { AddLocation } from "../components/AddLocation";
import { Map } from "../components/Map";
import { NavUser } from "../components/NavUser";
import { AddEvent } from "../containers/Administrator/AddEvent";
import { CalendarPage } from "../containers/CalendarPage";
import { DetailEvents } from "../containers/Administrator/DetailEvents";
import { EventSchedule } from "../containers/Administrator/EventSchedule";
import { Home } from "../containers/Home";
import { Profile } from "../containers/Profile";
import { Programming } from "../containers/Programming";
import { DetailItinerary } from "../containers/Administrator/DetailItinerary";

export const Dashboard = () => {
  return (
    <>
     <NavUser/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/locations" element={<AddLocation />} />
        <Route path="/map/:id" element={<Map />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/Schedule" element={<EventSchedule />} />
        <Route path="/programming/:id" element={<Programming/>} />
        <Route path="/detail" element={<DetailEvents/>} />
        <Route path="/detailItinerary/:id" element={<DetailItinerary/>} />
        </Routes>
    </>
  );
};
