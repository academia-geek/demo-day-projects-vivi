import { EditOutlined} from '@ant-design/icons';
import { Col } from "react-bootstrap";
import { auth } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { AdminHero } from "../../components/admin/AdminHero";
import {  AsideStyled2, CardStyled } from "../../styles/homeStyles";
import { listEventAsync } from "../../redux/actions/eventsAction";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Logo.png'

export const AdminHome = () => {
  const [profile, setProfile] = useState({});
  const { EventsList } = useSelector(store => store.eventos)
  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(listEventAsync());
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, []);

  return (
    <div>
      <div className="d-flex">
        <Col sm={9}>
        <Navbar bg="dark" style={{margin:"0px",padding:"0px"}}>
        <Container>
          <Navbar.Brand href="/admin/home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="ViVi logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
            <AdminHero />
        
        </Col>
        <Col sm={3} className="position-fixed end-0">
          <AsideStyled2>
            <h4 style={{color:"white", textAlign:"center"}}>Eventos Publicados</h4>
            {
              EventsList.map(event=>
                <CardStyled key={event.id}>
               <h6 style={{width:"90%"}}>{event.name}</h6>
               <Link to={`/detailItinerary/${event.id}`}>
               <EditOutlined style={{color:"#ffc947", fontWeight:"900"}} Hover-Reveal/>
               </Link>
                </CardStyled>              
                )
            }
          </AsideStyled2>
        </Col>
      </div>
      <Footer />
    </div>
  );
};
