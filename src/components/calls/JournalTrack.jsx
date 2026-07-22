import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import SubHeader from "../general/SubHeader";
import ExternalLink from "../general/ExternalLink";

export const JournalTrack = () => {
    return (
        <BaseContainer>
            <Header>Journal Track Call for Track Proposals</Header>
            <p>Following the success at ISWC 2025 this year, we are soliciting a call for Journal Track sessions. These sessions will be held during the main conference.</p>

            <p>The aim of the Journal Track sessions is to facilitate cross-pollination between sub-communities, as well as overall strengthen the ties and pipelines between ISWC and the journals that serve our community.</p>

            <SubHeader>Important Dates</SubHeader>

            <ul>
                <li>Journal Track Session Proposals Due: <b>June 30th, 2026</b></li>
<li>Notifications to Proposers: <b>July 15th, 2026</b></li>
<li>All deadlines are <b>23:59 AoE (Anywhere on Earth).</b></li>
            </ul>


            <UnderlineHeader>Eligibility</UnderlineHeader>

            <p>This track is open to any journal related to the Semantic Web or the principled use of related artifacts (e.g., ontologies, semantics, or semantic technologies). Proposal authors should be editors of the journal, and if they are not editors in chief, then should be submitted under their auspices.</p>

            <UnderlineHeader>Session Format Guidance</UnderlineHeader>

            <p>A session should be considered to be 90 minutes long. The session’s internal organization is up to the proposer. However, we encourage that the session proposal has a coherent theme, or that the Editors have otherwise curated a selection of timely, impactful, or prescient papers from their journal’s recent issues.</p>

            <UnderlineHeader>Proceedings</UnderlineHeader>

            <p>

                To encourage participation and otherwise facilitate attendance, there is capacity for inclusion in the ISWC proceedings and event, beyond the presentation during the proposed session.

            </p>

            <ul>
                    <li>Journal Spotlight</li>
                    <li>Companion Proceedings
                          <ul>
                            <li>This is an optional venue, where the proposers may opt-in so that presenters may have some publication, which allows for attendance. Ideally, all presenters would provide a contextualization of their presented journal article. Ideally, the proposers (i.e., the editors) would provide an editorial-style introduction which discusses the entire session and its context.</li>
                            <li>This is currently anticipated to be a CEUR volume.</li>
                        </ul>
                    </li>
                    <li>First-come, first-serve slots at the Poster & Demo session
                        <ul>
                            <li>This must be communicated clearly, so that space can be reserved.</li>
                        </ul>
                    </li>
                </ul>


            <UnderlineHeader>Review Criteria</UnderlineHeader>
            <p>   The organizing committee will consider the organization of the session, as well as the selected papers for presentation and discussion. Therefore, proposers must ensure unfettered access to the selected papers both during the review process and to attendees of the conference (at least during the conference duration). All submissions will be evaluated along the following review criteria:</p>

            <SubHeader>Scientific and Community Impact and Relevance</SubHeader>

            <ul>
                <li>How did the collection break new ground?</li>
                <li>How did the collection fill important gaps?</li>
                <li>How did the collection otherwise advance the state of the art?</li>
                <li>Is the collection of papers of interest to society in general?</li>
                <li>What impact has this collection of papers had, scientifically and socially?</li>
                <li>Is the collection relevant to the Semantic Web community, in particular along its emphasized themes for ISWC 2026?</li>
                </ul>

            <SubHeader>Availability</SubHeader>

               <ul>
                    <li>Are the selected papers available for attendees of the proposed session to read without a paywall?</li>
                               </ul>


            <SubHeader>Attendance</SubHeader>
<ul>
    
                    <li>Is at least one author of each of the selected papers confirmed to attend ISWC 2026?</li>
                    <li>Is at least one editor confirmed to attend ISWC 2026?</li>
                </ul>

            <UnderlineHeader>Submission Details</UnderlineHeader>
         
  <ul>
        <li>All papers and abstracts must be submitted electronically via <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair (choose "Journal Session Proposals").</ExternalLink></li>
      <li>Proposals must not exceed 4 pages (excluding references). Proposals that exceed the page limit will be rejected without review.</li>
      <li>All submissions must be in English.</li>
      <li>Submissions must be in PDF or HTML formatted in the CEURART 1-column style (LNCS is no longer valid).</li>
      <li>The title should use emphasizing capitalized style, and submissions must not include page numbers.</li>
      <li>For HTML submission guidance, see the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/html-submission">HTML Submission Guide.</ExternalLink></li>
      <li>ISWC 2026 submissions for the journal track are necessarily not anonymous.</li>
      <li>At least one proposer must register for the conference and chair the session.</li>
      <li>At least one author of each selected paper must register for the conference and present the paper.</li>
                </ul>

<UnderlineHeader>Contact</UnderlineHeader>

<p>For further information contact:<ExternalLink href="mailto:iswc2026-journal@easychair.org"> iswc2026-journal@easychair.org</ExternalLink></p>
        </BaseContainer>
    );
}

export default JournalTrack;