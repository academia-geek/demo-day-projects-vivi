import styled from "styled-components";

export const DivLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;

  & > form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      position: absolute;
      right: 5%;
      & > svg {
        width: 30px;
        height: 30px;
        fill: #a9a9a9;
      }
    }
  }
`;

export const InputLocation = styled.input`
  width: 600px;
  border: 2px solid #a9a9a9;
  border-radius: 33px;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  position: relative;
  display: flex;
  color: #2f2f2f;

  &:focus {
    outline: none;
  }
`;

export const ButtonLocation = styled.button`
  width: 200px;
  text-align: center;
  background-color: var(--neutral-color);
  border-radius: 22px;
  border: 1px solid transparent;
  outline: none;
  padding: 10px 5px;
  font-weight: 700;
  color: var(--primary-color);
  transition: 0.3s;

  &:hover {
    background-color: var(--primary-color);
    border-color: var(--neutral-color);
    color: var(--neutral-color);
  }
`;

export const MapDiv = styled.div`
  padding: 30px 0;
  position: relative;
  .back {
    left: 3%;
    top: 11%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    cursor: pointer;
    transition: 0.3s;
    background-color: var(--primary-color);

    & > path {
      fill: #000;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }

  .check {
    top: 11%;
    left: 7%;
    position: absolute;
  }

  .leaflet-left {
    left: 90%;
  }

  .marker-icon {
    filter: sepia(100%) saturate(600%) hue-rotate(357deg) brightness(95%)
      contrast(124%);
  }

  .marker-actually {
    filter: sepia(100%) saturate(300%) hue-rotate(80deg) brightness(95%)
      contrast(124%);
  }
`;
