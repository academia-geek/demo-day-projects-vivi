import { Button, DatePicker, Form, Input, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

const onChange = (value, dateString) => {
    console.log('Rango de fecha: ', dateString);
   
};
const onFinish = (values) => {
    console.log('Success:', values);
    localStorage.setItem('EventData',JSON.stringify(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
export const EventForm = () => (
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
        name="username"
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
