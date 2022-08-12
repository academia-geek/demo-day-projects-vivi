import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import { DeleteOutlined, FormOutlined, CarryOutOutlined,EditOutlined } from '@ant-design/icons';
import { Button, Card, List, Tooltip } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEventAsync, listEventAsync } from '../../redux/actions/eventsAction';
import { Footer } from '../../components/Footer';
import { deleteScheduleAsync, listScheduleAsync } from '../../redux/actions/scheduleAction';
import { Col } from "react-bootstrap";
import { Edit } from '../../components/admin/EditModal';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Logo.png'
import { AsideStyled2, CardStyled } from "../../styles/homeStyles";
import { TitlleEvents } from '../../styles/calendarStyle';

export const DetailEvents = () => {
  const [datos, setDatos] = useState("")
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  const { EventsList } = useSelector(store => store.eventos)
  const { Activities } = useSelector(store => store.schedule) 
  
  useEffect(() => {
    dispatch(listEventAsync())
    dispatch(listScheduleAsync())
  }, [dispatch])

  const handleDelete = (id) => {
    alert('vamos a eliminar el evento')
    const filter = Activities.filter(m => m.id == id)
    filter.forEach(element => dispatch(deleteScheduleAsync(element.id)))
    dispatch(deleteEventAsync(id))
  }

  const handleEdit = (id) => {
    setDatos(id)
    setModal(true)
  }

  return (
    <div >
      <div className="d-flex" >  
        <Col sm={9} >
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
          <TitlleEvents>Lista de Eventos Publicados</TitlleEvents>
          <List
            style={{ paddingTop: "10px", width: "65vw", marginLeft: "5vw" }}
            dataSource={EventsList}
            locale={{ emptyText: 'No hay eventos que mostrar' }}
            renderItem={(item) => (
              <Paper elevation={5}>
                <Card style={{ marginTop: "20px" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "40vw", marginLeft: "10px" }}>
                      <h2>{item.name}</h2>
                      <article>{item.description}</article>
                      <Link to={`/map/${item.location}`} style={{ color: "#000", fontWeight: '600 ' }}>{item.location}</Link>
                    </div>
                    <img src={item.img} alt="..cargando" style={{ width: "200px", marginLeft: "50px", height: '200px' }} />
                    <div style={{ marginTop: "50px", height: '100px', marginLeft: "5vw" }}>
                      <Link to={`/detailItinerary/${item.id}`}>
                        <Tooltip title={`Editar el itinerario de ${item.name}`} color={'#FFBD29'}>
                          <Button style={{ border: "none" }}>
                            <CarryOutOutlined style={{ fontSize: '20px', color: '#000' }} />
                          </Button>
                        </Tooltip>
                      </Link>
                      <br />
                      <Tooltip title={`Editar la informacion principal ${item.name}`} color={'#FFBD29'}>
                        <Button onClick={() => handleEdit(item.id)} style={{ border: "none" }}>
                          <FormOutlined style={{ fontSize: '20px', color: '#000', marginTop: "10px" }} />
                        </Button>
                      </Tooltip>
                      <br />
                      <Tooltip title={`Eliminar todo ${item.name} `} color={'#FFBD29'}>
                        <Button onClick={() => handleDelete(item.id)} style={{ border: "none" }}>
                          <DeleteOutlined style={{ fontSize: '20px', color: '#000', marginTop: "10px" }} />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </Card>
              </Paper>
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
        <br />
        <div />
        {
          modal === true ? <Edit data={datos} /> : ''
        }
      </div>
      <Footer />
    </div>

  )
}
