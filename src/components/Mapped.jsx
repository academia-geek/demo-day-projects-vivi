import { MapDiv } from "../styles/mapStyles";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../helpers/getWeather";

function Location({ location }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(location, 10);
    },
  });

  useEffect(() => {
    if (location) {
      map.flyTo(location, 10);
    }
  }, [location]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Tú estás aquí</Popup>
    </Marker>
  );
}

export const Mapped = ({ dW, dH, py, op, weather }) => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [location, setLocation] = useState({
    lat: 4.6,
    lng: -74.08,
  });

  useEffect(() => {
    if (weather.location) {
      setLocation({
        lat: weather.location.lat,
        lng: weather.location.lon,
      });
    }
  }, [weather.location]);

  return (
    <MapDiv style={{ padding: py }}>
      <Back
        className="back leaflet-bar leaflet-control"
        opacity={op}
        onClick={back}
      />
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={10}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={true}
        boxZoom={true}
        zoomControl={true}
        attributionControl={true}
        style={{ width: dW, height: dH, zIndex: "1" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors and ViVi'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Location location={location} />
      </MapContainer>
    </MapDiv>
  );
};
