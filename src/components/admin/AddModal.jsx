import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import { DatePicker, Form, Input, Space, Select } from 'antd';
import { editScheduleAsync } from '../../redux/actions/scheduleAction';
import { AutoCompleteStyled, InputStyled, ButtonAdmi, } from '../../styles/calendarStyle';




export const AddModal = ({ iud }) => {

    const [link, SetLink] = useState()
    const [loadings, setLoadings] = useState([]);
    const [modal, setModal] = useState(false)
    const { Activities } = useSelector(store => store.schedule)
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

    const dataActivity = Activities.find(element => element.iud == iud)
    const onFinish = (values) => {
        console.log('Success:', values);
        const formValue = {
            iud: dataActivity.iud,
            id: dataActivity.id,
            date: dataActivity.date,
            dates: dataActivity.dates,
            name: values.name,
            organizer: values.Organizer,
            link: link,
            description: values.descriptionLink,
        }

        dispatch(editScheduleAsync(formValue))

    };
    const handleClose = () => {
        setModal(false)

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
                setModal(false)
                return newLoadings;
            });
        }, 2000);
    };

    return (
        <div>

            <Modal show={modal} onHide={handleClose}>
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
                        <div>
                            <ButtonAdmi htmlType="submit" loading={loadings[2]} onClick={() => enterLoading(2)} style={{ marginLeft: "20vw", borderRadius: "10px", background: " #ffbd29", marginTop: "10px" }} >
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
