import React from "react";
import { Chatbot } from "../components/Chatbot";
import { Footer } from "../components/Footer";
import { AlertVivi } from "../components/landing_page/Alert";
import { NavbarLanding } from "../components/Navbar";
import { CarouselLanding } from "../components/landing_page/CarouselLanding";
import { About } from "../components/landing_page/About";
import { Services } from "../components/landing_page/Services";
import { Events } from "../components/landing_page/Events";
import { ContactLanding } from "../components/landing_page/ContactLanding";

export const LandingPage = () => {
  return (
    <>
      <NavbarLanding />
      <CarouselLanding />
      <AlertVivi />
      <About />
      <Services />
      <Events />
      <ContactLanding />
      <Chatbot />
      <Footer />
    </>
  );
};
