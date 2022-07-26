import {
  AsideEvents,
  AsideStyled,
  CalendarStyled,
  CardStyled,
} from "../styles/homeStyles";
import { Button, List } from "antd";
// import event from "../assets/carousel1.png";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment";
import {  listAsync } from "../redux/actions/infoAction";
import { listScheduleAsync } from "../redux/actions/scheduleAction";
import { AsideEvent } from "./calendar _and_programming/AsideEvent";
import { elementAcceptingRef } from "@mui/utils";
import { listEventAsync } from "../redux/actions/eventsAction";
import { CardStyledHome } from "../styles/calendarStyle";
const datadate = []
export const Aside = () => {
  const [value] = useState(new Date());
  const navigate = useNavigate();
  //  const { Activities } = useSelector(store => store.schedule)
  const { EventsList } = useSelector(store => store.eventos)
  const dispatch = useDispatch()
   const dateToday = new Date(moment().format("YYYY-MM-DD")).getTime();
  console.log(dateToday)
  useEffect(() => {
    dispatch(listEventAsync());
  }, [dispatch]);
  console.log(EventsList)
  for (let i = 0; i <= 14; i++) {
    const fecha = dateToday + (86400000 * i)
    console.log(fecha)
    const filtro = EventsList.find((ev) => {
      return ev.date
        .map((date) => {
          return date.seconds;
        })
        .includes(fecha/1000);
    });
    console.log(filtro)
    const prueba=datadate.some(elem =>elem?.name === filtro?.name)
    if(prueba === false && filtro !=  undefined ){
      datadate.push(filtro)
    }
   
  }
  console.log(datadate)
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
        {
          datadate?.map(item =>
            <Link to={`/programming/${item.id}`}>
            <CardStyled>
                       
              <CardStyledHome >
                
              <h6 style={{fontSize:"14px",fontWeight: "700",width:"95%",marginLeft:"2px"}}>{item?.name}</h6>
              <img src={item.img} style={{width:"50%"}}/>
              </CardStyledHome>
             
            </CardStyled>
            </Link>
          )}
      </AsideEvents>
    </AsideStyled>
  );
};
