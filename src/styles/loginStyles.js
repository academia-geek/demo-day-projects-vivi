import styled from "styled-components";
import town from "../assets/town1.png";
import town_2 from "../assets/town2.png";

export const DivForm = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  &.login {
    background-image: url(${town});
  }

  &.register {
    background-image: url(${town_2});
    background-position: center -220px;
  }

  & > h2 {
    color: #fff;
    -webkit-text-stroke: 0.5px #000;
    text-shadow: 1px 1px 1px #000;
    font-size: 3rem;
    font-weight: bold;
    margin: 60px;
  }

  &.register > h2 {
    padding: 0;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 30px;
  margin: 20px 60px 60px;

  & > h4 {
    text-align: center;
    width: 80%;

    &.register {
      width: 100%;
    }
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  color: #494949;

  &:focus {
    outline: none;
  }
`;

export const FormOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 80px;

  & > span,
  & > a {
    font-size: 1rem;
    font-weight: bold;
  }

  & > button {
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    transition: 0.3s;

    &:active {
      transform: scale(1.01);
    }

    &.google {
      border: 2px solid transparent;
      &:hover {
        border-color: #c9c9c9;
      }
    }

    &.fb {
      background-color: #3a559f !important;

      &:hover {
        background-color: #3a557a !important;
      }
    }

    & > img {
      margin-right: 10px;
    }
  }

  &.register {
    margin-top: 20px;
  }
`;
