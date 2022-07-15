import { Route, Routes } from "react-router-dom";
import { AddLocation } from "../components/AddLocation";
import { Mapped } from "../components/Mapped";
import { NavUser } from "../components/NavUser";
import { AddEvent } from "../containers/AddEvent";
import { CalendarPage } from "../containers/CalendarPage";
import { EventSchedule } from "../containers/EventSchedule";
import { Home } from "../containers/Home";

export const Dashboard = () => {
  const dimensions = {
    width: "90vw",
    height: "90vh",
  };
  return (
    <>
      <NavUser />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/locations" element={<AddLocation />} />
        <Route
          path="/map"
          element={<Mapped dW={dimensions.width} dH={dimensions.height} />}
        />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/Schedule" element={<EventSchedule />} />
      </Routes>
    </>
  );
};
