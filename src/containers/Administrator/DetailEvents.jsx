import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import { DeleteOutlined, FormOutlined, CarryOutOutlined } from '@ant-design/icons';
import { Button, Card, List, Tooltip } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEventAsync, listEventAsync } from '../../redux/actions/eventsAction';
import { Footer } from '../../components/Footer';
import { deleteScheduleAsync, listScheduleAsync } from '../../redux/actions/scheduleAction';
import { Col } from "react-bootstrap";
import { Siderbar, TittleStyle } from '../../styles/calendarStyle';
import { SiderCalendar } from '../../components/calendar _and_programming/Sider';
import { Edit } from '../../components/admin/EditModal';

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
      <div className="d-flex">
        <Col sm={9}>
          <h3 className='titlleEvents '>Lista de Eventos Publicados</h3>
          <List
            style={{ paddingTop: "10px", width: "70vw", marginLeft: "5vw" }}
            dataSource={EventsList}
            locale={{ emptyText: 'No hay eventos que mostrar' }}
            emptyText='no'
            renderItem={(item) => (
              <Paper elevation={8}>
                <Card style={{ border: '1px solid rgba(255, 189, 41, 1)', marginTop: "10px" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "40vw", marginLeft: "10px" }}>
                      <h2>{item.name}</h2>
                      <article>{item.description}</article>
                      <h6>{item.location}</h6>
                    </div>
                    <img src={item.img} alt="..cargando" style={{ width: "200px", marginLeft: "50px", height: '200px' }} />
                    <div style={{ marginTop: "50px", height: '100px', marginLeft: "5vw" }}>
                      <Link to={`/detailItinerary/${item.id}`}>
                        <Tooltip title={`Editar el itinerario de ${item.name}`} color={'#FFBD29'}>
                          <Button style={{ border: "none" }}>
                            <CarryOutOutlined style={{ fontSize: '20px', color: '#565252' }} />
                          </Button>
                        </Tooltip>
                      </Link>
                      <br />
                      <Tooltip title={`Editar la informacion principal ${item.name}`} color={'#FFBD29'}>
                        <Button onClick={() => handleEdit(item.id)} style={{ border: "none" }}>
                          <FormOutlined style={{ fontSize: '20px', color: '#565252', marginTop: "10px" }} />
                        </Button>
                      </Tooltip>
                      <br />
                      <Tooltip title={`Eliminar todo ${item.name} `} color={'#FFBD29'}>
                        <Button onClick={() => handleDelete(item.id)} style={{ border: "none" }}>
                          <DeleteOutlined style={{ fontSize: '20px', color: '#565252', marginTop: "10px" }} />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </Card>
              </Paper>
            )}
          />
        </Col>
        <Col sm={3}>
          <Siderbar>
            <TittleStyle>CONOCE COLOMBIA</TittleStyle>
          </Siderbar>
          <SiderCalendar />
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
