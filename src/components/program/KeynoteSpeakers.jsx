import React from "react";
import satoshi from "./data/keynote_speaker/satoshi_sekine.png";
import denny from "./data/keynote_speaker/Dr_Denny_Vrandecic.jpg";
import harmelen from "./data/keynote_speaker/hermelen.jpg"
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import SubHeader from "../general/SubHeader"
import DeclareSoon from "../general/declareSoon";
import { theme } from "../../theme";

export const KeynoteSpeakers = () => {
    return (
<BaseContainer>

  <Header>Keynote Speakers</Header>

  
  <section className="my-6">
    <UnderlineHeader>
      Keynote Talk:{" "}
      <span style={{ color: theme.colors.secondary }}>
        Frank van Harmelen
      </span>
    </UnderlineHeader>
</section>

    {/* Keynote Talk Section 

    <SubHeader className="mt-3">Talk Title</SubHeader>
    <p className="mt-1 text-gray-700">
      adsihfaodfhaso
    </p>
  </section>

  

  {/* Speaker Bio Section */}
  <section className="my-8">
    <SubHeader>About Frank van Harmelen</SubHeader>

<div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
  
  {/* Image */}
  <img
    src={harmelen}
    alt="Frank van Harmelen"
    className="block rounded-xl h-[300px] object-cover self-start -mt-[2px]"
  />

  {/* Bio Text */}
  <div className="mt-0">
    <p className="mt-0">
      Frank van Harmelen is professor of Artificial Intelligence at the Vrije Universiteit Amsterdam. Frank has been involved in Semantic Web research ever since he was co-PI on OnToKnowledge, the first European Semantic Web project in 1999. He is one of the co-designers of the Web Ontology Language OWL, he co-authored the first academic textbook of the field (the Semantic Web Primer),  and he was one of the architects of Sesame, one of the first RDF storage and retrieval engines. This work received the 10-year impact award at ISWC 2012. In recent years, Frank has been contributing to neuro-symbolic AI: the combination of symbolic reasoning (knowledge graphs, ontologies) with data-driven machine learning.
    </p>

    <p className="mt-2">
      Frank is a fellow of the European AI Society EurAI, a member of the Academia Europaea, and a member of the Dutch Royal Academy of Sciences (KNAW). He received the EurAI Community Services Award, and he is a guest professor at the Wuhan University of Science and Technology (WUST) in Wuhan, China.
    </p>
  </div>

</div>
  </section>

</BaseContainer>
    );
}

export default KeynoteSpeakers;
