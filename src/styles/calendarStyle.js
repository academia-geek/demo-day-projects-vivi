import { Calendar, Input } from "antd";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";
import image from "../assets/prueba/image5.jpg"; 

export const CardStyledCalendar = styled.div`
justify-content: center;
align-items: center;
padding: 10px;
display: flex;
flex-direction: row;
margin-bottom: 20px;
width:160px;
margin-left:15px;

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
}
`;

export const LineStyle=styled.hr`
width:150px;
margin-left:15px
`
;
export const textStyle=styled.h6`
font-size:9px;
color:red;
`
;
export const SiderStyle=styled(Sider)`
width:2000px;
margin-top:15px;
overflow: auto;
overflow-X:hidden;
height: 89 vh;
position:fixed;
left:81vw;
top:7vw;
bottom: 0;
background:rgba(255, 189, 41,1);
::-webkit-scrollbar {
  display: none;
  }
`
export const TittleStyle=styled.h4`
  margin-Left:10px;
  position: fixed;
  color: white;
  font-family: "Merriweather", serif;
  margin-top:19px;
`
export const CalendarStyle=styled(Calendar)`
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
export const Siderbar =styled.div`
height: 200vw;
background:  #565252;
margin-top: 50px;
width: 20vw; 
margin-left: 4.9vw
`
export const InputStyled=styled(Input)`
border-radius:10px;
margin-left:7vw
`
export const FontStyled=styled.div`
background-image: url(${image});
`