import React from "react";
import satoshi from "./data/keynote_speaker/satoshi_sekine.png";
import denny from "./data/keynote_speaker/Dr_Denny_Vrandecic.jpg";
import harmelen from "./data/keynote_speaker/hermelen.jpg"
import tara from "./data/keynote_speaker/tara.png"
import toni from "./data/keynote_speaker/Toni.jpg"
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


    <section className="my-6">
    <UnderlineHeader>
      Keynote Talk:{" "}
      <span style={{ color: theme.colors.secondary }}>
        Tara Raafat
      </span>
    </UnderlineHeader>
</section>



    {/* Speaker Bio Section */}
  <section className="my-8">
    <SubHeader>About Tara Raafat</SubHeader>

<div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
  
  {/* Image */}
  <img
    src={tara}
    alt="Tara Raafat"
    className="block rounded-xl h-[300px] object-cover self-start -mt-[2px]"
  />

  {/* Bio Text */}
  <div className="mt-0">
    <p className="mt-0">
      Dr. Tara Raafat is Head of Metadata and Knowledge Graph Strategy in Bloomberg’s CTO Office, where she advances the enterprise use of metadata, semantic technologies, and knowledge graphs to make complex data more connected, trusted, and AI-ready. Her work sits at the intersection of knowledge engineering, data integration, enterprise AI, and organizational change, with a strong focus on the human practices needed to make knowledge graphs successful at scale. During her more than 15 years working in semantic technologies, she has led semantic data initiatives across financial services, regulatory compliance, healthcare, and industrial data ecosystems, helping organizations turn complex knowledge into durable and usable data infrastructure. Tara is an active speaker, author, and contributor in the global knowledge graph community, with work focused on enterprise knowledge graphs, AI-ready data, and human-centered semantic transformation. She holds a PhD in Information System Engineering from the UK. 
    </p>
  </div>

</div>
  </section>


      <section className="my-6">
    <UnderlineHeader>
      Keynote Talk:{" "}
      <span style={{ color: theme.colors.secondary }}>
        Francesca Toni 
      </span>
    </UnderlineHeader>
</section>



    {/* Speaker Bio Section */}
  <section className="my-8">
    <SubHeader>About Francesca Toni </SubHeader>

<div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
  
  {/* Image */}
  <img
    src={toni}
    alt="Francesca Toni"
    className="block rounded-xl h-[230px] object-cover self-start -mt-[2px]"
  />

  {/* Bio Text */}
  <div className="mt-0">
    <p className="mt-0">
Francesca Toni is Professor in Computational Logic at the Department of Computing, Imperial College London, UK. She is  also the founder and leader of the CLArg (Computational Logic and Argumentation) research group and of the XAI research Centre at Imperial. Her research interests lie within the broad area of Knowledge Representation and Reasoning in AI and Explainable AI, and in particular include Argumentation, Argument Mining, Logic-Based Multi-Agent Systems, Non-monotonic/Default/Defeasible Reasoning, Machine Learning. She graduated, summa cum laude, in Computing at the University of Pisa, Italy and received her PhD in Computing from Imperial College London. She has coordinated two EU projects, received funding from EPSRC and the EU, was awarded a Senior Research Fellowship from The Royal Academy of Engineering and the Leverhulme Trust, was Technical Director of the ROAD2H EPSRC-funded project and co-Director for the Centres of Doctoral Training in Safe and Trusted AI and in AI for Healthcare and Royal Academy of Engineering/JP Morgan Research Chair on Argumentation-based Interactive Explainable AI (2020-25). She is EurAI fellow, AAAI fellow,AAIS fellow and fellow of the BCS, and has been awarded in 2021 an ERC Advanced grant on “Argumentation-based Deep Interactive Explanations”. She has published over 200 papers, co-chaired ICLP2015 (the 31st International Conference on Logic Programming), KR 2018 (the 16th Conference on Principles of Knowledge Representation and Reasoning), and COMMA 2022 (9th International Conference on Computational Models of Argument), was the conference chair for ICLP 2023 and is currently the conference chair for IJCAI-ECAI 2026. She is in the editorial board of the Argument and Computation journal and associate editor for Theory and Practice of Logic Programming. She is also in the Board of Directors for KR Inc. and IJCAI trustee.
    </p>
  </div>

</div>
  </section>

</BaseContainer>
    );
}

export default KeynoteSpeakers;
