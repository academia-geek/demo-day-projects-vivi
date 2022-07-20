import styled from "styled-components";

export const DivPosting = styled.div`
  margin: 20px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: fill-available;
  padding: 20px 0;
  position: relative;

  .cross {
    width: 20px;
    border-radius: 100%;
    position: absolute;
    right: 5%;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    .cross {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

//display: flex;
export const Userbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 20px 40px;

  & > div {
    gap: 10px;
    align-items: center;

    span {
      font-size: 18px;
    }
    h5 {
      font-size: 14px;
      color: lightgray;
    }
  }
`;

export const DivPost = styled.div`
  display: flex;
  padding: 0px 40px 20px 40px;
  gap: 20px;

  & > div {
    width: 65%;
    img {
      width: 100%;
    }
  }

  & > div.comment {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      font-size: 1rem !important;
      margin-top: 1rem !important;
    }

    & > a {
      color: #00a8ff;

      &:hover {
        color: #022fd0;
      }
    }
  }
`;
