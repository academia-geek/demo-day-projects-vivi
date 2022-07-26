import { AsideEvents, AsideStyled, CalendarStyled, CardStyled,} from "../styles/homeStyles";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment";
import { listEventAsync } from "../redux/actions/eventsAction";
import { CardStyledHome } from "../styles/calendarStyle";
const datadate = []

export const Aside = () => {
  const [value] = useState(new Date());
  const navigate = useNavigate();
  const { EventsList } = useSelector(store => store.eventos)
  const dispatch = useDispatch()
<<<<<<< HEAD
  // console.log(Activities)
  const dateToday = new Date(moment().format("YYYY-MM-DD")).getTime();
  // console.log(dateToday)
  useEffect(() => {
    dispatch(listScheduleAsync());
=======
  const dateToday = new Date(moment().format("YYYY-MM-DD")).getTime();
>>>>>>> 8b719ed83270f575a06bfaec302a023108017588

  useEffect(() => {
    dispatch(listEventAsync());
  }, [dispatch]);

   for (let i = 0; i <= 14; i++) {
    const fecha = dateToday + (86400000 * i)
<<<<<<< HEAD
    // console.log(fecha)
    const filtro = Activities?.find(element => element.dates == fecha)
    if (filtro != undefined) {
      const count = datadate.push(filtro)
    }
  }
  // console.log(datadate)
=======
    const filtro = EventsList.find((ev) => {
      return ev.date
        .map((date) => {
          return date.seconds;
        })
        .includes(fecha / 1000);
    });
    
    const prueba = datadate.some(elem => elem?.name === filtro?.name)
    if (prueba === false && filtro != undefined) {
      datadate.push(filtro)
    }
  }

>>>>>>> 8b719ed83270f575a06bfaec302a023108017588
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
            <Link to={`/programming/${item.id}`} key={item.id}>
              <CardStyled >
                <CardStyledHome>
                  <h6 style={{ fontSize: "15px", fontWeight: "700", width: "95%", marginLeft: "2px" }}>{item?.name}</h6>
                  <img src={item.img} style={{ width: "50%", borderRadius: "15px 0 15px  0" }} />
                </CardStyledHome>
              </CardStyled>
            </Link>
          )}
      </AsideEvents>
    </AsideStyled>
  );
};
