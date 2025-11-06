import React from "react";
import { About } from "./About";
import { Hero } from "./Hero";
import banner from "../../assets/logos/logo_banner.png"

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
       <div className="w-full pt-16 relative">
          <img
            src={ banner }
            alt="Banner"
            className="w-full h-auto object-cover"
          />
        </div>
    </>
  );
};

export default MainPage;
