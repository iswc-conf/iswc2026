import React from "react";
import Accent from "../general/Accent";
import ExternalLink from "../general/ExternalLink";
import Header from "../general/Header";
import SubTitle from "../general/SubTitle";
import UnderlineHeader from "../general/UnderlineHeader";
import NewsSection from "./News";

const SUSTAINABILITY_URL =
  "https://swsa.semanticweb.org/content/sustainability";

export const About = () => (
  <section className="iswc-page__inner py-5">
    <Header>About ISWC 2026</Header>
    <SubTitle>Ontologies, Knowledge Graphs, and Smarter AI</SubTitle>

    <p>
      The International Semantic Web Conference (ISWC) is the premier
      international forum for the Semantic Web and Linked Data community. ISWC
      2026 will bring together researchers, practitioners, and industry
      specialists to discuss, advance, and shape the future of semantic
      technologies. ISWC offers five exciting and fruitful days you don&rsquo;t
      want to miss every year.
    </p>

    <p>
      <Accent>ISWC 2026</Accent> will be held as an in-person conference. We look
      forward to meeting you in <Accent>Bari</Accent>, <Accent>Italy</Accent>, in{" "}
      <Accent>October 2026</Accent>.
    </p>

    <p>
      To make the conference more environmentally friendly, the Semantic Web
      Science Association (SWSA) is offsetting the carbon footprint of ISWC 2026.
      Read more about the sustainability initiative{" "}
      <ExternalLink href={SUSTAINABILITY_URL}>here</ExternalLink>.
    </p>

    <UnderlineHeader>News</UnderlineHeader>
    <NewsSection />
  </section>
);

export default About;
