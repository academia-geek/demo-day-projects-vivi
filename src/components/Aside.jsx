import {
  AsideEvents,
  AsideStyled,
  ButtonAside,
  CalendarStyled,
  CardStyled,
} from "../styles/homeStyles";
import event from "../assets/carousel1.png";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

export const Aside = () => {
  const [value, onChange] = useState(new Date());
  return (
    <AsideStyled>
      <div>
        <h4 className="text-uppercase text-white text-center">Calendario</h4>
        <CalendarStyled value={value} />
      </div>
        <h4 className="text-uppercase text-white text-center">Próximos eventos</h4>
      <AsideEvents>
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
