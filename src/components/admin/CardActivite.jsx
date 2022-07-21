import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import image from '../../assets/prueba/Line.png'
import { EnvironmentOutlined } from '@ant-design/icons';
import { DeleteOutlined, FormOutlined, CarryOutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Divider, List, Tooltip, Card, } from 'antd'
import { Dateg } from '../calendar _and_programming/Date';
export const CardActivite = ({ k }) => {
    const { id } = useParams()
    const { Activities } = useSelector(store => store.schedule)
    const dataAct = Activities.filter(m => m.id == id)
    const a = k * 1000
    const dataFinal = dataAct.filter(m => m.dates == a)
    const handleDelete = (id) => {
        alert('vamos a eliminar el evento')
        //   const filter= Activities.filter(m=>m.id == id)
        //   filter.forEach(element => dispatch(deleteScheduleAsync(element.id)))
       

    }
    const handleEdit = (id) => {
        // setDatos(id)
        // setModal(true)
    }
    return (
        < div >

            {
                dataFinal.map(m => (
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <div style={{ display: "flex", width: "30vw" }}>
                            <Dateg k={m.date} />
                            <img src={image} style={{ width: "5px", marginLeft: "5px" }} />
                            <div style={{ display: "block", marginLeft: "10px" }}>
                                <h3>{m.name}</h3>
                                <h6 style={{ color: "rgba(211, 205, 208, 0.8)", marginTop: "-10px", fontSize: "13px" }}>Organiza: {m.organizer}</h6>
                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <EnvironmentOutlined />
                                    <h6 style={{ marginLeft: "7px" }}>{m.place}</h6>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: "30vw" }}>
                            <Tooltip title={`Editar la informacion de ${m.name}`} color={'#FFBD29'}>
                                <Button onClick={() => handleEdit(m.id)} style={{ border: "none" }}>
                                    <FormOutlined style={{ fontSize: '20px', color: '#565252', marginTop: "10px" }} />
                                </Button>
                            </Tooltip>
                            <br />
                            <Tooltip title={`Eliminar ${m.name}`} color={'#FFBD29'}>
                                <Button onClick={() => handleDelete(m.id)} style={{ border: "none" }}>
                                    <DeleteOutlined style={{ fontSize: '20px', color: '#565252', marginTop: "10px" }} />
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
