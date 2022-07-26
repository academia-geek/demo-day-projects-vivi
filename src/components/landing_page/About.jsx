import { SectionHero, TitleLanding } from "../../styles/landingStyles";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/Logo.png";

export const About = () => {
  return (
    <Container>
      <TitleLanding>
        <h1 className="about-title text-uppercase">Quiénes Somos</h1>
      </TitleLanding>
      <SectionHero>
        <Row>
          <div className="d-lg-none d-block quote">
            <div className="d-flex align-items-center">
              <img src={logo} className="logo" />
              <span>Vivir para Viajar, Viajar para Vivir</span>
            </div>
          </div>
          <Col md={6}>
            <img
              src="https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2020/09/23/carnaval.jpeg?itok=WiZfIQv2"
              className="w-100"
            />
          </Col>
          <Col className="text-lg-center text-justify p-5" md={6}>
            <div className="d-lg-flex d-none quote justify-content-center">
              <div className="d-flex align-items-center">
                <img src={logo} className="logo" />
                <span>Vivir para Viajar, Viajar para Vivir</span>
              </div>
            </div>
            <h2 className="text-center">Bienvenido a ViVi</h2>
            <p>
              Somos un proyecto inspirado en las maravillas que guarda el
              territorio colombiano a través de sus paisajes, sus personas y su
              cultura. Por eso, queremos invitarte a conocer lo que esta
              majestuosa y colorida tierra tiene para ofrecerte en cada uno de
              sus rincones. Acompáñanos y anímate a participar de esta
              emocionante aventura.
            </p>
          </Col>
        </Row>
      </SectionHero>
    </Container>
  );
};
