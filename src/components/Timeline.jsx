import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listAllPosts } from '../redux/actions/infoAction';
import { auth } from "../firebase/firebaseConfig";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import post from "../assets/carousel2.png";
import { Link } from "react-router-dom";
import { CONT } from "../styles/globalStyles";

export const Timeline = () => {
    const place = "Plaza San Pedro Claver, Cartagena de Indias";
    const dispatch = useDispatch()
    const { listaPosts } = useSelector(store => store.posts)
    const userData = listaPosts[0]

    useEffect(() => {
        dispatch(listAllPosts())
    }, [dispatch])

    return (
        <>
            <DivPosting>
                <Userbar>
                    <div>
                        <Avatar src="https://i.pravatar.cc/300" alt="avatar" />
                        <span>Melisa Mendoza</span>
                    </div>
                    <span>11/7/2022 16:34</span>
                </Userbar>
                <DivPost>
                    <div>
                        <img src={post} />
                    </div>
                    <div className="comment">
                        <div>
                            <Stack spacing={1}>
                                <Rating
                                    name="read-only"
                                    value={4}
                                    readOnly
                                />
                            </Stack>
                            <p>
                                La celebración fue muy divertida y bonita. Conocí grandes personas,
                                en especial una señora que me llevó a conocer la ciudad y degustar
                                comidas exquisitas.
                            </p>
                        </div>
                        <Link to={`/map/${place}`}>{place}</Link>
                    </div>
                </DivPost>
            </DivPosting>
            <CONT>{
                userData?.filter(i => i.id).map(i => (
                    <DivPosting>
                        <Userbar>
                            <div>
                                <div>
                                    <img src={i.photo} alt={i.name} style={{ width: "2rem", borderRadius: "100%" }} />
                                    <span>{i.name}</span>
                                </div>
                                <h5>{i.time}</h5>
                            </div>
                        </Userbar>
                        <DivPost>
                            <div>
                                <img src={i.pic} alt={i.place} />
                            </div>
                            <div className="comment">
                                <div>
                                    <Stack spacing={1}>
                                        <Rating
                                            name="read-only"
                                            value={i.rate}
                                            readOnly
                                        />
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
