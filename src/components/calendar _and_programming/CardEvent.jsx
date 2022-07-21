import { listEventAsync } from '../../redux/actions/eventsAction'
import { HeartOutlined } from '@ant-design/icons';
import { Button, List } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export const CardEvent = ({ m }) => {
  const dispatch = useDispatch()
  const h = m + 86400000
  const { EventsList } = useSelector(store => store.eventos)
  const filtro = EventsList.filter((ev) => {
    return ev.date.map((date) => {
      return date.seconds;
    }).includes((h / 1000));
  });
  console.log(filtro)
  useEffect(() => {
    dispatch(listEventAsync())
  }, [dispatch])

  return (
    <div>
      <List
        style={{ marginTop: "80px", marginLeft: "80px", border: '1px solid rgba(255, 189, 41, 1)' }}
        itemLayout="horizontal"
        dataSource={filtro}
        locale={{ emptyText: 'No hay eventos programados para este día' }}
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
                  <Link to={`/programming/${item.id}`}>
                    <Button style={{ marginLeft: "20px" }} >Programación</Button>
                  </Link>
                </div>
              </div>
              <img src={item.img} alt="..cargando" style={{ width: "200px", marginLeft: "50px" }} />
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}
