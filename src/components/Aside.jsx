import {
  AsideEvents,
  AsideStyled,
  CalendarStyled,
  CardStyled,
} from "../styles/homeStyles";
import event from "../assets/carousel1.png";
import { Card } from "react-bootstrap";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

export const Aside = () => {
  const [value] = useState(new Date());
  const navigate = useNavigate();
  return (
    <AsideStyled>
      <div onClick={() => navigate("/calendar")} className="calendar">
        <h4 className="text-uppercase text-white text-center">Calendario</h4>
        <CalendarStyled value={value} />
      </div>
      <h4 className="text-uppercase text-white text-center">
        Próximos eventos
      </h4>
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
