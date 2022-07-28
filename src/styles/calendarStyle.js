import { Calendar, Input, Button, AutoComplete, Upload } from "antd";
import styled from "styled-components";
import Icon from "@ant-design/icons";
import image from "../assets/prueba/image5.jpg";
import image1 from "../assets/prueba/image7.jpg";
import image2 from "../assets/prueba/image8.jpg";
import { Link } from "react-router-dom";

export const CardStyledCalendar = styled.div`
  padding: 10px;
  margin: 5%;
  width: 90%;
  background: #ffffffb5;
  border-radius: 5px;
  img {
    width: 90px;
    height: 80px;
    max-width: 100%;
    border-radius: 20px;
  }
  p {
    font-style: italic;
    margin-bottom: 0;
    margin-top: 1rem;
  }
  & > div > div {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    width: fill-available;
  }
`;

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

export const DivEvent = styled.div`
  width: 40vw;
  margin-left: 10px;

  & > a {
    color: #00a8ff;

    &:hover {
      color: var(--neutral-color);
    }
  }
`;

export const EventBottom = styled.div`
  margin-top: 5vw;
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  & > .heart > svg,
  & > .heart-checked > svg {
    width: 1.3rem;
    height: 30px;
    transition: 0.3s;
  }

  & > .heart > svg,
  & > .heart-checked > svg:hover {
    fill: #ff7875;
  }

  & > .heart-checked > svg,
  & > .heart > svg:hover {
    fill: #ff4d4f;
  }
`;

export const LineStyle = styled.hr`
  width: 70%;
  margin: 1rem auto;
  border-top-color: var(--secondary-color);
  opacity: 1;
`;

export const textStyle = styled.h6`
  font-size: 9px;
  color: red;
`;

export const SiderStyle = styled.div`
  width: 90%;
  margin: auto 5%;
  overflow: auto;
  overflow-x: hidden;
  height: calc(100vh + 129px);
  background: var(--primary-color);

  ::-webkit-scrollbar {
    display: none;
  }

  & > div {
    cursor: pointer;
  }
`;

export const TittleStyle = styled.h4`
  color: white;
  font-family: "Merriweather", serif;
  padding-top: 1rem;
  text-align: center;
  margin-top: 19px;
`;

export const CalendarStyled = styled(Calendar)`
  user-select: none;

  .ant-radio-button-wrapper-checked:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child {
    border-right-color: var(--secondary-color);
    border-color: var(--secondary-color);

    &:hover {
      color: var(--secondary-color);
    }
  }

  ant-radio-button-inner {
    box-shadow: none;
    outline: none;
    border: none;
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: var(--secondary-color);
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: var(--secondary-color);
    border-color: var(--secondary-color);
    box-shadow: none;

    &:hover {
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }

  .ant-radio-button-wrapper:hover {
    color: var(--secondary-color);
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: var(--secondary-color);
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: var(--secondary-color);
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: var(--secondary-color);
    box-shadow: none;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: var(--secondary-color);
  }

  table > thead > tr > th {
    text-transform: uppercase;
    font-weight: 600;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border-color: var(--secondary-color);
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: var(--secondary-color);
  }
`;
export const Siderbar = styled.div`
  height: 200vw;
  background: var(--background-color);
  margin-top: 50px;
  width: 20vw;
  margin-left: 4.9vw;
`;
export const InputStyled = styled(Input)`
  border-radius: 10px;
  margin-left: 7vw;
  :focus {
    border: 1px solid var(--secondary-color) !important;
  }
  :hover {
    border: 1px solid var(--secondary-color) !important;
  }
`;
export const AutoCompleteStyled = styled(AutoComplete)`
  border-radius: 10px;
`;
export const ButtonAntdStyled = styled(Button)`
  border-radius: 10px;
  margin-left: 7vw;
  text-align: left;
  color: #a9a9a9;

  &[disabled]:hover {
    .location {
      fill: #a9a9a9;
    }
  }

  &:hover {
    .location {
      fill: #40a9ff;
    }
  }

  .location {
    width: 15px;
    height: 15px;
    fill: #a9a9a9;
    margin-right: 5px;
  }
`;
export const FontStyled = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vw;
`;
export const FontStyled1 = styled.div`
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 65px;
`;
export const FontStyled2 = styled.div`
  background-image: url(${image2});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
  -webkit-filter: blur(1.5px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  height: 47vw;
`;

export const LinkStyle = styled(Link)`
  color: #000;
  font-weight: 700;
  :hover {
    color: var(--secondary-color);
  }
`;
export const CardStyledHome = styled.div`
  text-align: center;
  :hover {
    box-shadow: 1px 1px 1px 1px #d4d4d4;
  }
`;

export const UploadImg = styled(Upload)`
  .ant-upload-list-item-error,
  .ant-upload-list-item-error .ant-upload-text-icon > .anticon,
  .ant-upload-list-item-error .ant-upload-list-item-name {
    color: blue;
  }
`;
export const TitleAdmi = styled.h1`
  text-align: center;
  padding-top: 5vw;
  font-size: 80px;
  text-shadow: 1px 8px 5px white;
  &:after {
    content: "";
    display: block;
    margin-top: 10px;
    width: 20%;
    height: 10px;
    background-color: var(--secondary-color);
    position: absolute;
    left: 38%;
    transform: translateX(-50%);
  }
`;
export const ButtonAdmi = styled(Button)`
  outline: none;
  border: none;
  margin-top: 10px;
  background-color: var(--background-color);
  color: var(--primary-color);
  border-radius: 8px;
  padding: 14px 25px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-left: -4.5%;
  height: 40px;

  & > span {
    display: flex;
    align-items: center;
    margin-top: -5px;
    gap: 2px;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;

export const InputAdmi = styled(Input)`
  :hover {
    border: 1.5px solid var(--secondary-color);
  }
  :focus {
    border: 2px solid var(--secondary-color);
  }
`;
export const InputAdmi1 = styled(Input.Password)`
  :hover {
    border: 1.5px solid var(--secondary-color) !important;
  }
  &:focus {
    border: 2px solid var(--secondary-color) !important;
  }
`;
export const TitlleEvents = styled.h3`
   {
    color: #000;
    -webkit-text-stroke: 0.5px #000;
    font-size: 2, 5rem;
    font-weight: bold;
    padding-top: 15px;
    width: 80vw;
    text-align: center;
    margin-left: 3, 5vw;
    font-family: "Merriweather", serif;
  }
  &:after {
    content: "";
    display: block;
    width: 13%;
    height: 5px;
    background-color: var(--secondary-color);
    position: absolute;
    margin-top: 1%;
    left: 38%;
    transform: translateX(-50%);
  }
`;
