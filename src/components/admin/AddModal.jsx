import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import { Form, } from 'antd';
import { editScheduleAsync } from '../../redux/actions/scheduleAction';
import { InputStyled, ButtonAdmi, } from '../../styles/calendarStyle';




export const AddModal = ({ iud }) => {

    const [modal, setModal] = useState(true)
    const { Activities } = useSelector(store => store.schedule)
    const dispatch = useDispatch()
    const dataActivity = Activities.find(element => element.iud === iud)
    const onFinish = (values) => {

        const formValue = {
            iud: dataActivity.iud,
            id: dataActivity.id,
            date: dataActivity.date,
            dates: dataActivity.dates,
            name: values.name,
            organizer: values.Organizer,
            link: dataActivity.link,
            description: dataActivity.description,
        }

        dispatch(editScheduleAsync(formValue))
        setModal(false)
    };
    const handleClose = () => {
        setModal(false)

    };
    const onFinishFailed = (errorInfo) => {
        alert("La Información no se gurado correctamente")
    };

    return (
        <div>

            <Modal show={modal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center" }}>Por favor ingresa todos los campos</Modal.Title>
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
                        <div>
                            <ButtonAdmi htmlType="submit" style={{ marginLeft: "15vw" }} >
                                Agregar
                            </ButtonAdmi>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    )
}
