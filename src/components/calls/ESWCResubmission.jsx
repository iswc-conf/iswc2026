import React, { useRef } from "react";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import TextBlock from "../general/TextBlock";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";

export const ESWCResubmission = () => {

    const diff_track = useRef(null);
    const suppl_material = useRef(null);

    return (
        <BaseContainer>

            <Header>ESWC 2026 Resubmissions</Header>
<p>Following the decision that the Semantic Web Science Association (SWSA) is now overseeing both the International Semantic Web Conference (ISWC) and the European Semantic Web Conference (ESWC) series, we are introducing a new Resubmission Model.</p>

<p>Authors of rejected papers in the Research Track of ESWC 2026 can opt-in to re-submit an improved version of their paper to be considered at the next ISWC conference, to be held in Bari (Italy) in October 2026.</p>

<p>A so-called Resubmission Paper is now set up, following the same schedule proposed for the regular Research Track at ISWC 2026.</p>

            <UnderlineHeader>Paper Commitment</UnderlineHeader>

            <p>If you opt-in for this process, you will need to commit your paper. The process is very simple, you just need to provide the title, abstract, authors, and ESWC paper ID on EasyChair.</p>

<p>The deadline to commit your paper for resubmission is  April 11, 2026 (Anywhere on Earth).</p>

<p><b>Important:</b> This is a pre-requesite for your paper to be considered a resubmission.</p>

<UnderlineHeader>Paper Submission</UnderlineHeader>

<p>The full paper should be submitted in the regular ISWC 2026 deadline, together with a cover letter (as part of the Supplementary Material) detailing the changes you have performed in the paper.</p>

<p>Submissions without such a cover letter will be <b>desk-rejected</b>.</p>

<p>The full instruction for submitting your paper are found in the <ExternalLink href="https://iswc2026.semanticweb.org/#/calls/research">Call for Papers: Research Track page.</ExternalLink></p>

<UnderlineHeader>Paper Review</UnderlineHeader>

<p>Your resubmitted paper will then be transferred, along with your previous reviews, to a reviewer pool composed of at least some of the original reviewers (ideally all, although obviously cannot be guaranteed) and at least one new, fresh reviewer. If your paper has sufficiently addressed the comments raised in ESWC, your chances of getting accepted at ISWC might be higher, although there is no guarantee for acceptance.</p>

<p>For further enquiries about this process, you can contact the ISWC 2026 Research Track chairs<ExternalLink href="mailto:iswc2026-research@easychair.org">iswc2026-research@easychair.org</ExternalLink>.</p>





        </BaseContainer>
    );
}

export default ESWCResubmission;
