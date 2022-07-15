import { Button, DatePicker, Form, Input, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addEventAsync } from '../redux/actions/eventsAction';
const { RangePicker } = DatePicker;


export const EventForm = () =>{ 
  const dispatch=useDispatch()
  const datadate=[]
  const onChange = (value, dateString) => {
    console.log('Rango de fecha: ', dateString);
    const date1= dateString[0]
    const date2=dateString[1]
    const fechaInicio = new Date(date1).getTime();
    const fechaFin  = new Date(date2).getTime();
    const diff = ((fechaFin - fechaInicio)/(86400000))+1; 
    for(let i=1;i<=diff;i++){
      const fecha=fechaInicio+(86400000*i)
      const fechaIniciosiguiente= new Date(fecha)
      
      const count = datadate.push(fechaIniciosiguiente)
     
     }  
    
};
const onFinish = (values) => {
  console.log('Success:', values);
  const formValue={
    id:Math.random(),
    name:values.Eventname,
    description:values.Description,
    date:datadate
    }
  console.log(formValue.date)
  dispatch(addEventAsync(formValue))
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return(
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
        name="Eventname"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <Input placeholder="Nombre del evento" allowClear  />
      </Form.Item>
      <Form.Item
       name="Description"
        rules={[{ required: true, message: 'Por Favor introduce la descripción del evento !' }]}
      >
        <Input placeholder="Descripcion de la festividad" allowClear  />
      </Form.Item>
  <Space direction="vertical" size={12}>
    <RangePicker
     
      format="YYYY-MM-DD"
      onChange={onChange}
      
    />
  </Space>
  <Button type="primary" htmlType="submit" >
          Agregar
        </Button>
  </Form>
);
}
