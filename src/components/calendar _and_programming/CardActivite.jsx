import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import image from '../../assets/prueba/Line.png'
import { Dateg } from './Date'
import {EnvironmentOutlined} from '@ant-design/icons';
import { Form, Modal, Stack,Button } from 'react-bootstrap'
import useForm from '../../hooks/useForm'
import { Rating } from '@mui/material'
import { auth } from '../../firebase/firebaseConfig'
import { imgUpload } from '../../helpers/imgUpload'
import {  addPost, listAsync } from '../../redux/actions/infoAction'

export const CardActivite = ({k}) => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);
  const [pic, setPic] = useState("")
  const [time, setTime] = useState("")
  const [btnState, setBtn] = useState(true);
  const { id } = useParams()
  const dispatch=useDispatch()
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  const { Activities } = useSelector(store => store.schedule)
  const dataAct = Activities.filter(m => m.id == id)
  const a = k * 1000
  console.log(a)
  const dataFinal = dataAct.filter(m => m.dates == a)
  useEffect(() => {
    dispatch(listAsync());
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, [dispatch]);
  const userID=profile?.uid
  console.log(userID)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setBtn(true)
        setTime(date.toLocaleDateString() + " " + hours + ":" + minutes)
    };

    const handleImage = (e) => {
      const file = e.target.files[0]
      console.log(file)
      imgUpload(file)
          .then((resp) => {
              console.log(resp)
              setPic(resp)
              setBtn(false)
          })
          .catch((error) => { console.warn(error) });
  }
    const [formValue, handleChange, reset] = useForm({
      idp: crypto.randomUUID(),
      place: '',
      posttext: '',
      rate: '',
  })
  const { idp, place, posttext, rate } = formValue
  const Infopost = { idp, place, posttext, rate, pic, time,photo: profile?.photoURL,
    name: profile?.displayName, }
   
  const handleSubmit = (e) => {
    console.log(Infopost)
    e.preventDefault()
       dispatch(addPost(Infopost, userID))
    reset()
} 
    return (
    < div >
   
     {  
        dataFinal.map(m=>(
          <div style={{display:"flex", marginTop:"10px"}}>
            <div style={{display:"flex",width:"56vw"}}>
           <Dateg k={m.date}/>
            <img src={image} style={{width:"5px",marginLeft:"5px"}}/>
          <div style={{display:"block", marginLeft:"10px"}}>
            <h3>{m.name}</h3>
            <h6 style={{color:"rgba(211, 205, 208, 0.8)",marginTop:"-10px",fontSize:"13px"}}>Organiza: {m.organizer}</h6>
            <div style={{display:"flex",marginTop:"10px"}}>
            <EnvironmentOutlined />
            <h6 style={{marginLeft:"7px"}}>{m.place}</h6>
            </div>
            </div>
          </div>
          <Button onClick={handleShow} style={{height:"30px"}}>Comentar</Button>
          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Lugar</Form.Label>
                            <Form.Control name="place" type="text" value={m.place} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comparte tu experiencia:</Form.Label>
                            <Form.Control name="posttext" as="textarea" rows={3} value={formValue.posttext} onChange={handleChange} />
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
                            <Form.Control type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" size="sm" onChange={handleImage} />
                        </Form.Group>
                        <Button disabled={btnState} variant="success" type="submit" onClick={handleClose} style={{ display: "flex", margin: "0 auto" }}>
                            Publicar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
          </div> 
        )) 
     }
    </div >
  )
}
