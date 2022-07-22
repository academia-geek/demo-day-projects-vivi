import styled from "styled-components";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";

export const DivMenu = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 20px;
  align-items: center;
  background-color: var(--background-color);
  color: var(--primary-color);
  border-bottom: 1px solid #a0a0a0;

  & > span {
    font-size: 18px;
  }
`;

export const BoxStyled = styled(Box)`
  padding: 20px 0;
  background-color: var(--background-color);
  color: var(--primary-color);
  height: 100vh;

  hr {
    border-color: var(--primary-color) !important;
  }

  .icon {
    width: 25px;
    fill: var(--primary-color);
  }

  & > div,
  & > ul {
    padding-left: 20px;
  }
`;

export const CarouselStyled = styled.div`
  padding: 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};

  .carousel-item > img {
    height: 541px;
    border: 1px solid transparent;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(13, 19, 25, 0.7);
    background-size: 50%;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }

  .carousel-indicators {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 1.5rem;
    width: 100px;
    bottom: 10%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    padding-top: 5px;
    border-radius: 20px;
    & > button {
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-left: 10px;
      background-color: #0d1319;
      margin-bottom: 30px;

      &:last-child {
        margin-right: 10px;
      }

      &.active {
        background-color: var(--primary-color);
        max-width: 10px;
        height: 10px;
      }
    }
  }
`;

export const AsideStyled = styled.aside`
  background-color: var(--background-color);
  padding: 20px;
  width: 100%;
  padding-top: 80px;
  overflow-y: scroll;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 0px;
  }

  & > div.calendar {
    cursor: pointer;
  }
`;

export const ButtonAside = styled.button`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--secondary-color);
  border: none;
  outline: none;
  padding: 10px 5px;
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

export const SideCalendar = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 30px;
  background-color: var(--primary-color);
`;

export const AsideEvents = styled.div`
  background-color: var(--primary-color);
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
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
  border: none;
  border-radius: 0px;
  cursor: pointer;

  & > img {
    width: 90px;
    height: 80px;
    max-width: 100%;
    border-radius: 20px;
  }

  & > div > div {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;

export const CalendarStyled = styled(Calendar)`
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  user-select: none;

  .react-calendar__navigation button:enabled:hover {
    background-color: transparent;
  }

  .react-calendar__month-view__weekdays > div > abbr[title] {
    text-decoration: none;
  }

  .react-calendar__tile--active,
  .react-calendar__tile--active:hover,
  .react-calendar__tile--active:enabled:hover {
    background: var(--secondary-color) !important;
  }

  .react-calendar__tile:not(--active):enabled:hover,
  .react-calendar__tile:not(--active):focus,
  .react-calendar__tile:not(--active):enabled:hover:active {
    background: var(--primary-color);
  }
`;
