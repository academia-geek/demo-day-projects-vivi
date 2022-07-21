import { MapDiv } from "../styles/mapStyles";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { useMapEvents, useMapEvent } from "react-leaflet/hooks";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getWeather } from "../helpers/getWeather";
import { Icon } from "leaflet";
import marker from "leaflet/dist/images/marker-icon.png";

const coordinates = [
  [6.29, -75.54],
  [1.21, -77.28],
  [7.88, -72.51],
];

function Location({ location }) {
  const [position, setPosition] = useState(null);
  const [index, setIndex] = useState(0);
  const coordinatesMapped = coordinates.map((coordinate) => {
    return coordinate;
  });

  console.log(coordinatesMapped);

  const map = useMapEvents({
    click() {
      if (index <= coordinatesMapped.length - 1) {
        setIndex(index + 1);
        map.flyTo(coordinatesMapped[index], 10);
      } else {
        setIndex(0);
        map.flyTo(location, 10);
      }
    },
  });

  console.log(index);
  console.log(coordinatesMapped.length);

  console.log(position);

  const getMarkers = () => {
    return (
      <>
        {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            position={coordinate}
            icon={
              new Icon({
                iconUrl: marker,
                className: "marker-icon",
                iconSize: [10, 18],
                iconAnchor: [2, 11],
                popupAnchor: [1, -34],
              })
            }
          >
            <Popup>
              <span>Nombre del evento</span>
            </Popup>
          </Marker>
        ))}
      </>
    );
  };

  useEffect(() => {
    if (location) {
      map.locate();
      map.flyTo(location, 10);
      setPosition(location);
    }
  }, [location]);

  return position === null ? null : (
    <>
      {getMarkers()}
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: marker,
            iconSize: [10, 18],
            iconAnchor: [2, 11],
            popupAnchor: [1, -34],
          })
        }
      >
        <Popup>
          <span>Tú estás aquí</span>
        </Popup>
      </Marker>
      <Marker
        position={location}
        icon={
          new Icon({
            iconUrl: marker,
            className: "marker-actually",
            iconSize: [10, 18],
            iconAnchor: [2, 11],
            popupAnchor: [1, -34],
          })
        }
      >
        <Popup>Nombre del evento linkeado</Popup>
      </Marker>
    </>
  );
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
      </MapContainer>
    </MapDiv>
  );
};
