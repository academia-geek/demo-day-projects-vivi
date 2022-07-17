import { List } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEventAsync } from '../redux/actions/eventsAction'

export const Programming = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(listEventAsync())
    },[dispatch])
    const {EventsList} = useSelector(store => store.eventos)
    console.log(EventsList)
  return (
    <div>
          {/* <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
        title={<a href="https://ant.design">{item.title}</a>}
         
        />
      </List.Item>
    )}
  /> */}
    </div>
  )
}
