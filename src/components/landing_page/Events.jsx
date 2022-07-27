import { Col, Container, Row } from "react-bootstrap";
import { EventLanding, TitleLanding } from "../../styles/landingStyles";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listEventAsync } from "../../redux/actions/eventsAction";

export const Events = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { EventsList } = useSelector((store) => store.eventos);

  useEffect(() => {
    dispatch(listEventAsync());
  }, [dispatch]);

  const events = EventsList.sort(() => Math.random() - 0.5).slice(0, 4);

  const getDateEvent = (date) => {
    const multiply = new Date(date * 1000);
    const day = multiply.getDate();
    const month = multiply.getMonth() + 1;
    const year = multiply.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="mb-4">
      <Container>
        <TitleLanding className="left">
          <h2 className="text-uppercase">¡Echa un vistazo!</h2>
        </TitleLanding>
        <Row className="me-4 me-lg-0">
          {events.map((event) => (
            <Col md={3} className="px-0 py-1 py-lg-0" key={event.id}>
              <EventLanding onClick={() => navigate("/login")}>
                <div className="img-container">
                  <div>
                    <span style={{ backgroundImage: `url(${event.img})` }} />
                  </div>
                </div>
                <div className="text-container">
                  <div className="event-title">
                    <h3>{event.name}</h3>
                  </div>
                  <div className="event-data">
                    <span>
                      {event.location}
                      <span>-</span>
                    </span>
                    <span>{getDateEvent(event.date[0].seconds)}</span>
                  </div>
                </div>
              </EventLanding>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
