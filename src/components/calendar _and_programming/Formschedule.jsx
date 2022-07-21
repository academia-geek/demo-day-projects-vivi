import { Button, DatePicker, Form, Input, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScheduleAsync } from '../../redux/actions/scheduleAction';
import { ModalConfirm } from './Modal';
const { RangePicker } = DatePicker;

export const FormSchedule = () =>{ 
  const[date, SetDate]=useState()
  const[dates, SetDates]=useState()
 
  const [loadings, setLoadings] = useState([]);
  const [modal, setModal] = useState(false)
  const dispatch=useDispatch()
  const onChange = (value, dateString) => {
   SetDate(dateString)
  const date =value.format('YYYY-MM-DD')
       
    SetDates(new Date(date).getTime())
  };
  
  const onFinish = (values) => {
      console.log('Success:', values);
      const id = localStorage.getItem("id")
      const formValue = {
        id: id,
        date:date,
        dates:dates+86400000,
        name: values.name,
        organizer: values.Organizer,
        place: values.Place,
             }
             
             dispatch(addScheduleAsync(formValue))
    };
  
    const onFinishFailed = (errorInfo) => {
      alert("La Información no se gurado correctamente")
    };
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
  
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          setModal(true)
          return newLoadings;
        });
      }, 3000);
    };
  
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
        name="name"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <Input placeholder="Nombre de la actividad" allowClear  />
      </Form.Item>
      <Form.Item
       name="Organizer"
        rules={[{ required: true, message: 'Por Favor introduce quien organiza la actividad !' }]}
      >
        <Input placeholder="Nombre del organizador" allowClear  />
      </Form.Item>
      <Form.Item
       name="Place"
        rules={[{ required: true, message: 'Por Favor introduce donde se realizará la actividad!' }]}
      >
        <Input placeholder="Ubicacion de la actividad" allowClear  />
      </Form.Item>
  <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange}  />
      </Space>
      <div>
      <Button type="primary" htmlType="submit" loading={loadings[2]} onClick={() => enterLoading(2)}  >
          Agregar 
        </Button>
        {
                modal === true ? <ModalConfirm  /> : ''
            }

        </div>
   </Form>
);
  }
