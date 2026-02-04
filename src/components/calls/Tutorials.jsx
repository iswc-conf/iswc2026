import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";


export const Tutorials = () => {
    return (
        <BaseContainer>
            <Header>Call for Tutorials</Header>
            <p>The International Semantic Web Conference (ISWC) 2026 is pleased to announce the Call for Tutorials. Continuing the tradition of excellence, the 2026 edition will feature a comprehensive tutorial program serving the diverse interests and expertise of our audience. These tutorials aim to provide attendees with insights into foundational and cutting-edge topics, practical applications, and the latest advancements in Semantic Web, Knowledge Graphs, and Linked Data technologies.</p>

            <SubHeader>Important Dates</SubHeader>

            <p>
                <ul className="list-disc list-inside">

                    <li>Submission deadline: <b>June 9, 2026</b></li>
                    <li>Notification to proposers: <b>June 23, 2026</b></li>
                    <li>Tutorial website online: <b> July 21, 2026</b> </li>
                    <li>Materials available on the website (if any): <b> July 31, 2026</b> </li>
                    <li>Tutorial days: <b>October 25-26, 2026</b></li>

                </ul>
            </p>

            <UnderlineHeader>Tutorial Topic and Format</UnderlineHeader>

            <p>Tutorials are an excellent opportunity for participants to expand their expertise in a subject area. For early-career researchers, they can serve as a gateway to foundational or advanced topics, particularly those tied to research methodologies and Semantic Web technologies. For experienced researchers, tutorials can provide an avenue to refine their knowledge, acquire specialized skills, or explore new methodologies that enhance their existing research areas. For industry practitioners, these sessions can offer insights and the foundational tools needed to kickstart innovative projects and applications.
</p>
<p>For ISWC attendees, we envision tutorials of the following types:</p>

            <p>
                <ul className="list-disc list-inside ml-8">
                    <li>Tutorials introducing core concepts and established practices in Semantic Web and Knowledge Graph domains (e.g., RDF, OWL, SPARQL, SHACL, and linked data principles) or foundational research methodologies (e.g., FAIR principles, Open Science practices).</li>
<li>Tutorials exploring intersections between Semantic Web/Knowledge Graph technologies and other fields (e.g., big data, machine learning, generative AI, multi-agent systems) to examine how they complement each other and the potential for innovative applications.</li>
<li>Tutorials focusing on cutting-edge trends, specific tools, or applications within the Semantic Web and Knowledge Graph space.</li>

                </ul>
            </p>

            <p>The tutorials will be held during the pre-conference days, October 25th and 26th, divided into four slots each day (9:00-10:40, 11:10-12:50, 14:10-15:50, 16:20-18:00). The following formats are proposed for tutorials programs:</p>


            <p>
                <ul className="list-disc list-inside ml-8">
                    <li><b>Half-day tutorials:</b> Two slots in either the morning or afternoon, ideal for concise, targeted introductions to a topic.</li>
<li><b>Full-day tutorials:</b> Covering all four slots with three breaks, designed for in-depth exploration of topics or interconnected themes, similar to a condensed course.</li>
<li><b>Special sessions:</b> Highly focused tutorials lasting a single slot, perfect for niche topics of significant relevance or timeliness, often led by recognized experts or authoritative figures in the field.</li>
                </ul>
            </p>

            <p>Tutorials should be dynamic and engaging, avoiding exclusively lecture-based formats. At least half of the session time should involve interactive elements, such as hands-on activities, group discussions, or collaborative exercises.</p>

            <UnderlineHeader>Review Criteria</UnderlineHeader>

            <p>Tutorials proposals will be evaluated based on their quality and appeal to a broad segment of the Semantic Web and Knowledge Graph community. Proposals should meet the following standards:</p>

                    <p>
                <ul className="list-disc list-inside ml-8">
          <li>The tutorial topic aligns with the general scope of the conference.</li>
<li>The proposal clearly defines a specific focus on a technology, challenge, or application.</li>
<li>There is compelling evidence of substantial interest within the community.</li>
<li>The proposed format integrates interactive or collaborative elements.</li>
<li>The tutorial fits within the broader program, offering complementary insights and avoiding significant overlap with other accepted sessions (mergers may be suggested for similar proposals).</li>
                </ul>
            </p>


            <UnderlineHeader>Submission Intructions</UnderlineHeader>

            <p>Tutorial proposals should be submitted via EasyChair at <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">https://easychair.org/conferences/?conf=iswc2026</ExternalLink></p>

            <p>Submissions must be in English and formatted as a single PDF document no longer than 4 pages, adhering to the LNCS guidelines. Detailed formatting instructions are available at <ExternalLink href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Springer’s Author Instructions</ExternalLink>.
</p>

<p><b>All tutorial proposals should include the following sections:</b></p>

<SubHeader>Content, format and program:</SubHeader>

                    <p>
                <ul className="list-disc list-inside">
<li><b>Title and acronym:</b> Provide a concise, descriptive title and an appropriate acronym for the tutorial.</li>
<li><b>Abstract: </b>A 200-word summary highlighting the tutorial's purpose, goals, and core content.</li>
<li><b>Detailed description:</b> Include an overview of the tutorial's content, the expected learning outcomes, and a description of the presentation and interaction style (e.g., hands-on, discussion-based, lecture).</li>
<li><b>Motivation: </b>Explain why the topic is timely and particularly relevant for ISWC participants. Address how this tutorial differentiates itself from or complements similar tutorials at other events.</li>
<li><b>Format:</b> Specify the tutorial length (full day, half day, or special session) with a clear justification for the chosen format. If proposing a full-day session, explain why a half-day format would not suffice.</li>
<li><b>Schedule:</b> Provide a detailed timeline of the tutorial program, breaking it into specific slots. Proposers are encouraged to structure the program in self-contained slots to enable participants to switch between tutorials during breaks if needed.</li>
                </ul>
            </p>

<SubHeader>Tutorial type and intended audience:</SubHeader>

                    <p>
                <ul className="list-disc list-inside">
<li><b>Type:</b> Indicate whether the tutorial is introductory, specialized/advanced, application/tool-focused, or domain-specific.</li>
<li><b>Level: </b>Specify the level of the tutorial (beginner, intermediate, advanced).</li>
<li><b>Target Audience:</b> Define the intended audience, including the estimated number of participants and their profiles.</li>
<li><b>Prerequisites: </b>Outline any prior knowledge or skills required for attendees to fully engage with the tutorial content.</li>
                </ul>
            </p>

<SubHeader>Presenters’ information:</SubHeader>

                    <p>
                <ul className="list-disc list-inside">
<li>Provide the name, affiliation, email address, homepage, and a brief biography (one paragraph) for each presenter.</li>
<li>Highlight each presenter’s expertise in the tutorial topic, their teaching background, and prior experience with tutorials or similar events.</li>
                </ul>
            </p>

<SubHeader>Materials:</SubHeader>
<p>Describe the materials to be used during the tutorial (e.g., slides, handouts, software, online resources). Indicate when the materials will be made available and under what conditions (e.g., openly licensed, restricted to attendees, time-limited access).</p>

<SubHeader>Previous editions and related events (if applicable):</SubHeader>

<p>Provide links to previous editions of the tutorial or similar events, along with materials from those sessions. Include data such as the number of attendees and feedback received to justify the continuation of the tutorial in 2026.</p>

<SubHeader>Other requirements:</SubHeader>

<p> Specify any audio-visual or technical needs, such as specific software, hardware, or internet access. Mention any special room setups or additional requirements needed to facilitate the tutorial.</p>

<UnderlineHeader>Requirements Upon Acceptance</UnderlineHeader>

<p>Accepted tutorials will be required to create a dedicated tutorial webpage that provides detailed information about the program and any relevant materials that participants may need to download or review prior to or during the event. The suggested timeline for setting up the webpage is outlined in the “Important dates” section.</p>

<p>For tutorials involving software or online services, the following guidelines are strongly recommended:</p>

                    <p>
                <ul className="list-disc list-inside ml-8">
<li>Clear prerequisites and step-by-step instructions for downloading/installing software or registering for online services should be made available on the tutorial webpage well in advance. This ensures participants have sufficient time to prepare before the tutorial begins.</li>
<li>Allocate time at the beginning of the tutorial to guide participants through any necessary installation or registration processes. Organisers should not assume that all attendees will arrive fully prepared.</li>
<li>Develop a contingency plan to address potential issues such as limited Wi-Fi bandwidth (e.g., providing USB drives with large files) or the unavailability of online services (e.g., pre-recorded videos of demonstrations).</li>
                </ul>
            </p>

            <p>
                All tutorial presenters are required to register for the conference by the early bird registration deadline and attend the tutorial in person.

            </p>

            <p>The tutorial and workshop track chairs reserve the right to cancel tutorials if the organisers fail to complete the registration process in a timely manner.</p>


            <UnderlineHeader>Research Track Chairs</UnderlineHeader>
            
            <p><b>Contact: <ExternalLink href="mailto:iswc2026-ws@easychair.org">iswc2026-ws@easychair.org</ExternalLink></b></p>


              <ul className="ul-disc">
        <li><b>Andrei Ciortea</b> — University of St.Gallen (Switzerland) and Inria, Université Côte d’Azur, CNRS, I3S (France)
</li>
        <li><b>Ilaria Tiddi </b> —  LVrije Universiteit Amsterdam (The Netherlands)
</li>
      </ul>




        </BaseContainer>
    );
}

export default Tutorials;
