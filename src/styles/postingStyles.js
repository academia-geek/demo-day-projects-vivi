import styled from "styled-components";

export const DivPosting = styled.div`
  margin: 20px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: fill-available;
  position: relative;

  &:hover {
    .cross {
      opacity: 1;
      cursor: pointer;
    }
  }
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
    flex-direction: column;
    gap: 10px;

    & > .user {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    a{
      color: #000000;
    }
    span {
      font-size: 18px;
    }
    span.time {
      font-size: 14px;
      color: #8c8c8c;
    }
  }

  .cross {
    width: 20px;
    border-radius: 100%;
    position: absolute;
    right: 5%;
    opacity: 0;
    transition: 0.3s;
  }
`;

export const DivPost = styled.div`
  display: flex;
  padding: 0px 40px 20px 40px;
  gap: 20px;

  & > div {
    width: 65%;
    height: 24.45vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;
    img {
      width: initial;
      max-width: fill-available;
      height: initial;
      max-height: fill-available;
    }
  }

  & > div.comment {
    width: 35%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    background-color: #FFFFFF !important;
    p {
      font-size: 1rem !important;
      margin-top: 1rem !important;
    }

    & > a {
      color: #00a8ff;

      &:hover {
        color: var(--neutral-color);
      }
    }
  }
`;
