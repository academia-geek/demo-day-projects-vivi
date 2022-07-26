import { MapDiv } from "../styles/mapStyles";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getWeather } from "../helpers/getWeather";
import { Icon } from "leaflet";
import marker from "leaflet/dist/images/marker-icon.png";
import { places } from "../data/Places";

const coordinates = [
  // [6.29, -75.54],
  // [1.21, -77.28],
  // [7.88, -72.51],
];

function Location({ location }) {
  const [position, setPosition] = useState(null);
  const [index, setIndex] = useState(0);
  const coordinatesMapped = coordinates.map((coordinate) => {
    return coordinate;
  });

  const map = useMapEvents({
    click() {
      if (index <= coordinatesMapped.length - 1) {
        setIndex(index + 1);
        map.flyTo(coordinatesMapped[index], 8);
      } else {
        setIndex(0);
        map.flyTo(location, 8);
      }
    },
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

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
        <Popup>{location.name}</Popup>
      </Marker>
    </>
  );
}

export const Map = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const back = () => {
    navigate(-1);
  };

  const [location, setLocation] = useState({
    lat: 4.6,
    lng: -74.08,
  });

  useEffect(() => {
    const place = places.find((p) => p.name === id);

    if (place) {
      setLocation({
        name: place.name,
        lat: place.lat,
        lng: place.lon,
      });
    } else if (id !== undefined || id !== place.name) {
      getWeather(id).then((data) => {
        if (data.code === "ERR_BAD_REQUEST") {
          setLocation({
            lat: 4.6,
            lng: -74.08,
          });
        } else {
          setLocation({
            name: data.location.name,
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
