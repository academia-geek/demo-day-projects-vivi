import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listAllPosts, listAsync } from "../redux/actions/infoAction";
import { auth } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import cross from "../assets/delete.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CONT } from "../styles/globalStyles";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import { Avatar } from "@mui/material";

export const OtherPosts = ({ userID }) => {
    const dispatch = useDispatch();
    const { listaPosts } = useSelector((store) => store.posts);
    const userData = listaPosts[0];

    useEffect(() => {
        dispatch(listAllPosts());
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
                {userData?.filter((i) => i.userID === userID).map((i) => (
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
