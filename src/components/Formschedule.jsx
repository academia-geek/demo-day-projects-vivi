import { Button, DatePicker, Form, Input, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

export const FormSchedule = () =>{ 
  const onChange = (value, dateString) => {

    console.log('dia y hora del evento ', dateString);
  };
  const onFinish = (values) => {
      console.log('Success:', values);
      const id = localStorage.getItem("id")
      const formValue = {
        id: id,
        name: values.name,
        organizer: values.Organizer,
        place: values.Place,
        date: datadate
      }
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
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
      <Button type="primary" htmlType="submit" >
          Agregar
        </Button>
   </Form>
);
  }
