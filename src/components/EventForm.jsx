import { DatePicker, Form, Input, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

const onChange = (value, dateString) => {
    console.log('Rango de fecha: ', dateString);
   
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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <Input placeholder="Nombre del evento" allowClear  />
      </Form.Item>
  <Space direction="vertical" size={12}>
    <RangePicker
      
      format="YYYY-MM-DD"
      onChange={onChange}
      
    />
  </Space>
  <Button type="primary" htmlType="submit">
          Submit
        </Button>
  </Form>
);

