import { MapDiv } from "../styles/mapStyles";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { useMapEvents, useMapEvent } from "react-leaflet/hooks";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getWeather } from "../helpers/getWeather";

function Location({ location }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    doubleClick() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom(), {
        animate: false,
      });
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

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}

export const Map = () => {
  const navigate = useNavigate();
  const animateRef = useRef(true);

  const { id } = useParams();

  const back = () => {
    navigate(-1);
  };

  const [location, setLocation] = useState({
    lat: 4.6,
    lng: -74.08,
  });

  useEffect(() => {
    if (id !== undefined) {
      getWeather(id).then((data) => {
        if (data.code === "ERR_BAD_REQUEST") {
          setLocation({
            lat: 4.6,
            lng: -74.08,
          });
        } else {
          setLocation({
            lat: data.location.lat,
            lng: data.location.lon,
          });
        }
      });
    } else {
      setLocation({
        lat: 4.6,
        lng: -74.08,
      });
    }
  }, [id]);

  return (
    <MapDiv style={{ padding: "65px 0 0 0" }}>
      <Back
        className="back leaflet-bar leaflet-control"
        opacity={1}
        onClick={back}
      />
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={10}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={false}
        boxZoom={true}
        zoomControl={true}
        attributionControl={true}
        style={{ width: "100vw", height: "90vh", zIndex: "1" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors and ViVi'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Location location={location} />
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
    </MapDiv>
  );
};
