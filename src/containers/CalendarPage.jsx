import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { CalendarStyled, TittleStyle } from "../styles/calendarStyle";
import { SiderCalendar } from "../components/calendar _and_programming/Sider";
import { CardEvent } from "../components/calendar _and_programming/CardEvent";
import { Footer } from "../components/Footer";
import moment from "moment";
import "moment/locale/es";
import es_ES from "antd/es/locale/es_ES";
import { ConfigProvider } from "antd";

export const CalendarPage = () => {
  const datel = new Date(moment().format("YYYY-MM-DD")).getTime();
  const [date, setdate] = useState(datel);
  const onSelect = (value) => {
    setdate(new Date(value.format("YYYY-MM-DD")).getTime());
  };

  return (
    <div>
      <div className="d-flex">
        <Col sm={9}>
          <div className="site-calendar-demo-card">
            <ConfigProvider locale={es_ES}>
              <CalendarStyled fullscreen={false} onSelect={onSelect} />
            </ConfigProvider>
          </div>
          <CardEvent m={date} />
        </Col>
        <Col sm={3}>
          <div
            style={{
              height: "calc(100% - 63px)",
              background: " #565252",
              marginTop: "63px",
              marginLeft: "4.9vw",
              width: "80.3%",
            }}
          >
            <TittleStyle>CONOCE COLOMBIA</TittleStyle>
            <SiderCalendar />
          </div>
        </Col>
      </div>
      <Footer />
    </div>
  );
};
