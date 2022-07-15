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
import { addLikes, deleteLikes, listLikes } from "../redux/actions/gustosAction";
import { addPlaces, deletePlaces, listPlaces } from "../redux/actions/visitadosAction";
import { addLiked, deleteLiked, listLiked } from "../redux/actions/deseadosAction";

export const User = () => {
    const dispatch = useDispatch()
    const { listaLikes } = useSelector(store => store.gustos)
    const { listaPlaces } = useSelector(store => store.visitados)
    const { listaLiked } = useSelector(store => store.deseados)
    const [profile, setProfile] = useState(null);
    const [userID, setUID] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [valueLike, handleChangeLike, resetLike] = useForm({ id: crypto.randomUUID(), like: '' })
    const { id, like } = valueLike
    const formLikes = { id, like, userID }

    const [valuePlace, handleChangePlace, resetPlace] = useForm({ id: crypto.randomUUID(), place: '' })
    const { id:idp, place } = valuePlace
    const formPlaces = { id, place, userID }

    const [valueLiked, handleChangeLiked, resetLiked] = useForm({ id: crypto.randomUUID(), liked: '' })
    const { id:idl, liked } = valueLiked
    const formLiked = { id, liked, userID }

    console.log(listaPlaces)
    console.log(listaLikes)
    console.log(listaLiked)
    


    const handleSubmitLikes = (e) => {
        e.preventDefault()
        console.log("entre a gustos")
        dispatch(addLikes(formLikes))
        resetLike()
    } 
    const handleDeleteLikes = (id) => { dispatch(deleteLikes(id)) }

    const handleSubmitPlaces = (e) => {
        e.preventDefault()
        console.log("entre a visitados")
        dispatch(addPlaces(formPlaces))
        resetPlace()
    } 
    const handleDeletePlaces = (id) => { dispatch(deletePlaces(id)) }

    const handleSubmitLiked = (e) => {
        e.preventDefault()
        console.log("entre a deseados")
        dispatch(addLiked(formLiked))
        resetLiked()
    } 
    const handleDeleteLiked = (id) => { dispatch(deleteLiked(id)) }
    
    useEffect(() => {
        // dispatch(listLikes())
        const user = auth.currentUser;
        if (user) {
            setProfile(user);
            setUID(user.uid)
        }
    }, []);

    return (
        <>
            <div className='d-flex p-5 justify-content-around'>
                <UserImg src={profile?.photoURL} alt={profile?.displayName} />
                <EditIcon src={edit} alt="" />
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Tu Información</h2>
                        <img src={edit} alt="" onClick={handleShow} />
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
                    {/* <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control name="age" type="number" placeholder="Escribe tu edad" value={formValue.age} onChange={handleChange} />
                        </Form.Group>
                    </Form> */}
                    <Form onSubmit={handleSubmitLikes}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gustos</Form.Label>
                            <Form.Control name="like" type="text" placeholder="Ingresa una actividad" value={valueLike.like} onChange={handleChangeLike} />
                       </Form.Group>
                        <CONT>{
                            listaLikes.map(i => (
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
                            listaPlaces.map(i => (
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
                            listaLiked.map(i => (
                                <TAG key={i.id}>
                                    <h6>{i.liked}</h6><img src={cross} style={{ width: "1rem", cursor: "pointer", borderRadius: "100%" }} onClick={() => handleDeleteLiked(i.id)} alt="" />
                                </TAG>
                            ))}
                        </CONT>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}
