import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPost, deletePost, listAsync } from "../redux/actions/infoAction";
import { auth } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import cross from "../assets/delete.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useForm from "../hooks/useForm";
import { imgUpload } from "../helpers/imgUpload";
import { CONT } from "../styles/globalStyles";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import { Avatar } from "@mui/material";
import btn from '../assets/green-add-button-12023.png'

export const Chatbot = () => {
    const [show, setShow] = useState("none")
 

    const handleClose = () => setShow("none");
    const handleShow = () => setShow("block");
   

    return (
        <>
            <img style={{ position: "fixed", bottom: "1rem", right: "1rem", width: "3rem", cursor: "pointer" }} src={btn} onClick={handleShow} alt="" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Lugar</Form.Label>
                            <Form.Control
                                name="place"
                                type="text"
                                value={formValue.place}
                                onChange={handleChange}
                            />
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