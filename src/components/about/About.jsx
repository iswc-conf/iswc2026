import React from "react";
import Header from "../general/Header";
import TextBlock from "../general/TextBlock";
import { Link } from "react-router-dom";
import ExternalLink from "../general/ExternalLink";
import BaseContainer from "../general/BaseContainer";
import { theme } from "../../theme";
import Accent from "../general/Accent";
import UnderlineHeader from "../general/UnderlineHeader";
import NewsSection from "./News";

export const About = () => {
  return (
    <div className="px-5 bg-white items-center justify-center">
      <br></br>
      <br></br>
      <Header>About ISWC 2026</Header>


      <div className="max-w-3xl mx-auto px-4">
     
        <p className="text-lg ">
          The International Semantic Web Conference (ISWC) is the premier
          international forum for the Semantic Web and Linked Data community.
          ISWC 2026 will bring together researchers, practitioners, and industry
          specialists to discuss, advance, and shape the future of semantic
          technologies. ISWC offers five exciting and fruitful days you don’t want to miss every year!
          <br></br>
          <br></br>
          <Accent>ISWC 2026</Accent> will be held as an in-person conference. We
          look forward to meeting you in <Accent>Bari</Accent>,{" "}
          <Accent>Italy</Accent>, in <Accent>October 2026</Accent>.<br></br>
          <br></br>
          To make the conference more environmentally friendly, the Semantic Web
          Science Association (SWSA) is offsetting the carbon footprint of ISWC
          2026. Read more about the sustainability initiative
          <ExternalLink href="https://swsa.semanticweb.org/content/sustainability#:~:text=At%20ISWC2023%20SWSA%20announced%20the%20launch%20of,while%20recognising%20the%20significance%20of%20scientific%20networking">
            here
          </ExternalLink>
          .
        </p>

      <UnderlineHeader>News </UnderlineHeader>
      <NewsSection></NewsSection>


      </div>
    </div>
  );
};
