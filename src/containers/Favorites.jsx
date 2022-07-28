import { List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listEventAsync } from "../redux/actions/eventsAction";
import { Col } from "react-bootstrap";
import {
  getFavoriteAsync,
  removeFromFavoriteAsync,
} from "../redux/actions/favoriteAction";
import { DivEvent, EventBottom, HeartIcon } from "../styles/calendarStyle";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { ButtonLanding } from "../styles/landingStyles";
import { Temperature } from "../components/calendar _and_programming/Temperature";

export const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.favorites);
  const { EventsList } = useSelector((store) => store.eventos);
  const favoritesId = favorites[0];

  useEffect(() => {
    dispatch(getFavoriteAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listEventAsync());
  }, [dispatch]);

  const favoritesEvents = EventsList.filter((ev) => {
    return favoritesId?.favorites.find((fav) => fav.id === ev.id);
  });

  return (
    <div>
      <div className="d-flex">
        <Col sm={9} style={{ height: "100vh" }}>
          <div className="d-flex flex-column mt-5">
            {favoritesEvents.length > 0 ? (
              <h3 className="text-center mt-5">Mis eventos favoritos</h3>
            ) : (
              <h3 className="text-center opacity-0">Mis eventos favoritos</h3>
            )}
            <List
              style={{
                marginLeft: "80px",
                marginRight: "80px",
                border: "1px solid rgba(255, 189, 41, 1)",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              itemLayout="horizontal"
              dataSource={favoritesEvents}
              locale={{ emptyText: "No hay eventos favoritos" }}
              emptyText="no"
              renderItem={(item) => (
                <List.Item
                  style={{ borderBottomColor: "var(--secondary-color" }}
                  className="py-3"
                >
                  <div className="d-flex gap-5">
                    <DivEvent>
                      <h2 className="d-flex justify-content-between">
                        {item.name}
                        <Temperature location={item.location} />
                      </h2>
                      <article className="py-2">{item.description}</article>
                      <Link to={`/map/${item.location}`}>{item.location}</Link>
                      <EventBottom>
                        <HeartIcon
                          className="heart-checked"
                          onClick={() =>
                            dispatch(removeFromFavoriteAsync(item.id))
                          }
                          title="Eliminar de favoritos"
                        />
                        <Link to={`/programming/${item.id}`}>
                          <ButtonLanding className="programming">
                            Programación
                          </ButtonLanding>
                        </Link>
                      </EventBottom>
                    </DivEvent>
                    <img
                      src={item?.img}
                      alt={item.name}
                      style={{ width: "200px" }}
                    />
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col sm={3} className="position-fixed end-0">
          <Aside />
        </Col>
      </div>
      <Footer />
    </div>
  );
};
