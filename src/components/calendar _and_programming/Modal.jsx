import {  Button, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addScheduleAsync } from '../../redux/actions/scheduleAction';




export const ModalConfirm = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
        const handleCancel = () => {
        setIsModalVisible(false);
        window.location.href = "./"
    };
          const handleOk = () => {
        
      setIsModalVisible(false);
      
      window.location.href = "./Schedule"
     
  };
  
  return (
   
    <div>
         <>
      
      <Modal style={{textAlign:"center"}}  visible={isModalVisible}  cancelText={'No'} onOk={handleOk} onCancel={handleCancel}>
        <h5>Quieres agregar otra actividad al itinerario?</h5>        
        
      </Modal>
    </>
    </div>
  )
}
