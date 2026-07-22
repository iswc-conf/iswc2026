import React from "react";
import Hero from "./Hero";
import About from "./About";
import banner from "../../assets/logos/logo_banner.png";

const MainPage = () => (
  <main id="main-content">
    <Hero />
    <About />
    <img className="w-100" src={banner} alt="ISWC 2026 — Bari, Italy" loading="lazy" />
  </main>
);

export default MainPage;
