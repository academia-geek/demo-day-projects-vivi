import React from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
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
          <div style={{display:"block"}}>
            <h3>{m.name}</h3>
            <h6 style={{color:"rgba(211, 205, 208, 0.8)"}}>{m.organizer}</h6>
          </div>
           
        )) 
     }
    </div >
  )
}
