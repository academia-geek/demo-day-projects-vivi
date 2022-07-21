import { Modal } from 'antd';
import React, { useState } from 'react'

export const ModalConfirm = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleCancel = () => {
        setIsModalVisible(false);
        window.location.href = "./"
    };
    const handleOk = () => {
        setIsModalVisible(false);
        window.location.href = "./Schedule"
    };
    return (
        <div>
            <>
                <Modal style={{ textAlign: "center" }} visible={isModalVisible} cancelText={'No'} onOk={handleOk} onCancel={handleCancel}>
                    <h5>Quieres agregar otra actividad al itinerario?</h5>
                </Modal>
            </>
        </div>
    )
}
