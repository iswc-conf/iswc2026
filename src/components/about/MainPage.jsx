import React from "react";
import RegistrationBanner from "./RegistrationBanner";
import Hero from "./Hero";
import About from "./About";
import banner from "../../assets/logos/logo_banner.png";

const MainPage = () => (
  <main id="main-content">
    <RegistrationBanner />
    <Hero />
    <About />
  </main>
);

export default MainPage;
