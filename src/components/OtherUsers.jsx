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
                </div>
                <div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h2>Información</h2>
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
        </>
    )
}