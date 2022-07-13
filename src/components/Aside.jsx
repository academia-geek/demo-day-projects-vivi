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
        <h4 className="text-uppercase text-white">Calendario</h4>
        <CalendarStyled
          onChange={onChange}
          value={value}
          tileDisabled={() =>
            ({ activeStartDate, date, view }) =>
              date.getDay() === 0}
        />
      </div>
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
