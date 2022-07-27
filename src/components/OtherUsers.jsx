import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { auth } from "../firebase/firebaseConfig";
import edit from "../assets/Edit.png"
import cross from "../assets/delete.png"
import { CONT, EditIcon, TAG, UserData, UserImg } from "../styles/globalStyles";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';
import { addAge, addLike, addLiked, addPlace, deleteLike, deletePlace, deleteLiked, listAsync, updatePhoto } from "../redux/actions/infoAction";
import { imgUpload } from "../helpers/imgUpload";

export const OtherUser = ({ userID }) => {
    const dispatch = useDispatch()
    const { listaInfo } = useSelector(store => store.info)
    const userData = listaInfo[0]
    const [profile, setProfile] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImage = (e) => {
        const file = e.target.files[0];
        imgUpload(file)
            .then((resp) => {
                dispatch(updatePhoto(resp, userID))
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    const [formValue, handleChange, reset] = useForm({ age: '' })
    const [valueLike, handleChangeLike, resetLike] = useForm({ id: crypto.randomUUID(), like: '' })
    const [valuePlace, handleChangePlace, resetPlace] = useForm({ id: crypto.randomUUID(), place: '' })
    const [valueLiked, handleChangeLiked, resetLiked] = useForm({ id: crypto.randomUUID(), liked: '' })

    const handleAge = (e) => {
        dispatch(addAge(formValue.age, userID))
        reset()
        handleClose()
    }
    const handleSubmitLikes = (e) => {
        e.preventDefault()
        dispatch(addLike(valueLike, userID))
        resetLike()
    }
    const handleDeleteLikes = (id) => { dispatch(deleteLike(id, userID)) }

    const handleSubmitPlaces = (e) => {
        e.preventDefault()
        dispatch(addPlace(valuePlace, userID))
        resetPlace()
    }
    const handleDeletePlaces = (id) => { dispatch(deletePlace(id, userID)) }

    const handleSubmitLiked = (e) => {
        e.preventDefault()
        dispatch(addLiked(valueLiked, userID))
        resetLiked()
    }
    const handleDeleteLiked = (id) => { dispatch(deleteLiked(id, userID)) }

    useEffect(() => {
        dispatch(listAsync())
        const user = auth.currentUser;
        if (user) {
            setProfile(user);
        }
    }, [dispatch]);

    return (
        <>
            <div className='d-flex px-5 justify-content-between align-items-center' style={{ paddingTop: "111px" }}>
                <div className="d-flex mx-auto">
                    <UserImg src={userData?.profileImg} alt={profile?.displayName} />
                    <label for="file-input">
                        <EditIcon src={edit} alt="" />
                    </label>
                    <input
                        id="file-input"
                        type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                        onChange={handleImage}
                        style={{ display: "none" }}
                    />
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Tu Información</h2>
                        <img src={edit} alt="" onClick={handleShow} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4 gap-3">
                        <h5>Edad:</h5>
                        <UserData>
                            <TAG><h6>{userData?.edad}</h6></TAG>
                        </UserData>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4 gap-3">
                        <h5>Gustos:</h5>
                        <UserData>{
                            userData?.Gustos.filter(i => i.id).map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.like}</h6>
                                </TAG>
                            ))}
                        </UserData>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4 gap-3">
                        <h5>Sitios visitados:</h5>
                        <UserData>{
                            userData?.Visitados.filter(i => i.id).map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.place}</h6>
                                </TAG>
                            ))}
                        </UserData>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4 gap-3">
                        <h5>Sitios a los que me gustaría ir:</h5>
                        <UserData>{
                            userData?.Deseados.filter(i => i.id).map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.liked}</h6>
                                </TAG>
                            ))}
                        </UserData>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tu Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { e.prevent.Default() }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control name="age" type="number" placeholder="Escribe tu edad" value={formValue.age} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                    <Form onSubmit={handleSubmitLikes}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gustos</Form.Label>
                            <Form.Control name="like" type="text" placeholder="Ingresa una actividad" value={valueLike.like} onChange={handleChangeLike} />
                        </Form.Group>
                        <CONT>{
                            userData?.Gustos.filter(i => i.id).map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.like}</h6><img src={cross} style={{ width: "1rem", cursor: "pointer", borderRadius: "100%" }} onClick={() => handleDeleteLikes(i.id)} alt="" />
                                </TAG>
                            ))}
                        </CONT>
                    </Form>
                    <Form onSubmit={handleSubmitPlaces}>
                        <Form.Group className="mb-3">
                            <Form.Label>Sitios visitados</Form.Label>
                            <Form.Control name="place" type="text" placeholder="Ingresa un lugar" value={valuePlace.place} onChange={handleChangePlace} />
                        </Form.Group>
                        <CONT>{
                            userData?.Visitados.filter(i => i.id).map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.place}</h6><img src={cross} style={{ width: "1rem", cursor: "pointer", borderRadius: "100%" }} onClick={() => handleDeletePlaces(i.id)} alt="" />
                                </TAG>
                            ))}
                        </CONT>
                    </Form>
                    <Form onSubmit={handleSubmitLiked}>
                        <Form.Group className="mb-3">
                            <Form.Label>Sitios a los que me gustaría ir</Form.Label>
                            <Form.Control name="liked" type="text" placeholder="Ingresa un lugar" value={valueLiked.liked} onChange={handleChangeLiked} />
                        </Form.Group>
                        <CONT>{
                            userData?.Deseados.filter(i => i.id).map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.liked}</h6><img src={cross} style={{ width: "1rem", cursor: "pointer", borderRadius: "100%" }} onClick={() => handleDeleteLiked(i.id)} alt="" />
                                </TAG>
                            ))}
                        </CONT>
                    </Form>
                    <Button variant="success" className="d-flex mx-auto mt-3" onClick={handleAge}>Guardar Cambios</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}