import styled from "styled-components";

export const DivPosting = styled.div`
  padding: 20px 40px;
  margin: 20px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 14px;

    & > div {
      display: flex;
      gap: 10px;
      align-items: center;

      & > span {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }
`;
