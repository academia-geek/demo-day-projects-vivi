import React from 'react'
import {ClockCircleOutlined} from '@ant-design/icons';

export const Dateg = ({k}) => {
const fecha = new Date(k).getTime()
const fechf=new Date(fecha)
let hour=fechf.getHours()
let minutes=fechf.getMinutes()
let hours = `${hour}:${minutes}`
  return (
    <div style={{width:"4vw",textAlign:"center"}}>
      <ClockCircleOutlined />
    <h5 >{hours}</h5>
    </div>
  )
}
