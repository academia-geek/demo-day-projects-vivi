import {  Button, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addScheduleAsync } from '../../redux/actions/scheduleAction';




export const ModalConfirm = ({data}) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value,setValue]=useState()
    const dispatch=useDispatch()

    const handleCancel = () => {
        setIsModalVisible(false);
        window.location.href = "./"
    };
        
   

     const handleOk = () => {
        dispatch(addScheduleAsync(data))
      setIsModalVisible(false);
      
      window.location.href = "./Schedule"
     
  };
  
  return (
   
    <div>
         <>
      
      <Modal style={{textAlign:"center"}}  visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
        <h5>Quieres agregar otra actividad al itinerario?</h5>        
        
      </Modal>
    </>
    </div>
  )
}
