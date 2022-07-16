import { useState } from "react";
import { ReactComponent as Location } from "../assets/location.svg";
import { getWeather } from "../helpers/getWeather";
import {
  ButtonLocation,
  DivLocation,
  InputLocation,
} from "../styles/mapStyles";
import { Mapped } from "./Mapped";

export const AddLocation = () => {
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    if (e.target.value.length >= 4) {
      getWeather(e.target.value).then((data) => {
        if (data.code === "ERR_BAD_REQUEST") {
          setWeather({});
        } else {
          setWeather(data);
        }
      });
    }
  };
  
  const dimensions = {
    width: "650px",
    height: "450px",
    padding: "30px 0",
    opacity: "0",
  };

  return (
    <>
      <DivLocation>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputLocation
            type="text"
            placeholder="Ingresa la ubicación del evento..."
            onChange={handleChange}
          />
          <span>
            <Location />
          </span>
        </form>
        <Mapped
          dW={dimensions.width}
          dH={dimensions.height}
          py={dimensions.padding}
          op={dimensions.opacity}
          weather={weather}
        />
        <ButtonLocation>Añadir ubicación</ButtonLocation>
      </DivLocation>
    </>
  );
};
