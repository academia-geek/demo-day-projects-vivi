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
import { cities } from "../data/cities";

export const OtherPosts = ({ userID }) => {
    const [profile, setProfile] = useState(null);
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState("");
    const [time, setTime] = useState("");
    const [btnState, setBtn] = useState(true);
    const dispatch = useDispatch();
    const { listaInfo } = useSelector((store) => store.info);
    const userData = listaInfo[0];

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
                className="d-flex justify-content-center mt-3"
                style={{ margin: "auto 40px" }}
            >
                <h2>Publicaciones</h2>
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
        </>
    );
};
