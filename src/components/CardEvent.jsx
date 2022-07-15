
import { listEventAsync } from '../redux/actions/eventsAction'

import {  List } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux';


export const CardEvent = () => {
    const dispatch=useDispatch()
 
 
      const {EventsList} = useSelector(store => store.eventos)
      console.log(EventsList)
    //   const datadates=EventsList.map((m)=>{
    //   return m.date
    //    })
    // console.log(datadates)
    const filtro = EventsList.filter((ev) => {
        return ev.date.map((date) => { 
          return date.seconds;
        }).includes(1659052800);
      });
    console.log(filtro)
      useEffect(()=>{
        dispatch(listEventAsync())
    },[dispatch])
   
  return (
    <div>
                <List
    itemLayout="horizontal"
    dataSource={filtro}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          
          title={<a href="https://ant.design">{item.name}</a>}
        description={<article>{item.description}</article>}
        />
       
      </List.Item>
      )}
      />
    </div>
  )
}
