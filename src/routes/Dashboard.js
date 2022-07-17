import { Route, Routes } from "react-router-dom";
import { AddLocation } from "../components/AddLocation";
import { Mapped } from "../components/Mapped";
import { NavUser } from "../components/NavUser";
import { AddEvent } from "../containers/AddEvent";
import { CalendarPage } from "../containers/CalendarPage";
import { EventSchedule } from "../containers/EventSchedule";
import { Home } from "../containers/Home";
import { Profile } from "../containers/Profile";
import { Programming } from "../containers/Programming";

export const Dashboard = () => {
  const dimensions = {
    width: "100vw",
    height: "90vh",
    padding: "65px 0 0 0",
    opacity: "1",
  };
  return (
    <>
      <NavUser />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/locations" element={<AddLocation />} />
        <Route
          path="/map"
          element={
            <Mapped
              dW={dimensions.width}
              dH={dimensions.height}
              py={dimensions.padding}
              op={dimensions.opacity}
            />
          }
        />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/Schedule" element={<EventSchedule />} />
        <Route path="/programming" element={<Programming />} />
      </Routes>
    </>
  );
};
