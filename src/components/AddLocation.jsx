import React from "react";
import { ReactComponent as Location } from "../assets/location.svg";
import {
  ButtonLocation,
  DivLocation,
  InputLocation,
} from "../styles/mapStyles";
import { Mapped } from "./Mapped";

export const AddLocation = () => {
  const dimensions = {
    width: "650px",
    height: "450px",
    padding: "30px 0",
    opacity: "0",
  };
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
        <Mapped
          dW={dimensions.width}
          dH={dimensions.height}
          py={dimensions.padding}
          op={dimensions.opacity}
        />
        <ButtonLocation>Añadir ubicación</ButtonLocation>
      </DivLocation>
    </>
  );
};
