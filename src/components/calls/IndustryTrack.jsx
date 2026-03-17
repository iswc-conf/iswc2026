import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import TextBlock from "../general/TextBlock";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import CircleList from "../general/CircleList";

export const IndustryTrack = () => {
    return (
        <BaseContainer>

            <Header>Call For Papers: Industry, Public Administration, Healthcare and any other sector </Header>
            <SubHeader>Do you use knowledge graphs, ontologies, or semantic technologies in innovative applications?</SubHeader>

            <p>The Industry Track at ISWC 2026 welcomes extended abstracts about the application of knowledge graphs and semantic technologies in a wide range of sectors – from public administration and healthcare to manufacturing, system engineering and various industrial domains – aiming to showcase the state of their adoption and the latest trends. It provides an opportunity for industry practitioners to highlight and share the key learnings and new research challenges posed by real-world production-level implementations (i.e., at least TRL6 or 7).</p>

            <p>Knowledge Graphs, ontologies and semantic technologies are increasingly being employed across multiple sectors, reshaping industries such as automotive, manufacturing, retail, e-commerce, media, finance, telecommunications, healthcare, life sciences, education, energy, government and public administration, smart cities, musea and cultural heritage, among others. These technologies enhance applications by offering diverse capabilities, including business intelligence, analytics, search, content management, knowledge management, recommender systems, information extraction, master data management, data integration, and more.</p>

            <SubHeader>Important Dates</SubHeader>
            <CircleList>
                <li>Submission Due<b>	 7 July 2026</b></li>
                <li>Notifications Due<b> 4 August 2026  </b> </li>
                <li>Camera-ready papers Due<b>	11th September 2026</b></li>
            </CircleList>
            <p>All deadlines are<b> 23:59 AoE (anywhere on Earth)</b></p>


            <UnderlineHeader>Focus on Boosting Generative AI with Semantic Technologies</UnderlineHeader>

            <p>In recent years, Large Language Models (LLMs) and similar generative techniques have emerged as powerful mechanisms for language understanding and generation of text, images, music, and video. We especially encourage submissions demonstrating how semantics, knowledge graphs, and generative AI can be combined to tackle real-world industrial challenges—whether by automating knowledge extraction, providing advanced automated reasoning capabilities, creating novel user experiences, or solving other problems.</p>


            <p>The Industry Track welcomes your case studies of success stories, as well as insightful discussions on challenges hindering the widespread adoption of knowledge graph, semantic technologies, and generative AI in applications and settings in industry (i.e., anywhere outside academia). Reports detailing the application and deployment experiences of recent research advancements to industry-relevant problems are also encouraged.</p>


            <p>Submissions should focus on demonstrating the business value and impact of employing knowledge graphs, ontologies, and semantic technologies—potentially in conjunction with genAI models and techniques—to solve real-world industry issues, serving as a competitive differentiator. Contributions from both small and large industrial organizations, as well as institutions from the public sector, are welcomed. Each submission must feature at least one author affiliated with a non-academic organisation.</p>

            <p>Come and join us at the ISWC 2026 Industry Track to share your experiences with the largest community of researchers and practitioners in the Knowledge Graph, ontologies, and Semantic Web domain!

            </p>

            <UnderlineHeader>Topics of Interest</UnderlineHeader>

            <p>Topics of interest include, but are not limited to, the following:</p>

            <CircleList>
                <li>Case studies describing the successful application of knowledge graphs, ontologies, and semantic technologies to address relevant problems in specific industrial domains.</li>
                <li>Analysis of how semantic technologies can generate business value.</li>
                <li>Assessments of the applicability of academic research outcomes to real-world industrial scenarios, focusing on issues such as data relevance and scalability.</li>
                <li>Integration of knowledge graphs and semantic technologies with other technologies, including


                    <ul style={{ listStyleType: "circle" }} className="ml-16">
                        <li>GenAI agents and agent-based systems, e.g., for structuring agentic memory (i.e., history of interaction in an environment) in agentic AI applications.</li>
                        <li>Large Language Models (LLMs): use cases and best practices for leveraging semantic structures and knowledge graphs to enhance LLM performance, as well as employing LLMs to enrich or refine semantic data.</li>
                        <li>Information retrieval, machine learning, natural language processing, human-AI interaction, distributed computing, and stream processing.</li>
                    </ul>
                </li>
                <li>Identification of new problems, use cases, and application areas that may catalyse further research in this field.</li>
                <li>Discussion reports that identify barriers hindering the widespread adoption of knowledge graphs, ontologies, and semantic technologies, along with proposed strategies to address these challenges.</li>
                <li>LLM-centric approaches that address challenges such as data integration, entity linking, disambiguation, or domain adaptation, highlighting how semantic models help overcome these challenges at an industrial scale.</li>
                <li>Neurosymbolic approaches to solve problems.</li>
                <li>Semantic models and technologies for good, for ICT4Development, or as a component of ICT4Peace.</li>



            </CircleList>

            <p>Differently from the in-use track, successful submissions to this track will ideally emphasize the majority of the following:</p>

            <CircleList>

                <li><b>Industry/Business problem:</b> A concise explanation of the specific issue.</li>
                <li><b>Limitations of (non-semantic) traditional solutions:</b> A discussion on why conventional methods failed to adequately address the problem.</li>
                <li><b>Motivation for the semantic technologies: </b>A clear description of the reasons driving the need for these technologies, including their expected impact on the concrete industrial use.</li>
                <li><b>Application of the semantic technologies:</b> A detailed account of how technology with knowledge graphs or ontologies  (and, if relevant, LLMs or other genAI use) were implemented to tackle the issue.</li>
                <li><b>Challenges:</b> A narrative on the strategies employed to navigate and resolve obstacles encountered during the implementation.</li>
                <li><b>Business value:</b> An analysis of the return on investment (ROI) and other quantitative measures or qualitative evidence demonstrating the business value derived from the technology.</li>
                <li><b>Scalability discussion:</b> An evaluation of the scalability of the technologies, considering their ability to expand and adapt to larger or more complex scenarios.</li>
                <li><b>Best practices and lessons learned:</b> A summary of the key learnings and effective strategies identified through the process.</li>
                <li><b>Description of real-world deployment:</b> A description of experiences and implementations in industrial settings (e.g., scale of deployment, dates launched and number of users, etc).</li>
                <li><b>Future research directions:</b> Insights into areas necessitating further investigation, including potential strategic applications and innovative use cases for knowledge graphs, semantic technologies, and LLMs.</li>
            </CircleList>

            <UnderlineHeader>Review Criteria</UnderlineHeader>

            <p>Submissions will be reviewed according to the following criteria:</p>

            <CircleList>
                <li>Value proposition in the specific industry/market (quantitative and/or qualitative).</li>
                <li>Quality and depth of the discussion regarding innovation, experiences, industry impact, lessons learned, and business value.</li>
                <li>Relevance and necessity of knowledge graph and semantic technologies, possibly combined with generative AI approaches to the submission.</li>
                <li>Interestingness for the ISWC audience and the potential discussions it could stimulate at the conference.</li>
            </CircleList>

            <UnderlineHeader>Submission Details</UnderlineHeader>

            <p>
                We invite submissions as an extended abstract of 2-3 pages (excluding references) formatted in the <ExternalLink href="https://ceurws.wordpress.com/2020/03/31/ceurws-publishes-ceurart-paper-style/">CEURART single-column style</ExternalLink>. (Note that the template changed in 2025; you must use the latest version, and do not modify it.) 
            </p>

            <p>Each abstract should describe the content of the proposed talk, which should be of a technical or strategic nature. <b> Pure or predominantly marketing/promotional material will be rejected.</b></p>

            <p>Submissions should be made via <ExternalLink href="https://easychair.org/my/conference?conf=iswc2026">EasyChair</ExternalLink> and will be reviewed by a committee of practitioners from industry and academia. At least one author of each accepted paper must register for the conference and present the paper.</p>

            <p>Accepted extended abstracts will be published with <ExternalLink href="https://ceur-ws.org/">CEUR-WS.org</ExternalLink>.</p>

            <UnderlineHeader>Presentation Format</UnderlineHeader>
            
            <p>Accepted extended abstracts will have a presentation slot at the main conference.</p>


            <UnderlineHeader>Industry Track Chairs</UnderlineHeader>

                        <p><b>Contact: <ExternalLink href="mailto:iswc2026-industry@easychair.org">iswc2026-industry@easychair.org</ExternalLink></b></p>
            
            
                <CircleList>

 <li><b>Maria Keet</b> — Meaningfy, Luxembourg, and Stellenbosch University, South Africa
            </li>
                    <li><b>Daria Stepanova</b> —  Bosch, Germany</li>
                </CircleList>
                   
            
            

        </BaseContainer>
    );
}

export default IndustryTrack;
