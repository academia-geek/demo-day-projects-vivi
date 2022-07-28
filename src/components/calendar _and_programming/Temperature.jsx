import { useEffect, useState } from "react";
import { getWeather } from "../../helpers/getWeather";

export const Temperature = ({ location }) => {
  const [temp, setTemp] = useState({});

  useEffect(() => {
    getWeather(location).then((data) => {
      setTemp({
        temp: data.current.temp_c,
        icon: data.current.condition.icon,
      });
    });
  }, [location]);

  return (
    <div
      className="d-flex align-items-center justify-content-center gap-2 user-select-none"
      title={`Temperatura actual en ${location}`}
    >
      <span className="text-center h6 mt-2">{temp.temp}°C</span>
      <img src={temp.icon} alt="weather" width={30} />
    </div>
  );
};
