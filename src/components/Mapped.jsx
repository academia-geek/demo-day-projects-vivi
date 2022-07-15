import { MapDiv } from "../styles/mapStyles";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export const Mapped = ({ dW, dH, py, op }) => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  return (
    <MapDiv style={{ padding: py }}>
      <Back
        className="back leaflet-bar leaflet-control"
        opacity={op}
        onClick={back}
      />
      <MapContainer
        center={{ lat: 4.6, lng: -74.08 }}
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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </MapDiv>
  );
};
