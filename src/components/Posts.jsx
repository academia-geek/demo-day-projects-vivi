import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from "../firebase/firebaseConfig";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import cross from "../assets/delete.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';
import { imgUpload } from '../helpers/imgUpload';
import { CONT } from '../styles/globalStyles';
import { DivPost, DivPosting, Userbar } from '../styles/postingStyles';
import { addPost, deletePost, listAsync } from '../redux/actions/infoAction';

export const Posts = ({userID}) => {
    const [profile, setProfile] = useState(null);
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState("")
    const [time, setTime] = useState("")
    const dispatch = useDispatch()
    const { listaInfo } = useSelector(store => store.info)
    const userData = listaInfo[0]

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImage = (e) => {
        const file = e.target.files[0]
        imgUpload(file)
            .then((resp) => {
                setPic(resp)
            })
            .catch((error) => { console.warn(error) });
    }

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()    

    const [formValue, handleChange, reset] = useForm({
        id: crypto.randomUUID(),
        place: '',
        posttext: '',
        rate: '',
    })

    const { id, place, posttext, rate } = formValue
    const Infopost = { id, place, posttext, rate, pic, time }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTime(date.toLocaleDateString() + " " + hours + ":" + minutes)
        dispatch(addPost(Infopost, userID))
        reset()
    }

    const handleDelete = (id) => {
        dispatch(deletePost(id, userID))
    }

    useEffect(() => {
        dispatch(listAsync())
        const user = auth.currentUser;
        if (user) {
            setProfile(user);
        }
    }, [dispatch])

    return (
        <>
            <div className='d-flex justify-content-between p-4'>
                <h2>Tus Publicaciones</h2>
                <Button onClick={handleShow}>Nuevo post</Button>
            </div>

            <CONT>{
                userData?.Posts.filter(i => i.id).map(i => (
                    <DivPosting>
                        <Userbar>
                            <div>
                                <img src={profile?.photoURL} alt={profile?.displayName} style={{ width: "2rem" }} />
                                <span>{profile?.displayName}</span>
                            </div>
                            <span>{i.time}</span>
                            <img src={cross} style={{ width: "1rem", cursor: "pointer", borderRadius: "100%" }} onClick={() => handleDelete(i.id)} alt="" />
                        </Userbar>
                        <DivPost>
                            <div>
                                <img src={i.pic} />
                            </div>
                            <div className="comment">
                                <Stack spacing={1}>
                                    <Rating
                                        name="read-only"
                                        value={i.rate}
                                        readOnly
                                    />
                                </Stack>
                                <p>{i.posttext}</p>
                                <a>{i.place}</a>
                            </div>
                        </DivPost>
                    </DivPosting>
                ))}
            </CONT>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo post</Modal.Title>
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
                        <Form.Group className="mb-3">
                            <Form.Label>¿Cómo calificarías el lugar?</Form.Label>
                            <Form.Control name="rate" type="number" min="1" max="5" value={formValue.rate} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Añadir foto</Form.Label>
                            <Form.Control type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" size="sm" onChange={handleImage} />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={handleClose} style={{display: "flex", margin: "0 auto"}}>
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
