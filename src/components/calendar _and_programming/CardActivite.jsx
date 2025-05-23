import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import image from "../../assets/prueba/Line.png";
import { Dateg } from "./Date";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Form, Modal, Stack, Button } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { Rating } from "@mui/material";
import { auth } from "../../firebase/firebaseConfig";
import { imgUpload } from "../../helpers/imgUpload";
import { addPost, listAsync } from "../../redux/actions/infoAction";
import { LinkStyle } from "../../styles/calendarStyle";
import { ButtonLanding } from "../../styles/landingStyles";

export const CardActivite = ({ k, l }) => {
  const { id } = useParams()
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);
  const [pic, setPic] = useState("");
  const [time, setTime] = useState("");
  const [btnState, setBtn] = useState(true);
  const dispatch = useDispatch();
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const { Activities } = useSelector((store) => store.schedule);
  const { EventsList } = useSelector(store => store.eventos)
  const dataAct = Activities.filter((m) => m.id === id);
  const a = k * 1000;
  const dataFinal = dataAct.filter((m) => m.dates == a);
  const dataCity= EventsList.find((m )=> m.id == id)
  const city=dataCity.location
    
  useEffect(() => {
    dispatch(listAsync());
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, [dispatch]);

  const userID = profile?.uid;
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
    idp: crypto.randomUUID(),
    place: city,
    posttext: "",
    rate: "",
  });

  const { idp, place, posttext, rate } = formValue;
  const Infopost = {
    id: idp,
    place,
    posttext,
    rate,
    pic,
    time,
    photo: profile?.photoURL,
    name: profile?.displayName,
  };

  const handleSubmit = (e) => {
    console.log(Infopost);
    e.preventDefault();
    dispatch(addPost(Infopost, userID));
    reset();
  };

  return (
    <div>
      {dataFinal.map((m) => (
        <div style={{ display: "flex", marginTop: "10px", marginBottom: "20px" }} key={m.date}>
          <div style={{ display: "flex", width: "56vw", gap: "5px" }}>
            <Dateg k={m.date} />
            <img src={image} style={{ width: "5px", marginLeft: "5px" }} />
            <div style={{ display: "block", marginLeft: "10px" }}>
              <h3>{m.name}</h3>
              <h6
                style={{
                  color: "#8c8c8c",
                  marginTop: "-10px",
                  fontSize: "13px",
                }}
              >
                Organiza: {m.organizer}
              </h6>
              <div style={{ display: "flex", marginTop: "10px", alignItems: "center", gap: "5px" }}>
                <EnvironmentOutlined />
                <LinkStyle to={`/map/${city}`}>{city}</LinkStyle>
              </div>
              <a href={m.link} target="_blank">{m.description}</a>
            </div>
          </div>
          <ButtonLanding
            onClick={handleShow}
            style={{
              height: "40px",
              lineHeight: "0px",
              border: "2px solid var(--secondary-color)",
            }}
          >
            Comentar
          </ButtonLanding>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Lugar</Form.Label>
                  <Form.Control
                    name="place"
                    type="text"
                    value={city}
                    onChange={handleChange}
                    disabled
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
                  <Form.Label>¿Cómo calificarías la experiencia?</Form.Label>
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
        </div>
      ))}
    </div>
  );
};
