import styled from "styled-components";

export const FOOTER = styled.footer`
  width: 100%;
  background-color: #f2f1ec;
  position: relative;
  z-index: 98;

  .navbar-brand {
    &:hover {
      color: var(--background-color);
    }

    & > img {
      width: 60px;
    }
  }

  a {
    color: var(--background-color);
    transition: 0.3s;

    &:hover {
      color: var(--secondary-color);
    }
  }

  .footer-icons {
    & > svg {
      font-size: 30px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
export const CONTAINER = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
`;
export const SECTION1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 60px;
  text-align: left;
  border-right: 1px solid #4a4a4a;
  padding: 10px 15% 10px 0;
  img {
    width: 9rem;
    border-radius: 12px;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 36px;
    color: var(--primary-color);
    position: relative;
    margin-bottom: 10px;
  }
`;
export const Chatlog1 = styled.div`
  border-radius: 10px;
  padding: 8px 12px;
  background-color: rgb(245, 248, 250);
  font-size: 14px;
  max-width: 232px;
`;
export const Chatlog2 = styled.div`
  border-radius: 10px;
  padding: 8px 12px;
  background-color: var(--secondary-color);
  font-size: 14px;
  margin-bottom: 0.5rem;
  max-width: 232px;
`;
export const UserData = styled.div`
  background-color: #d9d9d9;
  border-radius: 13px;
  width: 266px;
  min-height: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;
export const EditIcon = styled.img`
  position: absolute;
  transform: translate(-31px, 103px);
  width: 2rem;
  border-radius: 8px;
  cursor: pointer;
`;
export const CONT = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const TAG = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  padding: 0 8px;
  border-radius: 10px;
  h6 {
    margin: 0;
  }
`;

export const HeroCards = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  padding: 0 8px;
  border-radius: 10px;
  width: 25%;
  height: 15vw;
  margin-left: 2%;
  text-align: center;

  a {
    width: fill-available;
  }
  img {
    width: 50%;
    border-radius: 100%;
  }
`;
