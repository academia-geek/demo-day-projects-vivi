import styled from "styled-components";
import business from "../assets/fondo.jpg";

export const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  &.business{
  background-image: url(${business});
  margin-left:auto;
  margin-right:auto
   
  }
   
  }
`;