import { Divider, List } from 'antd'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../redux/actions/eventsAction'
import {  useParams } from 'react-router-dom'
import { listScheduleAsync } from '../redux/actions/scheduleAction'
import { CardActivite } from '../components/calendar _and_programming/CardActivite'
import { TittleProgramming } from '../components/calendar _and_programming/TittleProgramming'
import {  Col } from "react-bootstrap";
import { TittleStyle } from '../styles/calendarStyle';
import { SiderCalendar } from '../components/calendar _and_programming/Sider';
import image from '../assets/prueba/image3.png'
import { Paper } from '@mui/material'



const dataActivities = []
export const Programming = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listEventAsync())
        dispatch(listScheduleAsync())
    }, [dispatch])
    const { EventsList } = useSelector(store => store.eventos)
    console.log(EventsList)
    const data = EventsList.filter(m => m.id == id)
    const [date] = data
    const { Activities } = useSelector(store => store.schedule)
    console.log(Activities)
    const dataAct = Activities.filter(m => m.id == id)
    console.log(dataAct)

    return (
        <div>
      <div className="d-flex">
        <Col sm={9}>
        {
            data?.map(item=>(
             <Paper elevación={12} style={{display:"flex",marginTop:"90px",marginLeft:'50px'}}>
                <img src={image} alt="publicidad" style={{width:"300px",borderRadius:"10px",marginLeft:"30px"}} />
                <div style={{textAlign:"center",marginLeft:"200px",marginTop:"20px"}}>
                  <h4>{item.name}</h4>
                  <article>{item.description}</article>
                  <a>{item.location}</a>
                </div>

             </Paper>
            ))
        }       
        
        <List
               style={{marginTop:"80px",marginLeft:"80px"}}
               itemLayout="horizontal"
                dataSource={date?.date}
                renderItem={(item) => (
                    <>
                    <Divider orientation="right"><TittleProgramming k={item.seconds} /></Divider>
                    <List.Item  >
                                                          
                            <CardActivite k={item.seconds} />
                       
                    </List.Item>
                    </>
                )}
            />
         
         
        </Col>
        <Col sm={3}>
          <div style={{ height: "100vw", background: " #565252", marginTop: "-10px", width: '20vw', marginLeft: "4.9vw" }}>
            <TittleStyle>CONOCE COLOMBIA</TittleStyle>
          </div>
          <SiderCalendar/>
        </Col>
      </div>
    </div>
       
          
            
            
       
    )
}
