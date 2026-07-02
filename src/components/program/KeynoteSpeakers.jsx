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
import ExternalLink from "../general/ExternalLink"
import jim from "./data/keynote_speaker/jim.jpeg"

export const KeynoteSpeakers = () => {
    return (
<BaseContainer>

  <Header>Keynote Speakers</Header>

    <section className="my-6">
    <UnderlineHeader>
      ISWC 25th Anniversary Keynote Talk:{" "}
      <span style={{ color: theme.colors.secondary }}>
        James Hendler
      </span>
    </UnderlineHeader>
</section>


    <SubHeader className="mt-3">Talk Overview</SubHeader>
    <p className="mt-1 text-gray-700">
      In 2001, I joined Tim Berners-Lee and our colleague Ora Lassila in writing an article describing a vision for the Semantic Web – combining work we'd each been doing for a decade or more. The paper, which appeared in Scientific American, has been widely cited and led to much work in both academia and industry aimed at adding machine-readable text to the Web. Now, 25 years later, while even the concept of what the Web is has changed, machine-readable metadata is crucial to search and many other applications, and knowledge graph technology, which also grew from this vision, is now a big business used by major organizations around the world. Further, with the advent of LLMs, a realization is growing that the difference between reality and hallucination requires machine-readable knowledge. However, despite this success, much of the original vision of the Semantic Web remains unrealized. In this talk, I discuss what was in the original vision, what has occurred and, most importantly, a call to action as to what still remains to be done if we are truly to recognize the full potential of the Semantic Web.
The keynote will be followed by an open challenge to the audience. How do the researchers and academics working in the field today, and in particular the next generation of Semantic Web scientists — actually experience the research landscape they are working in? What has the field delivered, what has it failed to deliver, and what needs to change? Prof. Hendler will open the floor to an unscripted discussion, with young researchers and academics very much invited to lead it.

    </p>
  

  {/* Speaker Bio Section */}
  <section className="my-8">
    <SubHeader>About James Hendler</SubHeader>

<div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
  
  {/* Image */}
  <img
    src={jim}
    alt="James Hendler"
    className="block rounded-xl h-[300px] object-cover self-start -mt-[2px]"
  />

  {/* Bio Text */}
  <div className="mt-0">
    <p className="mt-0">
      James Hendler is the Tetherless World Professor of Computer, Web and Cognitive Sciences at RPI. In fifty years as an AI researcher, Hendler has worked in areas including planning, scalable KR, semantic data integration and global technology policy. He is best known for his work in bringing AI to the Web, as well as in government open data, knowledge graphs, and what’s now known as neuro-symbolic AI.  He is a fellow of the AAAI, AAIA, AAAS, ACM, BCS, IEEE and the US National Academy of Public Administration.  Among other awards, in 2025, Hendler received the AAAI Feigenbaum Award for “a sustained record of high-impact seminal contributions to experimental AI research” and in 2026 was a co-recipient the life-time achievement award from the Knowledge Graph Society.  For a longer, more detailed bio, see <ExternalLink href="https://en.wikipedia.org/wiki/James_Hendler">James Hendler Wikipedia Page</ExternalLink>. 

    </p>
  </div>

</div>
  </section>


  
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
