import React, { useState } from 'react';
import chat from '../../assets/Chatbot.png'
import { Chatlog1, Chatlog2 } from '../../styles/globalStyles';

export const ChatbotEn = () => {
    const [show, setShow] = useState("none")
    const [selected1, setSelected1] = useState("")
    const [justify, setJustify] = useState("space-between")
    const [show2, setShow2] = useState("block")
    const [show3, setShow3] = useState("none")
    const [show4, setShow4] = useState("none")
    const [respuesta, setRespuesta] = useState("")

    const handleClose = () => setShow("none");
    const handleShow = () => setShow("block");
    const selecting = ({ target }) => {
        let selected = target.innerHTML
        setShow2("none")
        setSelected1(selected)
        if (selected=="Show me events close to date"){
            setRespuesta("¡You're lucky! We have the following events coming up:")
        } else if (selected=="I want to make public an event"){
            setRespuesta("¡Great! We are glad that you consider us... ")
        } else {
            setRespuesta("¿What if you join our community?... ")
        } 
        setShow3("block")

        setTimeout(function mostrarRespuesta() {
            setShow4("block")
        }, 2000)

        setJustify("unset")
    }

    return (
        <>
            <div style={{ display: `${show}`, position: "fixed", bottom: "4rem", right: "1rem", backgroundColor: "white", borderRadius: "10px" }}>
                <div className='d-flex justify-content-between align-items-center px-3 py-2' style={{ backgroundColor: "#FFBD29", width: "300px", borderRadius: "10px 10px 0 0" }}>
                    <div className='d-flex align-items-center'>
                        <img style={{ width: "24px", borderRadius: "100%", marginRight: "1rem" }} src="https://e7.pngegg.com/pngimages/567/860/png-clipart-woman-in-white-notched-lapel-suit-jacket-call-centre-customer-service-technical-support-customer-service-miscellaneous-microphone.png" alt="" />
                        <h6 className='m-0'>Viviane</h6>
                    </div>
                    <span onClick={handleClose} style={{ cursor: "pointer" }}>X</span>
                </div>
                <div className='d-flex flex-column justify-content-between p-3' style={{ width: "300px", height: "400px" }}>
                    <Chatlog1>
                        ¡Hi! Welcome to ViVi. ¿How can I help you?
                    </Chatlog1>
                    <Chatlog2 style={{display: `${show3}`}}>
                        {selected1}
                    </Chatlog2>
                    <Chatlog1 style={{display: `${show4}`}}>
                        {respuesta}
                    </Chatlog1>
                    <div className='mt-3 d-flex flex-column align-items-end'>
                        <Chatlog2 style={{ display: `${show2}`, cursor: "pointer" }} onClick={selecting}>
                            Show me events close to date
                        </Chatlog2>
                        <Chatlog2 style={{ display: `${show2}`, cursor: "pointer" }} onClick={selecting}>
                            I want to make public an event
                        </Chatlog2>
                        <Chatlog2 style={{ display: `${show2}`, cursor: "pointer" }} onClick={selecting}>
                            ¿Where to start?
                        </Chatlog2>
                    </div>
                </div>
            </div>

            <img style={{ position: "fixed", bottom: "1rem", right: "1rem", width: "3rem", cursor: "pointer" }} src={chat} onClick={handleShow} alt="" />
        </>
    );
};
