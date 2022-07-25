import { useState } from "react";
import { ReactComponent as Location } from "../assets/location.svg";
import { getWeather } from "../helpers/getWeather";
import {
  ButtonLocation,
  DivLocation,
  InputLocation,
} from "../styles/mapStyles";
import { Mapped } from "./Mapped";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { cities } from "../data/cities";

export const AddLocation = ({ show, handleClose }) => {
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    if (e.target.value.length >= 4) {
      const city = e.target.value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      getWeather(city).then((data) => {
        if (data.code === "ERR_BAD_REQUEST") {
          setWeather({});
        } else if (data.location.country === "Colombia") {
          setWeather(data);
        } else {
          setWeather({});
        }
      });
    }
  };

  const handleSubmit = () => {
    if (weather !== {}) {
      localStorage.setItem("location", JSON.stringify(weather.location.name));
      handleClose();
    }
  };

  const handleConfirmation = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás volver a cambiar la ubicación del evento!",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "var(--neutral-color)",
      cancelButtonText: "Cancelar",
      confirmButtonText: "¡Si, estoy seguro!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit();
      }
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <DivLocation>
          <Modal.Body>
            <form onSubmit={handleConfirmation}>
              <InputLocation
                type="text"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Ingresa la ubicación del evento
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </InputLocation>
              <span>
                <Location />
              </span>
            </form>
            <Mapped weather={weather} />
          </Modal.Body>
          <Modal.Footer>
            <ButtonLocation onClick={handleConfirmation}>
              Añadir ubicación
            </ButtonLocation>
          </Modal.Footer>
        </DivLocation>
      </Modal>
    </>
  );
};
