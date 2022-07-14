import { Aside } from "../components/Aside";
import { CarouselEvents } from "../components/CarouselEvents";
import { Col } from "react-bootstrap";
import { Timeline } from "../components/Timeline";
import { NavUser } from "../components/NavUser";

export const Home = () => {
  return (
    <div>
      <NavUser />
      <div className="d-flex">
        <Col sm={9}>
          <CarouselEvents />
          <Timeline />
        </Col>
        <Col sm={3}>
          <Aside />
        </Col>
      </div>
    </div>
  );
};
