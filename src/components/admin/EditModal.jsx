
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { InputStyled } from '../../styles/calendarStyle';
import { Button, DatePicker, Form, Input, message, Modal, Space, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { editEventAsync } from '../../redux/actions/eventsAction';
import { imgUpload } from '../../helpers/imgUpload';


export const Edit = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const dispatch = useDispatch()
  const [date, SetDate] = useState()
   const [loadings, setLoadings] = useState([]);
  const [pic, setPic] = useState("")
  const [fileList, setFileList] = useState([]);
  const { EventsList } = useSelector(store => store.eventos)
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange(info) {
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
    },
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataEvent = EventsList.find(element => element.id == data)

  const onFinish = (values) => {
       const formValue = {
      id: dataEvent.id,
      name: values.Eventname,
      description: values.Description,
      location: values.Location,
      img: pic,
      date: dataEvent.date
    }
    SetDate(formValue)
  
    
  };
  const onFinishFailed = (errorInfo) => {
    alert("La Información no se gurado correctamente")
  };

  const handleOk = () => {
    dispatch(editEventAsync(date))
    setIsModalVisible(false);
  };

  return (

    <div>
      <Modal style={{ textAlign: "center" }} title="Editar Información del evento" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

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
            defaultValue={dataEvent.name}
          >
            <InputStyled style={{ marginTop: "100px" }} placeholder={dataEvent.name} allowClear defaultValue={dataEvent.name} />
          </Form.Item>
          <Form.Item
            name="Description"
            defaultValue={dataEvent.description}
          >
            <InputStyled allowClear defaultValue={dataEvent.description} />
          </Form.Item>
          <Form.Item
            name="Location"
            defaultValue={dataEvent.location}

          >
            <InputStyled placeholder={dataEvent.location} allowClear defaultValue={dataEvent.location} />
          </Form.Item>
          <Dragger {...props} style={{ width: "30vw", borderRadius: "10px" }} accept='.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*' percent defaultValue={dataEvent.img}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Clic o arrastre la imagen a esta área para cargarla.</p>
            <p className="ant-upload-hint">
              Soporte para carga única. Ingresa la imagen que represente el evento, esta se mostrara al usuario.
            </p>
          </Dragger>
          <Button style={{ marginLeft: "20vw", borderRadius: "10px", background: " #ffbd29" }} htmlType="submit" >
            Agregar </Button>
        </Form>

      </Modal>

    </div>
  )
}
