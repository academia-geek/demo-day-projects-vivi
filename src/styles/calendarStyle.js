import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";

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
height: 89.5vh;
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