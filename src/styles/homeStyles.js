import styled from "styled-components";
import Box from "@mui/material/Box";

export const DivMenu = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 20px;
  align-items: center;
  background-color: #565252;
  color: #fff;
  border-bottom: 1px solid #d5d5d5;

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
  width: 1031px;
  height: 541px;
  padding: 10px;

  .carousel-item > img {
    width: 1031px;
    height: 541px;
    border: 1px solid transparent;
    border-radius: 37px;
  }
`;
