import { Button, DatePicker, Form, Input, message, Space, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { imgUpload } from '../../helpers/imgUpload';
import { InboxOutlined } from '@ant-design/icons';
import { addEventAsync } from '../../redux/actions/eventsAction';
import App from './UploadImg';





const { RangePicker } = DatePicker;

const datadate = []

export const EventForm = () => {
  const dispatch = useDispatch()
  const [pic, setPic] = useState("")
  const [loadings, setLoadings] = useState([]);

  const onChange = (value, dateString) => {
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

  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  
    onChange(info) {
     console.log(info)
      const f =info.file.originFileObj
      console.log(f)
      imgUpload(info.file.originFileObj)
            .then((resp) => {
                console.log(resp)
                setPic(resp)
                            })
            .catch((error) => { console.warn(error) });
      const { status } = info.file;
  
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
 

  const onFinish = (values) => {
    const formValue = {
      id: Math.random(),
      name: values.Eventname,
      description: values.Description,
      location: values.Location,
      img:pic,
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

        window.location.href = "./Schedule"
        return newLoadings;
      });
    }, 2000);
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

        name="Eventname"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <Input style={{ marginTop: "100px" }} placeholder="Nombre del evento" allowClear />
      </Form.Item>
      <Form.Item
        name="Description"
        rules={[{ required: true, message: 'Por Favor introduce la descripción del evento !' }]}
      >
        <Input placeholder="Descripcion de la festividad" allowClear />
      </Form.Item>
      <Form.Item
        name="Location"
        rules={[{ required: true, message: 'Por Favor introduce la ciudad!' }]}
      >
        <Input placeholder="Ubicación" allowClear />
      </Form.Item>
      <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
 
      <Space direction="vertical" size={12}>
        <RangePicker
          format="YYYY-MM-DD"
          onChange={onChange}
        />
      </Space>

      <Button type="primary" htmlType="submit" loading={loadings[2]} onClick={() => enterLoading(2)} >
        Agregar </Button>

    </Form>
  );
}
