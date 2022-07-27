import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { TAG, UserData, UserImg } from "../styles/globalStyles";
import { listAsync } from "../redux/actions/otherUserAction";

export const OtherUser = ({ userID }) => {
    const dispatch = useDispatch()
    const { otherUser } = useSelector(store => store.otherUser)
    const userData = otherUser[0]

    useEffect(() => {
        dispatch(listAsync(userID))
    }, [dispatch]);

    return (
        <>
            <div className='px-5 justify-content-between align-items-center' style={{ paddingTop: "111px" }}>
                <div className="d-flex mx-auto">
                    <UserImg src={userData?.profileImg} alt={userData?.Posts[0].name} />
                    <h2>{userData?.Posts[0].name}</h2>
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
                        <h5>Sitios a los que le gustaría ir:</h5>
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