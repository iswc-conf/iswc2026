import React, { useRef } from "react";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import TextBlock from "../general/TextBlock";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLInk from "../general/ExternalLink"
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader"
import SubTitle from "../general/SubTitle"

export const Visionary = () => {

    const review_ref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <BaseContainer>

            <Header>Call for Visionary Ideas Track Papers</Header>
   

            <SubHeader>A Quarter-Century Milestone: Rethinking the Semantic Web</SubHeader>

            <p>Twenty-five years ago, the Semantic Web community set out with a profound mission: to transform the World Wide Web from a web of documents into a web of actionable, machine-readable semantics. Today, as we celebrate the <b>25th Anniversary of ISWC</b>, the global landscape has dramatically shifted. The dawn of the Generative AI era has introduced autonomous agents, massive foundation models, and synthetic data streams that challenge our core understandings of data engineering and curation.</p>

            <p>
                Stepping on the successes and innovation of the last 25 years, we introduce the <b>ISWC 2026 Vision Track</b> as a strategic catalyst to boost and reinvent our community and peak into the next 25 years. We seek <b>creative forward-thinking ideas</b> that introduce an entirely new conceptual lens. We invite researchers to fearlessly challenge the field, critique existing dogmas, and propose bold, disruptive architectures that will define the Semantic Web for the next 25 years in a similar fashion as disruptive contributions have been made in the first 25 years (e.g., Linked Open Data and Knowledge Graphs). 
            </p>
       

       <SubHeader>Core Visionary Themes</SubHeader>
       <p>We invite submissions that push the boundaries of semantic technologies to forward the field into the new GenAI era. Some examples of foundational questions include:</p>

       <p>
        <ul className="ul-disc ml-8">
            <li>How do we move past mere data-feeding pipelines <b>to forge a unified, continuous reasoning architecture between Large Language Models and explicit semantic schemas?</b></li>
<li>What are the challenges for Semantic Web protocols when the primary consumers, creators, and navigators of web semantics are <b>autonomous GenAI agents rather than humans?</b> Should query languages and data formats change when the user looking at the data is not human anymore?</li>
<li>In a world dominated by extremely capable AI models, what is the <b>future of data engineering, data curation?</b></li>
<li>Can semantic web paradigms facilitate <b>truth-grounding mechanisms to mitigate hallucinations, authenticate provenance, and enforce accountability across synthetic media ecosystems?</b></li>
<li>Rationale-driven evaluations of which <b>early / prior Semantic Web visions failed to achieve mass adoption</b>, paired with the precise architectural shifts needed to revive, revise, or replace them today.</li>
        </ul>
       </p>
    <UnderlineHeader>Submission Guidelines & Format</UnderlineHeader>

    <p>
        <ul className="ul-disc ">
            <li><b>Anything between 2 to 8 pages</b>, including references.</li>
<li>Submissions must be formatted using the main conference template (Springer Publications format for Lecture Notes in Computer Science, LNCS). For details on the LNCS style, see Springer’s Author Instructions. For HTML submission guidance, please see the HTML submission guide.</li>
<li>Double-blind review</li>
<li>All papers will be part of the main conference proceedings </li>
        </ul>
    </p>

    <SubHeader>🎯 Evaluation Criteria</SubHeader>

    <p>Submissions to the Vision Track are evaluated by a panel exclusively on their conceptual value:</p>

    <p>
               <ul className="ul-disc ml-8">
<li>1.   <b>25-Year Visionary Leap:</b> Does the paper propose a transformative roadmap that charts a new path for the Semantic Web community in the GenAI landscape?</li>
<li>2.   <b>Constructive Disruption:</b> Does it effectively challenge prevailing assumptions or address deep-seated bottlenecks in our current methodologies?</li>
<li>3.   <b>Intellectual Rigor:</b> Is the conceptual argument logically sound, compellingly framed, and well-contextualized within computer science and semantic web history?</li>
        </ul> 
    </p>


    <SubHeader>🚫 Strict Exclusions (Desk-Reject Criteria)
</SubHeader>
           <p>Papers will be immediately desk-rejected without formal review if they present:</p>
    <p>
               <ul className="ul-disc ml-8">
<li>   Incremental performance optimizations or minor extensions of existing ontology tools.</li>
<li>Standard research papers with finalized empirical benchmarks.</li>
        </ul> 
    </p>

    <UnderlineHeader>Important Dates (AoE)</UnderlineHeader>

    <p>
        <ul className="ul-disc ">
            <li><b>Abstract Submission Deadline:</b> July 25, 2026</li>
<li><b>Full Paper Submission Deadline:</b> Aug 1, 2026</li>
<li><b>Author Notifications:</b> August 26, 2026</li>
<li><b>Camera-Ready Copy Due:</b> September 1, 2026</li>
<li><b>Conference Dates:</b> October 25–29, 2026</li>
        </ul>
    </p>


    <UnderlineHeader>Track Chairs</UnderlineHeader>

    <p>For inquiries regarding the alignment of your visionary paper, please reach out to the Track Chairs at: <ExternalLInk href="mailto:iswc2026-vision@easychair.org">iswc2026-vision@easychair.org</ExternalLInk></p>
    <p>
        <ul className="ul-disc ml-8">
            <li>Lora Aroyo, Google, USA</li>
<li>Gianluca Demartini, University of Queensland, Australia</li>

        </ul>
    </p>
            
        </BaseContainer>
    );
}

export default Visionary;
