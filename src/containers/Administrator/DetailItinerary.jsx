import { Divider, List, Tooltip, } from 'antd'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Logo.png'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button, Col } from "react-bootstrap";
import { Paper } from '@mui/material'
import { listEventAsync } from '../../redux/actions/eventsAction';
import { listScheduleAsync } from '../../redux/actions/scheduleAction';
import { TittleProgramming } from '../../components/calendar _and_programming/TittleProgramming';
import { Siderbar, TittleStyle } from '../../styles/calendarStyle';
import { SiderCalendar } from '../../components/calendar _and_programming/Sider';
import { CardActivite } from '../../components/admin/CardActivite';

export const DetailItinerary = () => {
  const { id } = useParams()
  const { EventsList } = useSelector(store => store.eventos)
  const { Activities } = useSelector(store => store.schedule)
  const data = EventsList.filter(m => m.id == id)
  const dataAct = Activities.filter(m => m.id == id)
  const [date] = data
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(listEventAsync())
    dispatch(listScheduleAsync())
  }, [dispatch])
//  const handleSubmit =()=>{
//   localStorage.setItem("id", formValue.id)
//  }
  return (
    <div>
      <div className="d-flex">
        <Col sm={9}>
        <Navbar bg="dark" style={{margin:"0px",padding:"0px"}}>
        <Container>
          <Navbar.Brand href="/admin/home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="ViVi logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
          {
            data?.map(item => (
              <div>
              <Paper elevación={12} key={item.name} style={{ display: "flex", marginTop: "90px", marginLeft: '50px' }}>
                <img src={item.img} alt="publicidad" style={{ width: "200px", borderRadius: "10px", marginLeft: "30px" }} />
                <div style={{ textAlign: "center", marginLeft: "200px", marginTop: "20px" }}>
                  <h4>{item.name}</h4>
                  <article>{item.description}</article>
                  <Link to={`/map/${item.location}`} style={{ color: "#000" }}>{item.location}</Link>
                </div>
              </Paper>
              <Tooltip title='Agregar actividad al itinerario ' color={'#FFBD29'}>
              <Button onClick={()=>
                localStorage.setItem("id", item.id)
              
               } href="/Schedule" style={{ fontSize: "20px", marginLeft: "65vw", marginTop: "20px", background: "rgba(255, 189, 41, 1)", border: "none" }}>Agregar</Button>
            </Tooltip>
            </div>
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
        <Col sm={3} className="position-fixed end-0">
        <AsideStyled2>
            <h4 style={{color:"white", textAlign:"center"}} >Eventos Publicados</h4>
            {
              EventsList.map(event=>
                <CardStyled key={event.id}>
               <h6 style={{width:"90%"}}>{event.name}</h6>
               <Link to={`/detailItinerary/${event.id}`}>
               <EditOutlined style={{color:"#ffc947", fontWeight:"900"}} Hover-Reveal/>
               </Link>
                </CardStyled>              
                )
            }
          </AsideStyled2>
        </Col>
      </div>
    </div>
  )
}
