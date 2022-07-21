import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import image from '../../assets/prueba/Line.png'
import { Dateg } from './Date'
import {EnvironmentOutlined} from '@ant-design/icons';
import { Button } from 'antd'
import { Form, Modal, Stack } from 'react-bootstrap'
import useForm from '../../hooks/useForm'
import { Rating } from '@mui/material'
import { auth } from '../../firebase/firebaseConfig'

export const CardActivite = ({k}) => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);
    const { id } = useParams()
    const{Activities}=useSelector(store=>store.schedule) 
    const dataAct=Activities.filter(m=>m.id==id)
    const a=k*1000
    console.log(a)
    const dataFinal=dataAct.filter(m=>m.dates ==a)
    useEffect(() => {
      const user = auth.currentUser;
      if (user) {
          setProfile(user);
      }
  }, []);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        // setBtn(true)
        // setTime(date.toLocaleDateString() + " " + hours + ":" + minutes)
    };
    const [formValue, handleChange, reset] = useForm({
      id: crypto.randomUUID(),
      place: '',
      posttext: '',
      rate: '',
  })
  const {  place, posttext, rate } = formValue
    // const Infopost = { id, place, posttext, rate, pic, time }
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(addPost(Infopost, userID))
    reset()
} 
    return (
    < div >
   
     {  
        dataFinal.map(m=>(
          <div style={{display:"flex", marginTop:"10px"}}>
            <div style={{display:"flex",width:"55vw"}}>
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
          <Button onClick={handleShow}>Comentar</Button>
          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Post</Modal.Title>
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
                        {/* <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Añadir foto</Form.Label>
                            <Form.Control type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" size="sm" onChange={handleImage} />
                        </Form.Group> */}
                        {/* <Button disabled={btnState} variant="success" type="submit" onClick={handleClose} style={{ display: "flex", margin: "0 auto" }}>
                            Publicar
                        </Button> */}
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
