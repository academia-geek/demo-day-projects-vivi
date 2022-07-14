import styled from "styled-components";

export const DivLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  & > div {
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
  background-color: #022fd0;
  border-radius: 22px;
  border: 1px solid transparent;
  outline: none;
  padding: 10px 5px;
  font-weight: 700;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
    border-color: #022fd0;
    color: #022fd0;
  }
`;

export const MapDiv = styled.div`
  padding: 30px 0;
`;
