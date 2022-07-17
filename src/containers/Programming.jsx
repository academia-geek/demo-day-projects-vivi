import { List } from 'antd'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../redux/actions/eventsAction'
import {  useParams } from 'react-router-dom'
import { listScheduleAsync } from '../redux/actions/scheduleAction'
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
//    date.map((m)=>{
//     const datej=(m.seconds).format('YYYY-MM-DD')
//     console.log(datej)
//     const count = dataActivities.push(datej)
//    })
//    console.log(dataActivities)
  return (
    <div>
               
          <List
    itemLayout="horizontal"
    dataSource={dataAct}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
        title={<h6 style={{textAlign:"end",marginTop:"80px"}}>{(item.date)}</h6>}
               
        />
        {/* <h6>{item.organizer}</h6>
        <h6>{item.name}</h6>
        <h6>{item.placee}</h6> */}
      </List.Item>
    )}
  />
    </div>
  )
}
