import { MapDiv } from "../styles/mapStyles";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "leaflet/dist/images/marker-icon.png";

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
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: marker,
        })
      }
    >
      <Popup>
        <span>Tú estás aquí</span>
      </Popup>
    </Marker>
  );
}

export const Mapped = ({ weather }) => {
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
    <MapDiv style={{ padding: "30px 0" }}>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={10}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={true}
        boxZoom={true}
        zoomControl={true}
        attributionControl={true}
        style={{ width: "650px", height: "450px", zIndex: "1" }}
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
