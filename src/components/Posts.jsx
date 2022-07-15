import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';
import { imgUpload } from '../helpers/imgUpload';

export const Posts = () => {
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValue, handleChange] = useForm({
        place: '',
        email: '',
        message: '',
    })

    const { nombres, email, message } = formValue


    const handleImage = (e) => {
        const file = e.target.files[0]
        imgUpload(file)
            .then((resp) => {
                setPic(resp)
            })
            .catch((error) => { console.warn(error) });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <>


            <h2>Tus Publicaciones</h2>
            <Button onClick={handleShow}>Nueva publicación</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cuéntanos tus inquietudes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Lugar</Form.Label>
                            <Form.Control name="place" type="text" value={formValue.place} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comparte tu experiencia:</Form.Label>
                            <Form.Control name="posttext" as="textarea" rows={3} value={formValue.posttext} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Añadir foto</Form.Label>
                            <Form.Control type="file" size="sm" onChange={handleImage}/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Publicar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}
