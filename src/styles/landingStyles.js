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
      font-size: 4rem;
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

  &.programming {
    background-color: var(--primary-color);
    border: 1px solid #8c8c8c;
    color: #8c8c8c;
    font-weight: 400;
    line-height: 0;
    border-radius: 5px;
    padding: 15px 10px;
    font-size: 14px;

    &:hover {
      border-color: var(--background-color);
      color: var(--background-color);
    }
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
  h2 {
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

export const Box = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  padding: 1rem;
  height: 250px;

  & > div.icon {
    border: 5px solid var(--secondary-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-color);
    font-weight: bold;
    width: 150px;
    height: 150px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const EventLanding = styled.div`
  position: relative;
  margin: 1px 0 0 10px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    position: relative;
    float: left;
    padding-bottom: 0;

    & > .img-container {
      & > div {
        padding-bottom: 45% !important;

        & > span {
          background-position: center 42%;
        }
      }

      &:hover {
        & > div > span {
          transform: none !important;
        }
      }
    }

    & > .text-container {
      padding: 7px 10px 10px 10px !important;

      & > .event-title {
        h3 {
          font-size: 16px !important;
          line-height: 1.3 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
        }
      }
    }
  }

  & > .img-container {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    height: 100%;

    &:hover {
      & > div > span {
        transform: scale3d(1.1, 1.1, 1);
      }
    }

    & > div {
      position: relative;
      display: block;
      overflow: hidden;
      padding-bottom: 140%;
      background-color: transparent;
      &::before {
        content: "";
        background: -webkit-linear-gradient(
          0deg,
          rgba(48, 50, 99, 0.69),
          rgba(255, 255, 255, 0)
        );
        background: linear-gradient(
          0deg,
          rgba(48, 50, 99, 0.69),
          rgba(255, 255, 255, 0)
        );
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 0.3s ease;
        z-index: 1;
      }

      & > span {
        filter: brightness(1.1) contrast(1) saturate(1);
        transition: all 1s ease;
        min-width: 100%;
        background-position: center 50%;
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        display: block;
      }
    }
  }

  & > .text-container {
    padding: 22px 20px;
    bottom: 0;
    position: absolute;
    left: 0;
    margin-bottom: 0;
    width: 100%;
    pointer-events: none;
    z-index: 1;
    font-size: 11px;
    line-height: 1;
    min-height: 17px;
    color: var(--primary-color);

    & > .event-title {
      h3 {
        color: var(--primary-color);
        margin: 0;
        font-size: 22px;
        line-height: 28px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    & > .event-data {
      font-size: 10px;
      font-weight: 400;
      display: inline;
      text-shadow: 1px 1px 1px rgb(0 0 0 / 30%);

      & > span:first-child {
        display: inline-block;
        position: relative;
        top: 2px;

        & > span {
          margin: 0 2px;
        }
      }

      & > span:last-child {
        display: inline-block;
        position: relative;
        top: 2px;
      }
    }
  }
`;

export const FormLanding = styled.form`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    box-shadow: none;

    & > div > textarea {
      height: 50px;
    }
  }

  & > div > input {
    background-color: #f2f1ec;
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
      background-color: #f2f1ec;
    }
  }

  & > div > textarea {
    background-color: #f2f1ec;
    resize: none;
    margin-top: 1rem;
    height: 25vh;
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
      background-color: #f2f1ec;
    }
  }

  & > button {
    margin-top: 1rem;
    border: 1px solid transparent;
    padding: 0.5rem 2rem;

    &:hover {
      border-color: var(--secondary-color);
    }
  }
`;

export const Copy = styled.div`
  background-color: var(--background-color);
  height: 50px;

  & > p {
    color: #c2c2c2;
  }
`;
