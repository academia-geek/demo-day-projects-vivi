import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';

export const ContactEn = () => {
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
            <li onClick={handleShow}>Contact Us</li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tell us your issues</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Names*</Form.Label>
                            <Form.Control name="nombres" type="text" placeholder="Enter your name and last name" value={formValue.nombres} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control name="email" type="text" placeholder="Enter your email" value={formValue.email} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" placeholder="Type your message" rows={3}  value={formValue.message} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check required type="checkbox" label="I have read and accept the terms and conditions" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}
