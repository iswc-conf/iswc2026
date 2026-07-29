import React, { useRef } from "react";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import TextBlock from "../general/TextBlock";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLInk from "../general/ExternalLink"
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader"
import ExternalLink from "../general/ExternalLink";
import SubTitle from "../general/SubTitle";

export const JobFair = () => {

    const review_ref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <BaseContainer>

            <Header>ISWC 2026 Job Fair</Header>
            <SubTitle>Looking for your next role? Let sponsors and prospective employers find you.</SubTitle>

            As part of ISWC this year, we are organising a <b>Job Fair</b> for conference participants who are looking for their next opportunity: whether that's a PhD position, a postdoc, an industry research role, or a full-time position in industry.
            If you would like your CV to be shared with our sponsors and other prospective employers attending the conference, you can submit it through EasyChair.


            <SubHeader>How it works</SubHeader>

            <ol>
                <li>Go to the ISWC Job Fair track on <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink></li>
                <li>Submit your CV (PDF format) as a paper submission to the track.</li>
                <li>Add some keywords related to your area of interest or research expertise.</li>
                <li>Optionally, include a short note (in the abstract/comments field) on the kind of role you are looking for (e.g. PhD, postdoc, industry research, engineering) and your areas of interest.</li>
                <li>Submissions will be collected and shared with ISWC sponsors and other prospective employers participating in the Job Fair.</li>
            </ol>

            <SubHeader>Eligibility</SubHeader>

<p><b>CVs will only be shared if you are a registered participant of ISWC</b>. This is to ensure that sponsors are connecting with people they can meet in person.</p>

<ul>
    <li>You must be registered for ISWC at the time of submission (or provide proof of registration before the deadline below).</li>
    <li>We will cross-check submitted CVs against the conference registration list before sharing anything with sponsors or employers.</li>
    <li>CVs from individuals who are not registered participants will not be forwarded and will be removed from consideration</li>
</ul>

<SubHeader>Submission deadline: <b>October 1st, 2026</b></SubHeader>

<p>CVs received after this date may not be included in the materials shared with sponsors.</p>


<SubHeader>Privacy and use of your CV</SubHeader>

<ul>
    <li>Your CV will be shared only with ISWC sponsors and prospective employers participating in the Job Fair, for recruitment purposes.</li>
    <li>By submitting your CV, you consent to it being shared with this group for this purpose.</li>
    <li>If you wish to withdraw your CV at any point before it is distributed, please contact the organisers at <ExternalLink href="mailto:iswc2026-job-fair@easychair.org">iswc2026-job-fair@easychair.org</ExternalLink>.</li>
</ul>

<SubHeader>Questions?</SubHeader>

<p>If you have any questions about the Job Fair or the submission process, please contact <ExternalLink href="mailto:iswc2026-job-fair@easychair.org">iswc2026-job-fair@easychair.org</ExternalLink>.</p>

<p>We look forward to helping connect our community with great opportunities!</p>

            
        </BaseContainer>
    );
}

export default JobFair;
