import { List } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../redux/actions/eventsAction'
import {  useParams } from 'react-router-dom'

export const Programming = () => {
    const { id } = useParams()
  
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(listEventAsync())
    },[dispatch])
    const {EventsList} = useSelector(store => store.eventos)
    console.log(EventsList)
    const data =EventsList.filter(m=>m.id==id)
    const[date]=data
   
  return (
    <div>
               
          <List
    itemLayout="horizontal"
    dataSource={date.date}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
        title={<a href="https://ant.design">{item.seconds}</a>}
         
        />
      </List.Item>
    )}
  />
    </div>
  )
}
