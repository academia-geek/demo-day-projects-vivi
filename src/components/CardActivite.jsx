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
    console.log(dataFinal)
  return (
    <>
     {
        dataFinal.map(m=>(
            <h1>{m.name}</h1>
        ))
     }
    </>
  )
}
