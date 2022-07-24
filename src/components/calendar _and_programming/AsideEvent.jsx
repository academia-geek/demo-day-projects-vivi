import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../../redux/actions/eventsAction';
export const AsideEvent = ({id}) => {
    const dispatch=useDispatch()
const { EventsList } = useSelector((store) => store.eventos);
useEffect(() => {
    dispatch(listEventAsync());

  }, [dispatch]);
  const event=EventsList?.filter(item=> item.id ==id)
//  const event=[eventObj]
  
  return (
    <div >
        {
     event?.map( item =>
       <div style={{display:"flex"}}>
        <img  style={{width:"40%"}} src={item.img} alt="...cargando"  />
    <div style={{textAlign:'center',width:"40%"}}>
        <h6 style={{fontWeight:"800"}}>{item.name }</h6>
        <h6 style={{fontWeight:"100"}}>{item.location}</h6>
    </div>
    </div>
     ) }
    </div>
  )
}
