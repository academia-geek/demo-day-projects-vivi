import React, { useEffect } from 'react'
import { Paper } from '@mui/material'
import { DeleteOutlined,FormOutlined,CarryOutOutlined } from '@ant-design/icons';
import { Button, Card, List, Tooltip } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEventAsync, listEventAsync } from '../../redux/actions/eventsAction';
import { Footer } from '../../components/Footer';
import { deleteScheduleAsync } from '../../redux/actions/scheduleAction';
export const DetailEvents = () => {
    const dispatch=useDispatch()
    const { EventsList } = useSelector(store => store.eventos)
    useEffect(() => {
        dispatch(listEventAsync())
      }, [dispatch])
      const handleDelete = (id)=>{
        alert('vamos a eliminar el evento')
        dispatch(deleteEventAsync(id))
        
        dispatch(deleteScheduleAsync(id))
  
    }
    const handleEdit=(id)=>{
      // setDatos(id)
      // setModal(true)
  }

  return (
    <div style={{paddingTop:"100px"}}>
      <List
        style={{ paddingTop: "10px",width:"70vw",marginLeft:"15vw" }}
        
        dataSource={EventsList}
        locale={{ emptyText: 'No hay eventos que mostrar' }}
        emptyText='no'
        renderItem={(item) => (
          <Paper  elevation={12}>
          <Card style={{border: '1px solid rgba(255, 189, 41, 1)',marginTop:"10px"}}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "40vw", marginLeft: "10px" }}>
                <h2>{item.name}</h2>
                <article>{item.description}</article>
                <h6>{item.location}</h6>
             
              </div>
              
              <img src={item.img} alt="..cargando" style={{ width: "200px", marginLeft: "50px" ,height:'200px'}} />
            <div style={{marginTop:"50px",height:'100px',marginLeft:"5vw"}}>
            <Link to={`/itinerarydetails/${item.id}`}>
            <Tooltip title="Mostrar detalles" color={'#FFBD29'}>
              <Button style={{border:"none"}}>
            <CarryOutOutlined style={{ fontSize: '20px', color: '#FFBD29' }} />
            </Button>
            </Tooltip>
            </Link>
            <br/>
            <Tooltip title="Editar" color={'#FFBD29'}>
            <Button onClick={()=>handleEdit(item.id)} style={{border:"none"}}>
            <FormOutlined style={{ fontSize: '20px', color: '#FFBD29' ,marginTop:"10px"}}/>
            </Button>
              </Tooltip>
              <br/>  
            <Tooltip title="Borrar" color={'#FFBD29'}>
            <Button onClick={()=>handleDelete(item.id)} style={{border:"none"}}>
            <DeleteOutlined style={{ fontSize: '20px', color: '#FFBD29',marginTop:"10px" }}/>
            </Button>
            </Tooltip>
            </div>
            </div>
          </Card>
          </Paper>
        )}
      />
      <Footer/>
        </div>
  )
}
