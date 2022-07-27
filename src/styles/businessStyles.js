import styled from "styled-components";
import business from "../assets/fondo.jpg";
import { Button, Card } from 'antd'

export const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  &.business {
    background-image: url(${business});
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ButtonBusiness = styled(Button)`
  outline: none;
  border: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: 8px;
  padding: 14px 25px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: 0.3s;
  height: 40px;

  & > span {
    display: flex;
    align-items: center;
    margin-top:6px;
    gap: 10px;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;