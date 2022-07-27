import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, listAsync } from "../redux/actions/infoAction";
import { auth } from "../firebase/firebaseConfig";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useForm from "../hooks/useForm";
import { imgUpload } from "../helpers/imgUpload";
import btn from '../assets/green-add-button-12023.png'
import { cities } from "../data/cities";

export const AddPostButton = ({ userID }) => {
    const [profile, setProfile] = useState(null);
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState("");
    const [time, setTime] = useState("");
    const [btnState, setBtn] = useState(true);
    const { listaInfo } = useSelector((store) => store.info);
    const userData = listaInfo[0];
    const dispatch = useDispatch();

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setBtn(true);
        setTime(date.toLocaleDateString() + " " + hours + ":" + minutes);
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        imgUpload(file)
            .then((resp) => {
                console.log(resp);
                setPic(resp);
                setBtn(false);
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    const [formValue, handleChange, reset] = useForm({
        id: crypto.randomUUID(),
        place: "",
        posttext: "",
        rate: "",
    });

    const { id, place, posttext, rate } = formValue;
    const Infopost = {
        id,
        place,
        posttext,
        rate,
        pic,
        time,
        photo: userData?.profileImg,
        name: profile?.displayName,
        userID
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(Infopost, userID));
        reset();
        dispatch(listAsync());
    };

    useEffect(() => {
        dispatch(listAsync());
        const user = auth.currentUser;
        if (user) {
            setProfile(user);
        }
    }, [dispatch]);

    return (
        <>
            <img style={{ position: "fixed", bottom: "1rem", right: "1rem", width: "3rem", cursor: "pointer", zIndex: "99" }} src={btn} onClick={handleShow} alt="" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Select aria-label="Selecciona una ciudad" name="place"
                                type="text"
                                onChange={handleChange}>
                                <option value="">Selecciona una ciudad</option>
                                {cities.map(c =>
                                    <option key={c.id} name="place" type="text" value={c.name} onChange={handleChange}>{c.name}</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comparte tu experiencia:</Form.Label>
                            <Form.Control
                                name="posttext"
                                as="textarea"
                                rows={3}
                                value={formValue.posttext}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-center">
                            <Form.Label>¿Cómo calificarías el lugar?</Form.Label>
                            <Stack spacing={1} style={{ alignItems: "center" }}>
                                <Rating
                                    name="rate"
                                    value={formValue.rate}
                                    onChange={handleChange}
                                />
                            </Stack>
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Añadir foto</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                size="sm"
                                onChange={handleImage}
                            />
                        </Form.Group>
                        <Button
                            disabled={btnState}
                            variant="success"
                            type="submit"
                            onClick={handleClose}
                            style={{ display: "flex", margin: "0 auto" }}
                        >
                            Publicar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};
