import { Col, Container, Row } from "react-bootstrap";
import {
  ButtonLanding,
  FormLanding,
  TitleLanding,
} from "../../styles/landingStyles";
import logo from "../../assets/Logo_big.png";

export const ContactLanding = () => {
  return (
    <section className="mb-5">
      <Container>
        <TitleLanding>
          <h2 className="text-uppercase">Contáctanos</h2>
        </TitleLanding>
        <Row>
          <Col md={6} className="d-none d-lg-block">
            <img src={logo} width={400} height={350} />
          </Col>
          <Col md={6}>
            <FormLanding>
              <div className="form-group d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <ButtonLanding>
                <span>Enviar</span>
              </ButtonLanding>
            </FormLanding>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
