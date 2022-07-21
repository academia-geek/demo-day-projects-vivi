import { DatePicker, Form, Modal, Space } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { InputStyled } from '../../styles/calendarStyle';

export const Edit = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value,setValue]=useState()
    const dispatch=useDispatch()
    const { EventsList } = useSelector(store => store.eventos)
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const[date, SetDate]=useState()
    const[dates, SetDates]=useState()
   
    const [loadings, setLoadings] = useState([]);
    const [modal, setModal] = useState(false)
    
    const onChange = (value, dateString) => {
     SetDate(dateString)
    const date =value.format('YYYY-MM-DD')
         
      SetDates(new Date(date).getTime())
    };
    
    const onFinish = (values) => {
        console.log('Success:', values);
        const id = localStorage.getItem("id")
        // const formValue = {
        //   iud:Math.random(),
        //   id: id,
        //   date:date,
        //   dates:dates+86400000,
        //   name: values.name,
        //   organizer: values.Organizer,
        //   place: values.Place,
        //        }
               
            //    dispatch(addScheduleAsync(formValue))
      };
      const onFinishFailed = (errorInfo) => {
        alert("La Información no se gurado correctamente")
      };
    
//     const handleInputChange = (target) => {
//         console.log(target.target.defaultValue)
//       setValue(target.target.defaultValue)  
//        }
//     console.log(data)
//   const dataDetail=commentData.find((l)=>l.id==data)
//   console.log(dataDetail)
   
     const handleOk = () => {
    //   dispatch (editCommentAsync(formValue))
      setIsModalVisible(false);
     
  };
  
  return (
   
    <div>
        
      
      <Modal style={{textAlign:"center"}} title="Editar Información del evento" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="on"
    style={{marginLeft:"5vw"}}
    >
  
    <Form.Item
        name="name"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <InputStyled placeholder="Nombre de la actividad" allowClear  />
      </Form.Item>
      <Form.Item
       name="Organizer"
        rules={[{ required: true, message: 'Por Favor introduce quien organiza la actividad !' }]}
      >
        <InputStyled placeholder="Nombre del organizador" allowClear  />
      </Form.Item>
      <Form.Item
       name="Place"
        rules={[{ required: true, message: 'Por Favor introduce donde se realizará la actividad!' }]}
      >
        <InputStyled placeholder="Ubicacion de la actividad" allowClear  />
      </Form.Item>
  <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} style={{borderRadius:"10px",marginLeft:"15vw"}} />
      </Space>
      </Form>
      </Modal>
      
   
   
    </div>
  )
}
