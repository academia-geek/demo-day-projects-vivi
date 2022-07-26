import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Alert } from "antd";

export const NavbarStyled = styled(Navbar)`
  color: var(--primary-color);

  .navbar-brand {
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    font-weight: bold;
    padding: 0;

    & > img {
      width: 60px;
    }
  }

  .navbar-toggler {
    border: none;

    &:active {
      transform: scale(0.8);
    }

    &:focus {
      box-shadow: none;
    }
  }

  .navbar-collapse {
    scroll-behavior: smooth;
    font-size: 18px;

    & > div > a.nav-link {
      color: var(--primary-color);
      transition: 0.3s;

      @media (max-width: 968px) {
        background-color: #333333;
        color: var(--white);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
      }

      &:hover {
        color: var(--secondary-color);
      }
    }

    & > div > a.btn-register {
      background-color: var(--primary-color);
      color: #212529;
      border-radius: 30px;
      font-size: 18px;

      &:hover {
        background-color: #e2e2e2;
        color: #212529;
      }
    }

    & > div > a.btn-login {
      border-radius: 30px;

      &:hover {
        background-color: #333333;
        color: var(--primary-color);
      }
    }
  }

  .btn-register {
    background-color: var(--primary-color);
    color: #212529;
    border-radius: 30px;
    font-size: 16px;

    &:hover {
      background-color: #e2e2e2;
      color: #212529;
    }
  }

  .nav-before {
    font-size: 18px;
    justify-content: center;
    align-items: center;

    .icon {
      border-radius: 50%;
      transition: 0.3s;
      padding: 10px;
      line-height: 16px;
      background-color: transparent;

      &:hover {
        background-color: #333333;
      }
    }
  }
`;

export const NavbarSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:focus,
  &:hover,
  &:active {
    background-color: #333333;
  }
`;

export const CarouselVideos = styled.main`
  .carousel-item > video {
    width: 100%;
    height: 88.5vh;
    object-fit: cover;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: none;
  }

  a {
    display: none;
  }

  .carousel-indicators {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.9);
    height: 5.5%;
    width: 150px;
    bottom: 10%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    padding-top: 5px;
    border-radius: 20px;

    @media (max-width: 968px) {
      height: 6%;
    }

    & > button {
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-left: 10px;
      background-color: var(--primary-color);
      margin-top: 3.5px;

      &:last-child {
        margin-right: 10px;
      }

      &.active {
        background-color: var(--secondary-color);
        border-color: var(--secondary-color);
        max-width: 10px;
        height: 10px;
      }
    }
  }

  .carousel-caption {
    margin-bottom: 20vh;
    user-select: none;
    & > h3 {
      font-size: 4.5rem;
      text-transform: uppercase;
      text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
      color: var(--primary-color);
      margin: 0;
    }

    & > p {
      font-size: 2rem;
      color: var(--primary-color);
      padding: 0.5rem 0;
    }
  }
`;

export const ButtonLanding = styled.button`
  outline: none;
  border: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: 8px;
  padding: 14px 25px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: 0.3s;

  & > span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;

export const BannerLanding = styled(Alert)`
  height: auto;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  border: none;
  border-radius: 0;
  background: #212529;
  position: relative;

  @media (max-width: 468px) {
    width: 100%;
    text-align: center;

    img {
      display: none;
    }
  }

  & > div > div > div {
    gap: 50px;

    & > div {
      & h3 {
        font-size: 36px;
        font-weight: bold;
        color: var(--primary-color);
      }

      & > p {
        font-size: 18px;
        color: var(--primary-color);
        padding: 5px 0 15px;
      }
    }
  }

  & > button {
    position: absolute;
    right: 2%;
    top: 5%;

    & > span {
      font-size: 18px;
      border-radius: 50%;
      padding: 10px;

      & > svg {
        fill: var(--primary-color);
      }

      &:hover {
        background-color: #333333;
      }
    }
  }
`;

export const TitleLanding = styled.div`
  h1.about-title {
    text-align: center;
    padding: 2rem 0;
    font-size: 3.5rem;
    border-radius: 0.5rem;
    position: relative;
    user-select: none;

    @media (max-width: 450px) {
      font-size: 2.5rem;
    }

    &:after {
      content: "";
      display: block;
      width: 15%;
      height: 5px;
      background-color: var(--secondary-color);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const SectionHero = styled.section`
  background-color: #f2f1ec;
  padding: 24px;
  margin-bottom: 2.5rem;

  div.quote {
    padding-top: 2px;
    user-select: none;

    & > div > span {
      margin-left: 8px;
      font-size: 1rem;
    }
    & > div > img.logo {
      width: 30px;
      height: 30px;
    }
  }

  & > div > div {
    h2 {
      font-size: 2.5rem;
      margin: 10px 0;
    }

    p {
      font-size: 1rem;

      @media (max-width: 950px) {
        font-size: 1.5rem;
      }
    }
  }
`;
