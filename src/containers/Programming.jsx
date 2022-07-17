import { List } from 'antd'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../redux/actions/eventsAction'
import {  useParams } from 'react-router-dom'
import { listScheduleAsync } from '../redux/actions/scheduleAction'
import { CardActivite } from '../components/calendar _and_programming/CardActivite'
import { TittleProgramming } from '../components/calendar _and_programming/TittleProgramming'

const dataActivities=[]
export const Programming = () => {
    const { id } = useParams()
   
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(listEventAsync())
        dispatch(listScheduleAsync())
    },[dispatch])
    const {EventsList} = useSelector(store => store.eventos)
    console.log(EventsList)
    const data =EventsList.filter(m=>m.id==id)
    const[date]=data
 const{Activities}=useSelector(store=>store.schedule)   
 console.log(Activities)
 const dataAct=Activities.filter(m=>m.id==id)
 console.log(dataAct)

  return (
    <div>
               
          <List
    itemLayout="horizontal"
    dataSource={date?.date}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
        title={<h6 style={{textAlign:"right",marginTop:"80px"}}>{item.seconds}</h6>}     
        />
        <TittleProgramming k={item.seconds}/>
        <CardActivite k={item.seconds}/>
      </List.Item>
    )}
  />
    </div>
  )
}
