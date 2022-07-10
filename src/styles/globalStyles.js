import styled from "styled-components";
import town from "../assets/town.png";

export const DivForm = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100vh;
  background-image: url(${town});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  & > h2 {
    color: #fff;
    -webkit-text-stroke: 0.5px #000;
    text-shadow: 1px 1px 1px #000;
    font-size: 3rem;
    font-weight: bold;
    margin: 100px 60px;
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
  margin: 60px;

  & > h4 {
    text-align: center;
    width: 80%;
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
  color: #000;

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
    width: 300px;

    &.google:hover {
      background-color: #fffff5;
    }

    &.fb {
      background-color: #3a559f !important;

      &:hover {
        background-color: #3a5590 !important;
      }
    }

    & > img {
      margin-right: 10px;
    }
  }
`;
