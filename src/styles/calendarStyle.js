import { Calendar, Input } from "antd";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";
import image from "../assets/prueba/image5.jpg";
import image1 from "../assets/prueba/image7.jpg";

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
    p{
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

export const LineStyle = styled.hr`
    width: 70%;
    margin: 1rem auto;
`;

export const textStyle = styled.h6`
  font-size:9px;
  color:red;
`;

export const SiderStyle = styled.div`
  width: 90%;
  margin: auto 5%;
  overflow: auto;
  overflow-X: hidden;
  height: calc(100vh + 129px);
  background: rgba(255,189,41,1);
  ::-webkit-scrollbar {
    display: none;
  }
  `
    ;
export const TittleStyle = styled.h4`
  color: white;
  font-family: "Merriweather",serif;
  padding-top: 1rem;
  text-align: center;
  margin-top:19px;
`
export const CalendarStyle = styled(Calendar)`
.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
  border-right-color: #faad14;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  z-index: 1;
  color:rgba(255, 189, 41,1) ;
  background: #fff;
  border-color: #faad14;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #565252;
  border-color: #565252;
}
.ant-radio-button-wrapper:hover {
  position: relative;
  color:rgba(255, 189, 41,1);
}
`
export const Siderbar = styled.div`
height: 200vw;
background:  #565252;
margin-top: 50px;
width: 20vw; 
margin-left: 4.9vw
`
export const InputStyled = styled(Input)`
border-radius:10px;
margin-left:7vw
`
export const FontStyled = styled.div`
background-image: url(${image});
`
export const FontStyled1 = styled.div`
background-image: url(${image1});
background-repeat: no-repeat;
background-size: cover;
padding-top:100px
`