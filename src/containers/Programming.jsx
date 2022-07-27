import { Divider, List } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../redux/actions/eventsAction'
import { useParams } from 'react-router-dom'
import { listScheduleAsync } from '../redux/actions/scheduleAction'
import { CardActivite } from '../components/calendar _and_programming/CardActivite'
import { Footer } from "../components/Footer";
import { TittleProgramming } from '../components/calendar _and_programming/TittleProgramming'
import { Col } from "react-bootstrap";
import { LinkStyle, TittleStyle } from '../styles/calendarStyle';
import { SiderCalendar } from '../components/calendar _and_programming/Sider';
import { Paper } from '@mui/material'

export const Programming = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listEventAsync())
    dispatch(listScheduleAsync())
  }, [dispatch])

  const { EventsList } = useSelector(store => store.eventos)
  const data = EventsList.filter(m => m.id == id)

  const [date] = data

  return (
    <div>
      <div className="d-flex">
        <Col sm={9}>
          {
            data?.map(item => (
              <Paper elevación={12} style={{ display: "flex", marginTop: "90px", marginLeft: '50px' }}>
                <img src={item.img} alt={item.name} style={{ width: "200px", borderRadius: "10px", marginLeft: "30px" }} />
                <div style={{ textAlign: "center", marginLeft: "200px", marginTop: "20px" }}>
                  <h4>{item.name}</h4>
                  <article>{item.description}</article>
                  <LinkStyle to={`/map/${item.location}`}>{item.location}</LinkStyle>
                </div>
              </Paper>
            ))
          }
          <List
            style={{ marginTop: "50px", marginLeft: "80px" }}
            itemLayout="horizontal"
            dataSource={date?.date}
            renderItem={(item) => (
              <>
                <Divider orientation="right"><TittleProgramming k={item.seconds} /></Divider>
                <List.Item  >
                  <CardActivite k={item.seconds} />
                </List.Item>
              </>
            )}
          />
        </Col>
        <Col sm={3}>
          <div
            style={{
              height: "calc(100% - 63px)",
              background: "var(--background-color)",
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
  )
}
