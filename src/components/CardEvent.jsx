
import { listEventAsync } from '../redux/actions/eventsAction'

import {  List } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux';


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
   
  return (
    <div>
    <List
    style={{marginTop:"80px",marginLeft:"80px",border:'1px solid rgba(255, 189, 41, 1)'}}
    itemLayout="horizontal"
    dataSource={filtro}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
        //  avatar={<Avatar src={item.image} />} 
        title={<a href="https://ant.design">{item.name}</a>}
        description={<article>{item.description}</article>}
        />
       
      </List.Item>
      )}
      />
    </div>
  )
}
