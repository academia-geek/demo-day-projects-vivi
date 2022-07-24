import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../../redux/actions/eventsAction';
export const AsideEvent = ({id}) => {
    const dispatch=useDispatch()
const { EventsList } = useSelector((store) => store.eventos);
useEffect(() => {
    dispatch(listEventAsync());

  }, [dispatch]);
  const event=EventsList.find (item=> item.id ==id)
  const {name,location,img}=event
  console.log(name)
  return (
    <div style={{display:"flex"}}>
        <img  style={{width:"50%"}} src={img} alt="...cargando"  />
    <div style={{textAlign:'center',width:"50%"}}>
        <h6 style={{fontWeight:"800"}}>{name}</h6>
        <h6 style={{fontWeight:"100"}}>{location}</h6>
    </div>
    </div>
  )
}
