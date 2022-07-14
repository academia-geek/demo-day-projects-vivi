import React from "react";
import { ReactComponent as Location } from "../assets/location.svg";
import {
  ButtonLocation,
  DivLocation,
  InputLocation,
} from "../styles/mapStyles";
import { Mapped } from "./Mapped";

export const AddLocation = () => {
  return (
    <>
      <DivLocation>
        <div>
          <InputLocation
            type="text"
            placeholder="Ingresa la ubicación del evento..."
          />
          <span>
            <Location />
          </span>
        </div>
        <Mapped />
        <ButtonLocation>Añadir ubicación</ButtonLocation>
      </DivLocation>
    </>
  );
};
