import React, { useState } from 'react';
import chat from '../assets/Chatbot.png'

export const Chatbot = () => {
    const [show, setShow] = useState("none")

    const handleClose = () => setShow("none");
    const handleShow = () => setShow("block");

    return (
        <>
            <div style={{display: `${show}`, position: "fixed", bottom: "4rem", right: "1rem", backgroundColor: "white", border: "2px solid black", borderRadius: "10px"}}>
                <div className='d-flex justify-content-between align-items-center px-3' style={{backgroundColor: "yellow", width:"300px", borderRadius: "10px 10px 0 0"}}>
                    <div className='d-flex align-items-center'>
                        <img style={{width: "24px", borderRadius: "100%", marginRight:"1rem"}} src="https://e7.pngegg.com/pngimages/567/860/png-clipart-woman-in-white-notched-lapel-suit-jacket-call-centre-customer-service-technical-support-customer-service-miscellaneous-microphone.png" alt="" />
                        <h5 className='m-0'>Viviana</h5>
                    </div>
                    <span onClick={handleClose} style={{cursor: "pointer"}}>X</span>
                </div>
                <div style={{width: "300px", height: "400px", borderRadius: "10px"}}>
                    
                </div>
            </div>

            <img style={{position: "fixed", bottom: "1rem", right: "1rem", width: "3rem", cursor: "pointer"}} src={chat} onClick={handleShow} alt="" />
        </>
    );
};
