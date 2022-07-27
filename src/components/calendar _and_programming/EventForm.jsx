import { Button, DatePicker, Form, message, Space, Upload, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { imgUpload } from '../../helpers/imgUpload';
import { UploadOutlined } from '@ant-design/icons';
import { addEventAsync } from '../../redux/actions/eventsAction';
import { ButtonAdmi, InputStyled, UploadImg } from '../../styles/calendarStyle';
import { cities } from "../../data/cities";
import { Option } from 'antd/lib/mentions';
import { SettingsRemote } from '@mui/icons-material';
const { RangePicker } = DatePicker;
const datadate = []

export const EventForm = () => {
  const dispatch = useDispatch()
  const [pic, setPic] = useState("")
 const [btnState, setBtn] = useState(true);
  const [loadings, setLoadings] = useState([]);
  const onChange = (value, dateString) => {
    setBtn(false)
    console.log('Rango de fecha: ', dateString);
    const date1 = dateString[0]
    const date2 = dateString[1]
    const fechaInicio = new Date(date1).getTime();
    const fechaFin = new Date(date2).getTime();
    const diff = ((fechaFin - fechaInicio) / (86400000)) + 1;
    for (let i = 1; i <= diff; i++) {
      const fecha = fechaInicio + (86400000 * i)
      const fechaIniciosiguiente = new Date(fecha)
      const count = datadate.push(fechaIniciosiguiente)
    }
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
          imgUpload(info.file.originFileObj)
        .then((resp) => {
          console.log(resp)
          setPic(resp)
        })
        .catch((error) => { console.warn(error) })

      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
  };

 

  const onFinish = (values) => {
       const formValue = {
      id: Math.random(),
      name: values.Eventname,
      description: values.Description,
      location: values.cite,
      img: pic,
      date: datadate
    }
    localStorage.setItem("id", formValue.id)
    dispatch(addEventAsync(formValue))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        message.success("Evento cargado correctamente");
        window.location.href = "./Schedule"
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
      style={{ marginLeft: "5vw", marginTop: "-90px" }}
    >
      <Form.Item
        name="Eventname"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <InputStyled style={{ marginTop: "100px" }} placeholder="Nombre del evento" allowClear />
      </Form.Item>
      <Form.Item
        name="Description"
        rules={[{ required: true, message: 'Por Favor introduce la descripción del evento !' }]}
      >
        <InputStyled placeholder="Descripcion de la festividad" allowClear />
      </Form.Item>

      <Form.Item
        name="cite"
        style={{ borderRadius: '10px', marginLeft: '7vw', width: '100%' }}
        rules={[
          {
            required: true,
            message: 'Por favor selecciona una ciudad',
          },
        ]}
      >
        <Select placeholder="Selecciona una ciudad " style={{ borderRadius: ' 10px' }}>
          {cities.map(c =>
            <Option value={c.name}>{c.name}</Option>
          )}
        </Select>
      </Form.Item>
      <UploadImg {...props}  >
        <Button style={{ marginLeft: "15vw" }} icon={<UploadOutlined />}>Click para agregar imagen</Button>
      </UploadImg>
      <Form.Item style={{ marginTop: "10px", marginLeft: "12vw" }}>
        <Space direction="vertical" size={12}>
          <RangePicker
            format="YYYY-MM-DD"
            onChange={onChange}
            style={{ borderRadius: "10px" }}
          />
        </Space>
      </Form.Item>
      <ButtonAdmi style={{marginLeft:"35%"}} htmlType="submit"  disabled={btnState} loading={loadings[2]} onClick={() => enterLoading(2)} >
        Agregar </ButtonAdmi>
    </Form>



  );
}
