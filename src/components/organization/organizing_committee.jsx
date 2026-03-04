import React from "react";
import Sponsor from "./Sponsor";
import organizers from "../../assets/people/organizing_commitee_list"
import banner from "../../assets/logos/logo_banner.png"
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";

const Committees = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center mt-10" id="img">
        <div className="w-full mb-8 pt-16 relative">
          <img
            src={ banner }
            alt="Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        <Sponsor users={organizers} word="Organizing Committee" />


                    <UnderlineHeader>Contact Us!</UnderlineHeader>
                    
                    <p><b><ExternalLink href="mailto:iswc2026@easychair.org">iswc2026@easychair.org</ExternalLink></b></p>
        
        
            <br></br>
      </div>
    </>
  );
};

export default Committees;
