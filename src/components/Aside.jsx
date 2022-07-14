import { AsideEvents, AsideStyled, ButtonAside, CardStyled } from "../styles/homeStyles";
import event from "../assets/carousel1.png";
import { Card } from "react-bootstrap";

export const Aside = () => {
  return (
    <AsideStyled>
      <ButtonAside className="mb-3"  >Calendario</ButtonAside>
      <AsideEvents>
        <h5>Próximos eventos</h5>
        <CardStyled>
          <img src={event} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyled>
        <CardStyled>
          <img src={event} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyled>
        <CardStyled>
          <img src={event} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyled>
        <CardStyled>
          <img src={event} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyled>
      </AsideEvents>
    </AsideStyled>
  );
};
