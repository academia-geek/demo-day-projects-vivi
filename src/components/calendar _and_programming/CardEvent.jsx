import { listEventAsync } from "../../redux/actions/eventsAction";
import Icon, { HeartOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/prueba/image3.png";
import {
  addToFavoriteAsync,
  getFavoriteAsync,
  removeFromFavoriteAsync,
} from "../../redux/actions/favoriteAction";
import { EventBottom } from "../../styles/calendarStyle";
import { auth } from "../../firebase/firebaseConfig";

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

export const CardEvent = ({ m }) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const h = m + 86400000;
  const { EventsList } = useSelector((store) => store.eventos);
  const { favorites } = useSelector((store) => store.favorites);
  const filtro = EventsList.filter((ev) => {
    return ev.date
      .map((date) => {
        return date.seconds;
      })
      .includes(h / 1000);
  });
  console.log(filtro);
  useEffect(() => {
    dispatch(listEventAsync());
  }, [dispatch]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
    dispatch(getFavoriteAsync());
  }, [dispatch]);

  const favoritesId = favorites
    .filter((fav) => fav.id)
    .map((fav) => fav.favorites)
    .map((fav) => fav);

  const handleFavorite = (id) => {
    dispatch(addToFavoriteAsync(id));
  };

  console.log(favorites);
  console.log(favoritesId);

  return (
    <div>
      <List
        style={{
          marginTop: "80px",
          marginLeft: "80px",
          border: "1px solid rgba(255, 189, 41, 1)",
        }}
        itemLayout="horizontal"
        dataSource={filtro}
        locale={{ emptyText: "No hay eventos programados para este día" }}
        emptyText="no"
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: "flex" }}>
              <div style={{ width: "40vw", marginLeft: "10px" }}>
                <h2>{item.name}</h2>
                <article>{item.description}</article>
                <h6>{item.location}</h6>
                <EventBottom>
                  {favoritesId?.includes(item.id) ? (
                    <HeartIcon
                      className="heart"
                      onClick={() => handleFavorite(item.id)}
                    />
                  ) : (
                    <HeartOutlined
                      className="heart"
                      onClick={() => handleFavorite(item.id)}
                    />
                  )}
                  <Link to={`/programming/${item.id}`}>
                    <Button>Programación</Button>
                  </Link>
                </EventBottom>
              </div>
              <img
                src={image}
                alt="Cargando..."
                style={{ width: "300px", marginLeft: "3px" }}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
