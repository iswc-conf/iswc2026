import React from "react";
import { useRef } from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import ExternalLink from "../general/ExternalLink";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";

export const DoctoralConsortium = () => {

     const diff_track = useRef(null);
     const suppl_material = useRef(null);

    return (
        <BaseContainer>
            <Header>Call for Doctoral Consortium Submissions</Header>

            The <b>ISWC 2026 Doctoral Consortium (DC)</b> will take place as part of the <ExternalLink href="https://iswc2026.semanticweb.org/">25th International Semantic Web Conference</ExternalLink>. This forum will provide PhD students with an opportunity to:


            <p>
                <ul className="list-disc list-inside ml-8">
                    <li>Present and discuss their research ideas in a supportive, formative, and yet critical environment;</li>
                    <li>Receive feedback from mentors, typically senior members of the Semantic Web research community, and peers;</li>
                    <li>Network and build collaborations with other members of the community.</li>
                </ul>
            </p>
            <p>The event is intended for students who have articulated a reasonably detailed research proposal, preferably supported by some preliminary results, but are not yet on the final stretch of their thesis, such that the feedback gathered at the DC will have a maximal impact. The aim is to support the students in refining their proposal and to suggest possible ways to improve their research plan and to achieve results with a greater prospective impact. This event is dedicated to students who HAVE NOT already participated in the DC in any previous ISWC edition, and in general, priority will be given to students who have never participated in a DC/PhD symposium before</p>
            
            <p>The submissions to the Doctoral Consortium should be structured like a research proposal (see “Submission Details” below). Please note that anything that looks like a research paper will be rejected without review.</p>

            <p>All proposals submitted to the Doctoral Consortium will undergo a rigorous review process. The reviewers will provide detailed and constructive feedback and select which submissions will be presented at the Doctoral Consortium. If accepted, students will have to register and attend the full-day event. We stress that accepted students commit to attending the full day.</p>

            <p>We anticipate having student travel grants to cover some of the travel expenses to the conference.</p>


            <SubHeader>Important Dates</SubHeader>


            <p>
                <ul className="list-disc list-inside">

                    <li>Submission due<b>	June 1, 2026</b></li>
                    <li>Notifications<b> July 6, 2026</b> </li>
                    <li>Revised Version Addressing Reviewers’ Feedback<b>	July 27, 2026</b></li>
                    <li>Camera-ready Submissions Due <b>August 3, 2026</b></li>
                    <li>Doctoral Consortium <b>October 26, 2026</b></li>

                </ul>
            </p>
            <p>
            All deadlines are<b> 23:59 AoE (anywhere on Earth)</b></p>


        <UnderlineHeader>Topic of Interest</UnderlineHeader>

        <p>We are the doctoral consortium of the ISWC. As such, submissions should broadly fit the topics of interest of the ISWC research track.</p>

        <UnderlineHeader>Submission Details</UnderlineHeader>

        <p>Students should submit a 7-page description of their PhD research proposal. All proposals have to be submitted electronically via the <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink> conference submission system.
</p>

<p>The submission should address the following questions:
</p>

<p>
                    <ul className="list-disc list-inside ml-8">

<li><b>1. Problem statement: </b> What is the problem that you are trying to solve?</li>
<li><b>2. Importance:</b> Why is this problem important and for whom? Who will benefit and who should care? What is the impact of solving this problem (for the research community, or society in general)?</li>
<li><b>3. Related work: </b> Has a solution to this problem been attempted before, and how? If you are addressing an existing problem, what are the limitations of current solutions? What are you adding that is novel? Why? If not, have research efforts addressed or solved similar or analogous problems? What can you learn from these efforts? </li>
<li><b>4. Research question(s) and hypotheses:</b> What research questions do you plan to explore? What hypotheses do you make in formulating your solution? </li>
<li><b>5. Preliminary results: </b> Do you have any preliminary results that inform your research questions or hypotheses? If so, what are these results, and what do they reveal?</li>
<li><b>6. Evaluation:</b> How will you know you’ve answered your question(s)? What are the methods you apply to test your hypotheses? Have you identified criteria to measure the degree of success of your solution?</li>
<li><b>7. Reflection and future work:</b> Are there any limitations in your approach? What are your planned next steps to complete your investigation?</li>

                </ul>
</p>

<p>Please aim to answer the above questions with as much detail as possible, especially questions 2 and 4. You should provide as much detail as possible to allow a knowledgeable reviewer from the Semantic Web community, but possibly not an expert in your topic, to assess the validity of your research contribution. All submissions should include references. References will not count towards the page limit. All submissions exceeding 7 pages will be rejected without review.</p>

<p>The student should be the sole author of the submission. The supervisor(s) should be acknowledged at the end of the submission, together with a funding agency or any other party that supports or contributes to the research.</p>

<p>Submissions must use the new CEUR-ART style. For details on the CEUR-ART style, see <ExternalLink href="https://ceur-ws.org/HOWTOSUBMIT.html">Publishing at CEUR-WS.org</ExternalLink>.  In case generative A.I. was used in the preparation of the submission, the  <ExternalLink href="https://ceur-ws.org/GenAI/CEUR%20AI%20Policy.pdf">corresponding CEUR guidelines</ExternalLink> must be followed, including a declaration on how such tools were used. For guidance on HTML submissions, please refer to the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/html-submission">HTML Submission Guide</ExternalLink>. They must be submitted online via<ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink> (choosing the option: Doctoral Consortium), in PDF or HTML format.</p>

<p>DC Proceedings will be published with<ExternalLink href="http://ceur-ws.org/">CEUR-WS.org</ExternalLink></p>


<UnderlineHeader>Policy on the Use of Generative A.I.</UnderlineHeader>
<p>All the submissions must comply with the <ExternalLink href="https://ceur-ws.org/GenAI/Policy.html">CEUR’s Policy on AI-Assisting Tools</ExternalLink>. This includes use for writing or preparing the manuscript and for carrying out or reporting the research. 
Authors remain fully responsible for the work and must disclose any covered use as required; non-compliant submissions may be rejected or withdrawn. 
In case of any questions regarding this policy, please contact the track chairs.
Each submission must include a section titled "Declaration of use of Generative AI” placed immediately before the references. Authors should briefly describe any Generative AI use and how they comply with the policy. This section does not count toward the maximum paper length.
</p>

            <UnderlineHeader>Doctoral Consortium Track Chairs</UnderlineHeader>
            
            <p><b>Contact: <ExternalLink href="mailto:iswc2026-doctoral-consortium@easychair.org">iswc2026-doctoral-consortium@easychair.org</ExternalLink></b></p>


              <ul className="ul-disc">
        <li><b>Anna Lisa Gentile</b> — IBM Research
</li>
        <li><b>Aidan Hogan</b> —  DCC, Universidad de Chile</li>
      </ul>




        </BaseContainer>
    );
}

export default DoctoralConsortium;