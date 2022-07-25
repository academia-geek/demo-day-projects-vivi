import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../../redux/actions/eventsAction';
export const AsideEvent = ({ id }) => {
    const dispatch = useDispatch()
    const { EventsList } = useSelector((store) => store.eventos);
    useEffect(() => {
        dispatch(listEventAsync());

    }, [dispatch]);
    const event = EventsList?.filter(item => item.id == id)

    return (
        <div >
            {
                event?.map(item =>
                    <div style={{ display: "flex", marginLeft: "5%" }}>
                        <div style={{ textAlign: 'center', width: "50%", marginLeft: "5%" }}>
                        <h6 style={{ fontWeight: "100" }}>{item.location}</h6>
                        </div>
                    </div>
                )}
        </div>
    )
}
