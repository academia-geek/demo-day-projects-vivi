import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import image from '../../assets/prueba/Line.png'
import { EnvironmentOutlined } from '@ant-design/icons';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Tooltip, } from 'antd'
import { Dateg } from '../calendar _and_programming/Date';
import { deleteScheduleAsync } from '../../redux/actions/scheduleAction';
import { AddModal } from './AddModal';
export const CardActivite = ({ k }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const { Activities } = useSelector(store => store.schedule)
    const dataAct = Activities.filter(m => m.id === id)
    const a = k * 1000
    const dataFinal = dataAct.filter(m => m.dates === a)
    const handleDelete = (iud) => {
        alert('vamos a eliminar la actividad', iud)
        dispatch(deleteScheduleAsync(iud))
    }
    const handleEdit = (iud) => {
        setModal(true)
       
    }
    return (
        < div >
            <div>
                {
                    dataFinal.map(m => (

                        <div style={{ display: "flex", marginTop: "10px" }} key={m.iud}>
                            <div style={{ display: "flex", width: "30vw" }}>
                                <Dateg k={m.date} />
                                <img src={image} style={{ width: "5px", marginLeft: "5px" }} alt={m.name}/>
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
                                    <Button onClick={() => handleEdit(m.uid)} style={{ border: "none" }}>
                                        <FormOutlined style={{ fontSize: '20px', color: '#565252', marginTop: "10px" }} />
                                    </Button>
                                </Tooltip>
                                <br />
                                <Tooltip title={`Eliminar ${m.name}`} color={'#FFBD29'}>
                                    <Button onClick={() => handleDelete(m.iud)} style={{ border: "none" }}>
                                        <DeleteOutlined style={{ fontSize: '20px', color: '#565252', marginTop: "10px" }} />
                                    </Button>
                                </Tooltip>
                            </div>
                            {
                                modal === true ? <AddModal iud={m.iud} /> : ''
                            }
                        </div>

                    ))
                }

            </div >

        </div>
    )
}
