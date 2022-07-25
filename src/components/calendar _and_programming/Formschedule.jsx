import { Button, DatePicker, Form, Input, Space, Select } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScheduleAsync } from '../../redux/actions/scheduleAction';
import { AutoCompleteStyled, InputStyled } from '../../styles/calendarStyle';
import { ModalConfirm } from './Modal';
const { RangePicker } = DatePicker;

export const FormSchedule = () => {
  const [date, SetDate] = useState()
  const [dates, SetDates] = useState()
  const [link, SetLink] = useState()
  const [loadings, setLoadings] = useState([]);
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const { Option } = Select;

  const onWebsiteChange = (value) => {
    SetLink(value)
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,

  }));


  const onChange = (value, dateString) => {
    SetDate(dateString)
    const date = value.format('YYYY-MM-DD')

    SetDates(new Date(date).getTime())
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    const id = localStorage.getItem("id")
    const formValue = {
      iud: Math.random(),
      id: id,
      date: date,
      dates: dates + 86400000,
      name: values.name,
      organizer: values.Organizer,
      link: link,
      description: values.descriptionLink,
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
      style={{ marginLeft: "5vw" }}
    >

      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Por Favor introduce el nombre del evento!' }]}
      >
        <InputStyled placeholder="Nombre de la actividad" allowClear />
      </Form.Item>
      <Form.Item
        name="Organizer"
        rules={[{ required: true, message: 'Por Favor introduce quien organiza la actividad !' }]}
      >
        <InputStyled placeholder="Nombre del organizador" allowClear />
      </Form.Item>
      <Form.Item
        name="website"
        label="."
        tooltip="Enlace para reservar vuelo, hospedaje,comprar entradas"
        style={{ marginLeft: '-11vw', width: '100%' }}
        rules={[
          {
            required: true,
            message: 'Please input website!',
          }
        ]}
      >
        <AutoCompleteStyled options={websiteOptions} onChange={onWebsiteChange} placeholder="Link">
          <Input style={{ borderRadius: ' 10px' }} />
        </AutoCompleteStyled>
      </Form.Item>

      <Form.Item
        name="descriptionLink"
        style={{ borderRadius: '10px', marginLeft: '7vw', width: '100%' }}
        rules={[
          {
            required: true,
            message: 'Por favor selecciona una descripcion del link!',
          },
        ]}
      >
        <Select placeholder="selecciona una descripción del link " style={{ borderRadius: ' 10px' }}>
          <Option value="Adquiere tu entrada">Adquiere tu entrada</Option>
          <Option value="Reserva tu vuelo">Reserva tu vuelo</Option>
          <Option value="Reserve tu hospedaje">Reserve tu hospedaje</Option>
          <Option value="No te olvides visitar">No te olvides visitar</Option>
        </Select>
      </Form.Item>

      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChange} style={{ borderRadius: "10px", marginLeft: "15vw" }} />
      </Space>
      <div>
        <Button htmlType="submit" loading={loadings[2]} onClick={() => enterLoading(2)} style={{ marginLeft: "20vw", borderRadius: "10px", background: " #ffbd29", marginTop: "10px" }} >
          Agregar
        </Button>
        {
          modal === true ? <ModalConfirm /> : ''
        }

      </div>
    </Form>
  );
}
