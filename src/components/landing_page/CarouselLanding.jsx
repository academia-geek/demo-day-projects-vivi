import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import colombia_1s from "../../assets/videos/colombia_1s.mp4";
import colombia_2s from "../../assets/videos/colombia_2s.mp4";
import colombia_3s from "../../assets/videos/colombia_3s.mp4";
import colombia_4s from "../../assets/videos/colombia_4s.mp4";
import colombia_5s from "../../assets/videos/colombia_5s.mp4";
import colombia_6s from "../../assets/videos/colombia_6s.mp4";
import { ButtonLanding, CarouselVideos } from "../../styles/landingStyles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export const CarouselLanding = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
 
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      as={CarouselVideos}
      fade
    >
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          className="d-block w-100"
          loading="lazy"
          preload="metadata"
        >
          <source src={colombia_1s} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Encuentra tu evento ideal</h3>
          <p>
            Descubre los festivales, carnavales, ferias y fiestas de Colombia
            que invitan a la aventura de conocer este sorprendente país
          </p>
          <ButtonLanding onClick={() => navigate("/signin")}>
            <span>
              ¡Únete a ViVi!
              <ArrowForwardIcon />
            </span>
          </ButtonLanding>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          className="d-block w-100"
          loading="lazy"
          preload="metadata"
        >
          <source src={colombia_2s} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Encuentra tu evento ideal</h3>
          <p>
            Descubre los festivales, carnavales, ferias y fiestas de Colombia
            que invitan a la aventura de conocer este sorprendente país
          </p>
          <ButtonLanding onClick={() => navigate("/signin")}>
            <span>
              ¡Únete a ViVi!
              <ArrowForwardIcon />
            </span>
          </ButtonLanding>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          className="d-block w-100"
          loading="lazy"
          preload="metadata"
        >
          <source src={colombia_3s} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Encuentra tu evento ideal</h3>
          <p>
            Descubre los festivales, carnavales, ferias y fiestas de Colombia
            que invitan a la aventura de conocer este sorprendente país
          </p>
          <ButtonLanding onClick={() => navigate("/signin")}>
            <span>
              ¡Únete a ViVi!
              <ArrowForwardIcon />
            </span>
          </ButtonLanding>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          className="d-block w-100"
          loading="lazy"
          preload="metadata"
        >
          <source src={colombia_4s} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Encuentra tu evento ideal</h3>
          <p>
            Descubre los festivales, carnavales, ferias y fiestas de Colombia
            que invitan a la aventura de conocer este sorprendente país
          </p>
          <ButtonLanding onClick={() => navigate("/signin")}>
            <span>
              ¡Únete a ViVi!
              <ArrowForwardIcon />
            </span>
          </ButtonLanding>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          className="d-block w-100"
          loading="lazy"
          preload="metadata"
        >
          <source src={colombia_5s} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Encuentra tu evento ideal</h3>
          <p>
            Descubre los festivales, carnavales, ferias y fiestas de Colombia
            que invitan a la aventura de conocer este sorprendente país
          </p>
          <ButtonLanding onClick={() => navigate("/signin")}>
            <span>
              ¡Únete a ViVi!
              <ArrowForwardIcon />
            </span>
          </ButtonLanding>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
  );
};
