import { Paper } from '@mui/material';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  FontStyled2 } from '../styles/calendarStyle';
import logo from '../assets/Logo.png'

export const RegisterAdmi = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username === "admi" && values.password == "1234"){
       navigate('/admin/home')
    }
    else{
      alert ("usuario o contaseña incorrectos")
    }
      
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <FontStyled2>
      <Link to='/' >
      <img src={logo} style={{width:"60px",color:"white"}}/>
      </Link>
    <Form
      name="basic"
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span:6,
      }}
      initialValues={{
        remember: true,
      }}
     
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{marginTop:"18vw",color:"white"}}
    >
      <Form.Item
        style={{fontWeight:'600'}}
        label="Usuario"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Paper>
        <Input  />
        </Paper>
       
      </Form.Item>

      <Form.Item
      style={{fontWeight:'600'}}
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Paper>
        <Input.Password />
        </Paper>
      </Form.Item>
      <div style={{ textAlign:'center'}}>
       <h6>¿No tienes usuario Administartivo?</h6> 
       <Link to='/login/company'>
        <h6> Registrate</h6>
       </Link>  
       </div>
      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 11,
        }}
      >
        <Button htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </FontStyled2>
  );
};

