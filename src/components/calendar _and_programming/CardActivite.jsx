import React from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import image from '../../assets/prueba/Line.png'
import { Dateg } from './Date'

export const CardActivite = ({k}) => {
    const { id } = useParams()
    const{Activities}=useSelector(store=>store.schedule) 
    const dataAct=Activities.filter(m=>m.id==id)
    const a=k*1000
    console.log(a)
    const dataFinal=dataAct.filter(m=>m.dates ==a)
    return (
    < div>
   
     {  
        dataFinal.map(m=>(
          <div style={{display:"flex", marginTop:"10px"}}>
           <Dateg k={m.date}/>
            <img src={image} style={{width:"5px",marginLeft:"5px"}}/>
          <div style={{display:"block", marginLeft:"10px"}}>
            <h3>{m.name}</h3>
            <h6 style={{color:"rgba(211, 205, 208, 0.8)"}}>Organiza: {m.organizer}</h6>
            
           
          </div>
          </div> 
        )) 
     }
    </div >
  )
}
