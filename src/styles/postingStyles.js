import styled from "styled-components";

export const DivPosting = styled.div`
  margin: 20px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Userbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 20px 40px;

  & > div {
    display: flex;
    gap: 10px;
    align-items: center;

    & > span {
      font-size: 18px;
      margin-left: 10px;
    }
  }
`;

export const DivPost = styled.div`
  display: flex;
  padding: 20px 40px;
  gap: 20px;
  & > div > img {
    width: 589px;
    height: 310px;
  }
  & > div.comment {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > p {
      font-size: 16px;
    }

    & > a {
      color: #00a8ff;

      &:hover {
        color: #022fd0;
      }
    }
  }
`;
