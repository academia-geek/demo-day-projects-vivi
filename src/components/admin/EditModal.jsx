
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ButtonAdmi, InputStyled, UploadImg } from '../../styles/calendarStyle';
import { Button,  Form,  Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { editEventAsync } from '../../redux/actions/eventsAction';
import { imgUpload } from '../../helpers/imgUpload';
import Modal from "react-bootstrap/Modal";


export const Edit = ({ data }) => {

  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const [btn, SetBtn] = useState(true)
   const [pic, setPic] = useState("")
   const { EventsList } = useSelector(store => store.eventos)
 
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
      SetBtn(false)
    },

  };

  const handleClose = () => {
       setShow(false)
    SetBtn(false)
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

    dispatch(editEventAsync(formValue))
    setShow(false)

  };
  const onFinishFailed = (errorInfo) => {
    alert("La Información no se gurado correctamente")
  };



  return (

    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Modifica!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ marginTop: "-90px" }}
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
            <UploadImg {...props}  >
              <Button style={{ marginLeft: "10vw",color:"#000", border:'1px solid #000' }} icon={<UploadOutlined  style={{color:"#000"}}/>}>Click para agregar imagen</Button>
            </UploadImg>
            <ButtonAdmi style={{ marginLeft: "40%" }} htmlType="submit" disabled={btn}>
              Agregar </ButtonAdmi>
          </Form>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

    </div>
  )
}
