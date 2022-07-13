import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';

export const Contact = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValue, handleChange] = useForm({
        nombres: '',
        email: '',
        message: '',
    })

    const { nombres, email, message } = formValue

    const handleSubmit= (e) =>{
        e.preventDefault()
        window.location.href=(`mailto:sebas1997321@gmail.com?subject= Nombre: ${nombres} Correo: ${email}&body=${message}`)
        alert("enviando correo")
    }

    return (
        <>
            <li onClick={handleShow}>Contacto</li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cuéntanos tus inquietudes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombres y apellidos*</Form.Label>
                            <Form.Control name="nombres" type="text" placeholder="Escribe tu nombre y apellido" value={formValue.nombres} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico*</Form.Label>
                            <Form.Control name="email" type="text" placeholder="Ingresa tu correo" value={formValue.email} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control name="message" as="textarea" placeholder="Escribe tu mensaje" rows={3}  value={formValue.message} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check required type="checkbox" label="He leído y acepto los términos y condiciones" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}
