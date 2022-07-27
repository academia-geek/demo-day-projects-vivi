import { Col, Container, Row } from "react-bootstrap";
import { EventLanding, TitleLanding } from "../../styles/landingStyles";
import image4 from "../../assets/prueba/image4.jpg";
import image5 from "../../assets/prueba/image5.jpg";
import image7 from "../../assets/prueba/image7.jpg";
import image8 from "../../assets/prueba/image8.jpg";
import { useNavigate } from "react-router-dom";

export const Events = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-4">
      <Container>
        <TitleLanding className="left">
          <h2 className="text-uppercase">¡Echa un vistazo!</h2>
        </TitleLanding>
        <Row className="me-4 me-lg-0">
          <Col md={3} className="px-0 py-1 py-lg-0">
            <EventLanding onClick={() => navigate("/login")}>
              <div className="img-container">
                <div>
                  <span style={{ backgroundImage: `url(${image7})` }} />
                </div>
              </div>
              <div className="text-container">
                <div className="event-title">
                  <h3>Feria del sol y del acero</h3>
                </div>
                <div className="event-data">
                  <span>
                    Sogamoso
                    <span>-</span>
                  </span>
                  <span>14/07/2022</span>
                </div>
              </div>
            </EventLanding>
          </Col>
          <Col md={3} className="px-0 py-1 py-lg-0">
            <EventLanding onClick={() => navigate("/login")}>
              <div className="img-container">
                <div>
                  <span style={{ backgroundImage: `url(${image8})` }} />
                </div>
              </div>
              <div className="text-container">
                <div className="event-title">
                  <h3>Feria del sol y del acero</h3>
                </div>
                <div className="event-data">
                  <span>
                    Sogamoso
                    <span>-</span>
                  </span>
                  <span>14/07/2022</span>
                </div>
              </div>
            </EventLanding>
          </Col>
          <Col md={3} className="px-0 py-1 py-lg-0">
            <EventLanding onClick={() => navigate("/login")}>
              <div className="img-container">
                <div>
                  <span style={{ backgroundImage: `url(${image4})` }} />
                </div>
              </div>
              <div className="text-container">
                <div className="event-title">
                  <h3>Feria del sol y del acero</h3>
                </div>
                <div className="event-data">
                  <span>
                    Sogamoso
                    <span>-</span>
                  </span>
                  <span>14/07/2022</span>
                </div>
              </div>
            </EventLanding>
          </Col>
          <Col md={3} className="px-0 py-1 py-lg-0">
            <EventLanding onClick={() => navigate("/login")}>
              <div className="img-container">
                <div>
                  <span style={{ backgroundImage: `url(${image5})` }} />
                </div>
              </div>
              <div className="text-container">
                <div className="event-title">
                  <h3>Feria del sol y del acero</h3>
                </div>
                <div className="event-data">
                  <span>
                    Sogamoso
                    <span>-</span>
                  </span>
                  <span>14/07/2022</span>
                </div>
              </div>
            </EventLanding>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
