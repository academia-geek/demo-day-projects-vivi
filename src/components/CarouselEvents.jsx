import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import { CarouselStyled } from "../styles/homeStyles";

export const CarouselEvents = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} as={CarouselStyled}>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
