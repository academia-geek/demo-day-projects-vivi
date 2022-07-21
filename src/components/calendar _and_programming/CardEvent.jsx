import { listEventAsync } from "../../redux/actions/eventsAction";
import { HeartOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoriteAsync,
  getFavoriteAsync,
  removeFromFavoriteAsync,
} from "../../redux/actions/favoriteAction";
import { DivEvent, EventBottom, HeartIcon } from "../../styles/calendarStyle";

export const CardEvent = ({ m }) => {
  const dispatch = useDispatch();
  const h = m + 86400000;
  const { EventsList } = useSelector((store) => store.eventos);
  const { favorites } = useSelector((store) => store.favorites);
  const favoritesId = favorites[0];
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
    dispatch(getFavoriteAsync());
  }, [dispatch]);

  const handleFavorite = (id) => {
    const favoritesFind = favoritesId?.favorites.find((fav) => fav.id === id);
    favoritesFind
      ? dispatch(removeFromFavoriteAsync(id))
      : dispatch(addToFavoriteAsync(id));
  };

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
              <DivEvent>
                <h2>{item.name}</h2>
                <article>{item.description}</article>
                <h6>{item.location}</h6>
                <EventBottom>
                  {favoritesId?.favorites.find((fav) => fav.id === item.id) ? (
                    <HeartIcon
                      className="heart"
                      onClick={() => handleFavorite(item.id)}
                      title="Eliminar de favoritos"
                    />
                  ) : (
                    <HeartOutlined
                      className="heart"
                      onClick={() => handleFavorite(item.id)}
                      title="Añadir a favoritos"
                    />
                  )}
                  <Link to={`/programming/${item.id}`}>
                    <Button>Programación</Button>
                  </Link>
                </EventBottom>
              </DivEvent>
              <img
                src={item.img}
                alt="..cargando"
                style={{ width: "200px", marginLeft: "50px" }}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
