import styled from "styled-components";

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
    & > div > div {
        font-size: 12px;
        font-weight: bold;
        text-align: center;
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
export const TittleStyle = styled.h4`
  color: white;
  font-family: "Merriweather",serif;
  padding-top: 1rem;
  text-align: center;
`