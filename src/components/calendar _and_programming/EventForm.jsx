import { Button, DatePicker, Form, Input, message, Space, Upload } from 'antd';
import { ReactComponent as Location } from "../../assets/location.svg";
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { imgUpload } from '../../helpers/imgUpload';
import { UploadOutlined } from '@ant-design/icons';
// import { InboxOutlined } from '@ant-design/icons';
import { addEventAsync } from '../../redux/actions/eventsAction';
import { ButtonAntdStyled, InputStyled } from '../../styles/calendarStyle';
import { AddLocation } from '../AddLocation';
const { RangePicker } = DatePicker;
const datadate = []

export const EventForm = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState()
  const [pic, setPic] = useState("")
  const [fileList, setFileList] = useState([]);
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

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // const { Dragger } = Upload;
  // const props = {
  //   name: 'file',
  //   multiple: true,
  //   // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  //   onChange(info) {
  //     setImage(info.file.originFileObj)
  //     const { status } = info.file;

  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //     }

  //     if (status === 'done') {
  //       message.success(`${info.file.name} imagen cargada correctamente`);
  //       setFileList(1)
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name}  cargo correctamente`);
  //     }
  //   },
  // };
  useEffect(() => {
    imgUpload(image)
      .then((resp) => {
        console.log(resp)
        setPic(resp)
      })
      .catch((error) => { console.warn(error) })
  }
    , [])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showMap = () => {
    handleShow();
  };

  const location = localStorage.getItem("location");

  if (window.location.reload) localStorage.removeItem("location");

  const onFinish = (values) => {
    const formValue = {
      id: Math.random(),
      name: values.Eventname,
      description: values.Description,
      location: values.location,
      img: pic,
      date: datadate
    }
    localStorage.setItem("id", formValue.id)
    console.log(formValue)
    localStorage.removeItem("location");
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
    }, 4000);
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
        name="location"
        rules={[{ required: true, message: 'Por Favor introduce la ubicación !' }]}
      >
        <InputStyled placeholder="Ubicación" allowClear />
      </Form.Item>

      {/* <Form.Item
        name="Location"
        rules={[{ required: true, message: "Por favor introduce la ciudad" }]}
      >
        <ButtonAntdStyled
          onClick={showMap}
          icon={<Location className="location" />}
          className="w-100"
          disabled={location === null ? false : true}
        >
          {location ? location : "Ubicación"}
        </ButtonAntdStyled>
      </Form.Item> */}

      <Upload {...props} style={{ marginLeft: "5vw" }} >
        <Button icon={<UploadOutlined />}>Click para agregar imagen</Button>
      </Upload>
      <Form.Item style={{ marginTop: "10px", marginLeft: "12vw" }}>
        <Space direction="vertical" size={12}>
          <RangePicker
            format="YYYY-MM-DD"
            onChange={onChange}
            style={{ borderRadius: "10px" }}
          />
        </Space>
      </Form.Item>

      <Button style={{ marginLeft: "20vw", borderRadius: "10px", background: " #ffbd29" }} htmlType="submit" loading={loadings[2]} onClick={() => enterLoading(2)} >
        Agregar </Button>
      <AddLocation show={show} handleClose={handleClose} />
    </Form>



  );
}
