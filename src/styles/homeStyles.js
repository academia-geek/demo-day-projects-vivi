import styled from "styled-components";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";

export const DivMenu = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 20px;
  align-items: center;
  background-color: #565252;
  color: #fff;
  border-bottom: 1px solid #a0a0a0;

  & > span {
    font-size: 18px;
  }
`;

export const BoxStyled = styled(Box)`
  padding: 20px 0;
  background-color: #565252;
  color: #fff;
  height: 100vh;

  hr {
    border-color: #fff !important;
  }

  .icon {
    width: 25px;
  }

  & > div,
  & > ul {
    padding-left: 20px;
  }
`;

export const CarouselStyled = styled.div`
  padding: 10px;

  .carousel-item > img {
    width: 1200px;
    height: 541px;
    border: 1px solid transparent;
    border-radius: 37px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(13, 19, 25, 0.7);
    background-size: 50%;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }

  .carousel-indicators > button {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-left: 10px;
    background-color: #0d1319;
    margin-bottom: 30px;

    &.active {
      background-color: #fff;
      max-width: 10px;
      height: 10px;
    }
  }

  .carousel-caption {
    margin-bottom: 30px;
    & > h3 {
      color: #fff;
    }
  }
`;

export const AsideStyled = styled.aside`
  background-color: #565252;
  padding: 20px;
`;

export const ButtonAside = styled.button`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  background-color: #ffbd29;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 25px;
  font-weight: 500;
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #ffc947;
  }

  &:focus {
    outline: none;
  }
`;

export const AsideEvents = styled.div`
  background-color: #ffbd29;
  border: 1px solid #000000;
  border-radius: 25px;
  padding: 15px;

  & > h5 {
    padding: 20px 0;
  }
`;

export const CardStyled = styled(Card)`
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  & > img {
    width: 108px;
    height: 80px;
    max-width: 100%;
    border-radius: 15px;
  }

  & > div > div {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
}
`;
