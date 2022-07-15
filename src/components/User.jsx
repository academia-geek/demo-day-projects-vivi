import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import edit from "../assets/Edit.png"
import { EditIcon, UserData, UserImg } from "../styles/globalStyles";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';

export const User = () => {
    const [profile, setProfile] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValue, handleChange] = useForm({
        age: '',
        likes: '',
        places: '',
        likedplaces: '',
    })

    const { age, likes, places, likedplaces } = formValue

    const handleSubmit= (e) =>{
        e.preventDefault()
    }

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setProfile(user);
        }
    }, []);

    console.log(profile)

    return (
        <>
            <div className='d-flex p-5 justify-content-around'>
                <UserImg src={profile?.photoURL} alt={profile?.displayName} />
                <EditIcon src={edit} alt=""/>
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Tu Información</h2>
                        <img src={edit} alt="" onClick={handleShow}/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5>Edad:</h5>
                        <UserData>

                        </UserData>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5>Gustos:</h5>
                        <UserData>

                        </UserData>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5>Sitios visitados:</h5>
                        <UserData>

                        </UserData>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5>Sitios a los que me gustaría ir:</h5>
                        <UserData>

                        </UserData>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tu Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control name="age" type="number" placeholder="Escribe tu edad" value={formValue.age} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gustos</Form.Label>
                            <Form.Control name="likes" type="text" placeholder="Ingresa tu correo" value={formValue.likes} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sitios visitados</Form.Label>
                            <Form.Control name="places" type="text" placeholder="Ingresa tu correo" value={formValue.likes} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sitios a los que me gustaría ir</Form.Label>
                            <Form.Control name="likedplaces" type="text" placeholder="Ingresa tu correo" value={formValue.likes} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Guardar cambios
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}
