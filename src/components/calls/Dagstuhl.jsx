import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import banner from "./dashgtul.png"
import ExternalLink from "../general/ExternalLink";
import UnderlineHeader from "../general/UnderlineHeader";
import Card from "../general/Card";
import Accent from "../general/Accent";
import SubHeader from "../general/SubHeader";

export const Dagstuhl = () => {
    return (
    <BaseContainer>
     <div className="-mt-12 -mb-12 w-full">
    <img
      src={banner}
      alt="Dagstuhl Style Workshops banner"
      className="block mx-auto w-full max-w-6xl object-contain"
    />
  </div>

    <Header>Call for Dagstuhl Style Workshops – ISWC 2026</Header>

           <Card>
                    <p>Did you know that both Dagstuhl and Bari share a connection through their historic castles? While<b> Schloss Dagstuhl</b> in Germany is globally renowned today as a secluded sanctuary for computer scientists to tackle open problems, Bari’s iconic <b>Castello Svevo</b> (Swabian Castle) was famously a vibrant hub of philosophical and scientific exchange under Emperor Frederick II. </p>
                    </Card>

    <p>Welcome to <Accent>Barstuhl!</Accent>. Inspired by the highly successful Special Sessions at ISWC and the legendary Dagstuhl Seminar model, these workshops are designed to <b>encourage in-depth discussions</b> on challenges or emerging topics within a half-day or full-day event format. The goal is to create a <b>collaborative</b> and <b>open</b> environment for <b>brainstorming</b> and exploring new directions, channeling the spirit of Dagstuhl right here in Bari.</p>

    <p>These workshops will prioritise <b>dynamic discussions</b> and the presentation of fresh ideas and ongoing research, rather than requiring participants to submit traditional papers or give formal, sequential presentations. Proposers should focus on assembling a diverse<b> group of core participants</b> who will attend the workshop, including senior researchers, early-career researchers, and practitioners. The workshop will be open to all attendees of the conference.</p>
<p>The workshop structure should enable open dialogue and interdisciplinary exchange, ensuring an optimal group size for meaningful interaction. While shorter than traditional Dagstuhl Seminars, these "Barstuhl" sessions should emulate their emphasis on fostering creativity, collaboration, and innovation in a relaxed yet focused setting. This is ultimately a <b>WORK</b>shop!</p>

<SubHeader>Important Dates</SubHeader>

<p>
    <ul className="ul-disc ml-8">
        <li>Submission deadline: <b>June 30, 2026</b></li>
        <li>Notification to proposers:<b>July 3, 2026</b> </li>
        <li>Workshop website online:<b>July 17, 2026</b> </li>
        <li>Workshop days:<b>October 25-26, 2026</b> </li>
    </ul>
</p>
<p><b>All deadlines are 23:59 Anywhere on Earth (AoE).</b></p>


<UnderlineHeader>Submit your Barstuhl: Submission Guidelines</UnderlineHeader>

<p>Workshop proposals should be submitted via <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink>. Submissions must be formatted as a single PDF document no longer than 4 (four) pages, adhering to the LNCS guidelines. Detailed formatting instructions are available at <ExternalLink href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Springer’s Author Instructions.</ExternalLink></p>
    
    <SubHeader>The Barstuhl workshop proposal should include the following sections</SubHeader>

    <p>
        <ul className="ul-disc ml-8">

  <li>
    <b>Workshop Title and Acronym</b>
  </li>

  <li>
    <b>Workshop Type:</b> Indicate whether the workshop is novel or established.
  </li>

  <li>
    <b>Proposed Length:</b> Specify whether the workshop will be half-day or full-day.
  </li>

  <li>
    <b>Abstract:</b> Provide a concise 200-word summary describing the purpose of the workshop, its scope, and its intended contribution to the community.
  </li>

  <li>
    <b>Topics:</b> Specify the topics of interest that will be covered. Proposals should focus on a specific and selective theme, narrower than the main conference's broader scope. Proposals with significant thematic overlap with others may be merged or rejected.
  </li>

  <li>
    <b>Chairs:</b> Provide the names, affiliations, email addresses, homepages, and short biographies of each chair. Highlight their expertise in the workshop topic and their experience organizing relevant events. Proposals should have multiple chairs, ideally from different institutions, to ensure diverse perspectives. A maximum of five organizers is recommended, with a balance of junior and senior researchers.
  </li>

  <li>
    <b>Organisational Requirements:</b> List any specific equipment needed beyond standard projectors, such as poster stands, boards, or markers. Workshop proposers are encouraged to bring their own materials if necessary, as equipment availability will be confirmed with local organisers.
  </li>

  <li>
    <b>Motivation and Objectives:</b> Highlight the key challenges, emerging topics, or unresolved research questions the workshop seeks to address. Explain the importance and timeliness of the topic for the Semantic Web, Knowledge Graph, and related communities. Describe explicitly why this topic is best addressed through a discussion-led, outcome-oriented workshop rather than through standard paper presentations. Proposals are expected to articulate how the format will foster creativity, exchange across perspectives, and community building.
  </li>

  <li>
    <b>Expected Results/Outcomes:</b> Explain what are the expected results and outcomes of this workshop, and how you expect to achieve and disseminate them. Examples include a research agenda, a map of open challenges, a shared terminology or taxonomy, benchmark ideas, community recommendations, or plans for follow-up collaboration.
  </li>

  <li>
    <b>Workshop Format:</b> Describe the structure of the workshop. Dagstuhl-style workshops should prioritise open discussions, brainstorming, collaborative sessions, and synthesis activities rather than formal presentations. For example, are there a set of research questions that the organizers would like to cover? Or are the topics based on position statements submitted by expected attendees? Or is this an Open Spaces approach? Proposals should indicate how interaction will be facilitated and how participants will contribute actively. Provide a tentative schedule for activities like group discussions, breakout sessions, and plenary dialogues.
  </li>

  <li>
    <b>Target Audience and Participation:</b> Describe the intended mix of participants you are planning to involve, including senior researchers, early-career researchers, and practitioners. Explain how diverse expertise and perspectives will contribute to the workshop’s success. Proposers should describe their intended participant strategy, including how they will assemble a diverse and complementary group of participants. They are also encouraged to identify a core group of expected participants who can help anchor the discussion and ensure a focused, productive exchange, while keeping the workshop open to all conference attendees.
  </li>

        </ul>
    </p>

    <UnderlineHeader>Requirements upon Acceptance</UnderlineHeader>

    <p>I got my Barstuhl accepted, what’s next? Accepted workshops will follow these requirements:</p>

    <p>
        <ul className="ul-disc ml-8">
            
  <li>
    <b>Workshop Web Page:</b> The page should emphasize the open, interactive, and discussion-driven nature of the event. It should highlight the key challenges or topics to be discussed, as well as the intended format and expected outcomes.
  </li>

  <li>
    <b>Timeline for Deadlines:</b> Organisers should adhere to the indicative timeline for internal workshop deadlines provided by ISWC 2026. Workshops can allow for a maximum deadline extension of one week. These strict deadlines are necessary to align with the overall conference organization.
  </li>

  <li>
    <b>Organisational Responsibilities:</b> Organizers should document the outcomes of the workshop and share them through collaborative reports or summaries, so that the insights generated can benefit the wider community. Accepted workshops are expected to make a clear effort to ensure appropriate diversity and representation across the intended communities, perspectives, and career stages.
  </li>

  <li>
    <b>Participation Requirements:</b> At least one workshop organizer must register for the conference by the early bird registration deadline and attend the workshop in person. Organizers are expected to play an active role in facilitating discussions and ensuring productive engagement among participants.
  </li>

  <li>
    <b>Cancellation Policy:</b> Workshops may be canceled at the discretion of the workshop and tutorial track chairs if organisers fail to register by the early registration deadline. Cancellations may also occur if the proposed participant pool lacks sufficient diversity or representation from the intended communities.
  </li>

        </ul>
    </p>

    <UnderlineHeader>Contacts</UnderlineHeader>
<p>Contact: <ExternalLink href="mailto:iswc2026-ds-workshops@easychair.org">iswc2026-ds-workshops@easychair.org</ExternalLink>Workshop Chairs:</p>
<p>
    <ul className="ul-disc ml-8">


        <li>Jacopo de Berardinis - University of Liverpool, UK</li>
        <li>Shenghui Wang - University of Twente, The Netherlands</li>
    </ul>
    </p>

    <br></br>
    </BaseContainer>
    );
}

export default Dagstuhl;
