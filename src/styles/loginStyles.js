import styled from "styled-components";
import town from "../assets/town1.png";
import town_2 from "../assets/town2.png";
import town_3 from "../assets/town3.png";

export const DivForm = styled.div`
  display: flex;
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

  &.company {
    background-image: url(${town_3});
  }

  & > h2 {
    color: var(--primary-color);
    -webkit-text-stroke: 0.5px #000;
    text-shadow: 1px 1px 1px #000;
    font-size: 3rem;
    font-weight: bold;
    margin: 60px;
  }

  &.register > h2 {
    padding: 0;
  }

  button.btn {
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  border: 1px solid #000;
  border-radius: 20px;
  padding: 30px;
  margin: 20px 60px 60px;
  height: fit-content;
  width: 400px;

  & > h4 {
    text-align: center;
    width: 80%;

    &.register {
      width: 100%;
    }
  }

  & > div {
    margin: 0;
    width: 100%;
    & > div.error {
      font-size: 12px !important;
      font-weight: 800;
      color: #ff0000 !important;
      margin-left: 10px !important;
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

  &::placeholder {
    color: #494949;
    font-weight: 500;
  }
`;

export const FormOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 20%;

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
        border-color: #515151;
      }
    }

    &.fb {
      background-color: #3a559f;

      &:hover {
        background-color: var(--primary-color);
        color: #3a559f;
      }
    }

    & > img {
      margin-right: 10px;
    }
  }

  &.register {
    padding-top: 10%;
  }
`;
