import { Button, DatePicker, Form, Input, message, Space, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { imgUpload } from "../../helpers/imgUpload";
import { InboxOutlined } from "@ant-design/icons";
import { addEventAsync } from "../../redux/actions/eventsAction";
import { ButtonAntdStyled, InputStyled } from "../../styles/calendarStyle";
import { Paper } from "@mui/material";
import { AddLocation } from "../AddLocation";
import { ReactComponent as Location } from "../../assets/location.svg";

const { RangePicker } = DatePicker;
const datadate = [];

export const EventForm = () => {
  const dispatch = useDispatch();
  const [pic, setPic] = useState("");
  const [fileList, setFileList] = useState([]);
  const [loadings, setLoadings] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showMap = () => {
    handleShow();
  };

  const location = JSON.parse(window.localStorage.getItem("location"));

  if (window.location.reload) localStorage.removeItem("location");

  const onChange = (value, dateString) => {
    console.log("Rango de fecha: ", dateString);
    const date1 = dateString[0];
    const date2 = dateString[1];
    const fechaInicio = new Date(date1).getTime();
    const fechaFin = new Date(date2).getTime();
    const diff = (fechaFin - fechaInicio) / 86400000 + 1;
    for (let i = 1; i <= diff; i++) {
      const fecha = fechaInicio + 86400000 * i;
      const fechaIniciosiguiente = new Date(fecha);
      const count = datadate.push(fechaIniciosiguiente);
    }
  };

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange(info) {
      imgUpload(info.file.originFileObj)
        .then((resp) => {
          console.log(resp);
          setPic(resp);
        })
        .catch((error) => {
          console.warn(error);
        });
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} imagen cargada correctamente`);
        setFileList(1);
      } else if (status === "error") {
        message.error(
          `${info.file.name} no se cargo correctamente, intentalo de nuevo`
        );
      }
    },
  };

  const onFinish = (values) => {
    const formValue = {
      id: Math.random(),
      name: values.Eventname,
      description: values.Description,
      location: location,
      img: pic,
      date: datadate,
    };
    localStorage.removeItem("location");
    localStorage.setItem("id", formValue.id);
    dispatch(addEventAsync(formValue));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        window.location.href = "./Schedule";
        return newLoadings;
      });
    }, 2000);
  };

  return (
    <>
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
          rules={[
            {
              required: true,
              message: "Por favor introduce el nombre del evento",
            },
          ]}
        >
          <InputStyled
            style={{ marginTop: "100px" }}
            placeholder="Nombre del evento"
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="Description"
          rules={[
            {
              required: true,
              message: "Por favor introduce la descripción del evento",
            },
          ]}
        >
          <InputStyled placeholder="Descripcion de la festividad" allowClear />
        </Form.Item>
        <Form.Item
          name="Location"
          rules={[{ required: true, message: "Por favor introduce la ciudad" }]}
        >
          <ButtonAntdStyled
            onClick={showMap}
            icon={<Location className="location" />}
            className="w-100"
            disabled={location ? true : false}
          >
            {location ? location : "Ubicación"}
          </ButtonAntdStyled>
        </Form.Item>
        <Dragger
          {...props}
          style={{ width: "50vw", borderRadius: "10px" }}
          accept="image/png, image/jpeg, image/jpg"
          percent
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Clic o arrastre la imagen a esta área para cargarla.
          </p>
          <p className="ant-upload-hint">
             Soporte para carga única. Ingresa la imagen que represente el
            evento, esta se mostrara al usuario.
          </p>
        </Dragger>
        <Form.Item style={{ marginTop: "10px", marginLeft: "12vw" }}>
          <Space direction="vertical" size={12}>
            <RangePicker
              format="YYYY-MM-DD"
              onChange={onChange}
              style={{ borderRadius: "10px" }}
            />
          </Space>
        </Form.Item>

        <Button
          style={{
            marginLeft: "20vw",
            borderRadius: "10px",
            background: " #ffbd29",
          }}
          htmlType="submit"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          disabled={fileList.length === 0}
        >
          Agregar
        </Button>
      </Form>
      <AddLocation show={show} handleClose={handleClose} />
    </>
  );
};
