import React, { useEffect } from 'react'
import { HeartOutlined } from '@ant-design/icons';
import { Button, List } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listEventAsync } from '../../redux/actions/eventsAction';
import { Footer } from '../../components/Footer';
export const DetailEvents = () => {
    const dispatch=useDispatch()
    const { EventsList } = useSelector(store => store.eventos)
    useEffect(() => {
        dispatch(listEventAsync())
      }, [dispatch])
  return (
    <div style={{paddingTop:"100px"}}>
      <List
        style={{ paddingTop: "10px", border: '1px solid rgba(255, 189, 41, 1)' }}
        itemLayout="horizontal"
        dataSource={EventsList}
        locale={{ emptyText: 'No hay eventos que mostrar' }}
        emptyText='no'
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: "flex" }}>
              <div style={{ width: "40vw", marginLeft: "10px" }}>
                <h2>{item.name}</h2>
                <article>{item.description}</article>
                <h6>{item.location}</h6>
                <div style={{ marginTop: "5vw", marginLeft: "20px" }}>
                  <HeartOutlined />
                  <Link to={`/itinerarydetails/${item.id}`}>
                    <Button style={{ marginLeft: "20px" }} >Mostrar Detalles</Button>
                  </Link>
                </div>
              </div>
              <img src={item.img} alt="..cargando" style={{ width: "200px", marginLeft: "50px" }} />
            </div>
          </List.Item>
        )}
      />
      <Footer/>
        </div>
  )
}
