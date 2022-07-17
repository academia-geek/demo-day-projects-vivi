
import { listEventAsync } from '../redux/actions/eventsAction'
import { HeartOutlined } from '@ant-design/icons';
import {  Button, List } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import image from '../assets/prueba/image3.png'
import { Programming } from '../containers/Programming';

export const CardEvent = ({m}) => {
    const dispatch=useDispatch()
     console.log(m)
      const {EventsList} = useSelector(store => store.eventos)
      console.log(EventsList)
        const filtro = EventsList.filter((ev) => {
        return ev.date.map((date) => { 
          return date.seconds;
        }).includes((m/1000));
      });
    console.log(filtro)
      useEffect(()=>{
        dispatch(listEventAsync())
    },[dispatch])
    const handleSubmit =({id})=>{
      <Programming m={id}/>
      alert("este es el id",id)
      window.location.href='/programming'
    }
   
  return (
    <div>
    <List
    style={{marginTop:"80px",marginLeft:"80px",border:'1px solid rgba(255, 189, 41, 1)'}}
    itemLayout="horizontal"
    dataSource={filtro}
    renderItem={(item) => (
      <List.Item>
      <div style={{display:"flex"}}>
        <div style={{width:"40vw",marginLeft:"10px"}}>
          <h2>{item.name}</h2>
          <article>{item.description}</article>
          <h6>{item.location}</h6>
          <div style={{marginTop:"5vw",marginLeft:"20px"}}>
          <HeartOutlined />
          <Link>
          <Button style={{marginLeft:"20px"}} >Programación</Button>
          </Link>
          </div>
          </div>
       <img src={image} alt="Cargando..." style={{width:"300px",marginLeft:"3px"}} />
       </div>
      </List.Item>
      )}
      />
    </div>
  )
}
