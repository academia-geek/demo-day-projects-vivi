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
import Modal from "react-bootstrap/Modal";
import useForm from "../hooks/useForm";
import { imgUpload } from "../helpers/imgUpload";
import { CONT } from "../styles/globalStyles";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import { Avatar } from "@mui/material";
import { cities } from "../data/cities";
import { ButtonLocation } from "../styles/mapStyles";

export const Posts = ({ userID }) => {
  const [profile, setProfile] = useState(null);
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState("");
  const [time, setTime] = useState("");
  const [btnState, setBtn] = useState(true);
  const dispatch = useDispatch();
  const { listaInfo } = useSelector((store) => store.info);
  const userData = listaInfo[0];

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
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar esta publicación?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Eliminar`,
    }).then((result) => {
      if (result.isDenied) {
        dispatch(deletePost(id, userID));
        Swal.fire("La publicación se eliminará", "", "success");
      }
    });
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
      <div
        className="d-flex justify-content-between mt-3"
        style={{ margin: "auto 40px" }}
      >
        <h2>Tus Publicaciones</h2>
        <ButtonLocation onClick={handleShow}>Nuevo post</ButtonLocation>
      </div>

      <CONT>
        {userData?.Posts.filter((i) => i.id).map((i) => (
          <DivPosting>
            <Userbar>
              <div>
                <div className="user">
                  <Avatar src={i.photo} alt={i.name} />
                  <div className="d-flex flex-column">
                    <span>{i.name}</span>
                    <span className="time">{i.time}</span>
                  </div>
                </div>
              </div>
              <img
                src={cross}
                className="cross"
                onClick={() => handleDelete(i.id)}
              />
            </Userbar>
            <DivPost>
              <div className="imagen">
                <img src={i.pic} alt={i.place} />
              </div>
              <div className="comment">
                <div>
                  <Stack spacing={1}>
                    <Rating name="read-only" value={i.rate} readOnly />
                  </Stack>
                  <p>{i.posttext}</p>
                </div>
                <Link to={`/map/${i.place}`}>{i.place}</Link>
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
            <div className="d-flex justify-content-center">
              <ButtonLocation
                disabled={btnState}
                variant="success"
                type="submit"
                onClick={handleClose}
              >
                Publicar
              </ButtonLocation>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
