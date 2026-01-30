import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import ExternalLink from "../general/ExternalLink";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";




export const Posters = () => {
    return (
        <BaseContainer>
        <Header>Call for Poster and Demos</Header>

        <p>The ISWC 2026 Posters and Demos Track offers an opportunity to showcase late-breaking research results, ongoing research or resource projects, speculative or innovative ideas, and interactive demonstrations. This track is designed to encourage dynamic discussions between presenters and participants, fostering feedback that can shape future research directions. These discussions will offer participants an effective way to broaden their knowledge of emerging research trends and to network with other researchers.</p>
    
        
        <SubHeader>Important Dates</SubHeader>

                    <p>
                <ul className="list-disc list-inside">

                    <li>Posters & demos submissions due:<b>	July 7th, 2026</b></li>
                    <li>Author notifications:<b> August 7th, 2026</b> </li>
                    <li>Camera-ready submissions due:<b>	August 21st, 2026</b></li>

                </ul>
            </p>
                        <p>
            All deadlines are<b> 23:59 AoE (anywhere on Earth)</b></p>
        
        <UnderlineHeader>Topics of Interest</UnderlineHeader>

        <p>We invite submissions relevant to the areas of Semantic Web, Knowledge Graphs, and Linked Data, which address, but are not limited to, the topics of the Research Track, the Resources Track, the In-Use Track, and the Industry Track. Visionary ideas, position statements, negative results, and outrageous ideas are also welcome</p>

        <p>
                <ul className="list-disc list-inside ml-8">

                    <li><b>Posters: </b>Submissions should describe research work (ongoing or completed), resource projects, or systems (both academic and commercial) relevant to the topics above.</li>
                   
                    <li><b>Demos: </b> Submissions should showcase innovative implementations, tools, or technologies from academia or industry. Demos must highlight a novel solution to a well-defined problem and avoid being purely promotional or commercial.</li>

                </ul>
            </p>

        <p>We welcome submissions from Industry, provided they focus on technical contributions rather than product advertisements. Authors of full papers accepted in the Research, Resources, and In-Use Tracks are encouraged to submit a poster or a demonstration. The submission should be formatted as other submissions to this track. Still, it must cite the accepted full paper and include a description of how it complements or adds value to the full paper. The added value could include:</p>
        

             <p>
                <ul className="list-disc list-inside ml-8">

                    <li>Extended results and experiments not presented in the full paper for reasons of space or</li>
                   
                    <li>A demonstration of a supporting prototype implementation</li>

                </ul>
            </p>

        <UnderlineHeader>Review Criteria</UnderlineHeader>

        <p>Submissions must clearly demonstrate relevance to the aforementioned topics of interest of ISWC 2026. Decisions about acceptance will be based on the relevance to the topics of interest, originality, potential significance, topicality, and clarity. All submissions to the Posters & Demos Track will be reviewed by at least three program committee members, including those related to the already accepted full papers. The purpose of the track is to allow the presentation of preliminary results to the community, provided that originality and significance of the contribution are ensured.</p>


        <UnderlineHeader>Submission Details</UnderlineHeader>

        <p>All submissions should follow the single anonymous submission policy (i.e., authors are named, reviewers are anonymous).</p>

        <p>
             <ul className="list-disc list-inside ml-8">
                <li>All submissions must be in English and in PDF format.</li>
<li>Submissions must adhere to the <ExternalLink href="https://ceurws.wordpress.com/2020/03/31/ceurws-publishes-ceurart-paper-style/">CEURART 1-column style</ExternalLink> (LNCS is not valid anymore). The title should use the emphasizing capitalized style, and submissions should not include page numbers.</li>
<li>For HTML submission guidance, please see the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/html-submission">HTML submission guide</ExternalLink>.</li>
<li>Poster submissions are at most 4 pages long, excluding “Declaration of use of generative AI” and references. Demo submissions are at most 5 pages long, excluding “Declaration of use of generative AI” and references. Authors will be granted one extra page when preparing their camera-ready version in case of acceptance in order to address the reviewers’ comments.</li>
<li>Submissions that exceed the given page limits or do not follow the CEURART guidelines may be rejected without review. Posters and demos accompanying an accepted full paper must be marked as such in the submission form and explicitly explain the additional value provided by the poster or demo in the submission itself.</li>
<li>Double submissions to any other conferences, workshops, or tracks of ISWC will be rejected.</li>
<li>For demo submissions, authors are strongly encouraged to include a link to an online demo or a video of the application to be presented in the submission.</li>
<li>We require the authors to specify the submission type (poster or demo) in the submission form at the time of submission.</li>
            </ul>
        </p>
      
        <p>All submissions must be made electronically via <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink>.</p>


        <UnderlineHeader>Conference Attendance and Presentation Format</UnderlineHeader>

        <p>At least one of the authors must register for the main conference and attend the Posters and Demos Session to present the work. The abstracts of accepted posters and demonstrations will be published on the conference website and compiled into a CEUR Proceedings for Web retrieval and archiving. The metadata for all accepted submissions will be included in the conference metadata corpus. Detailed information about metadata creation will be provided with the acceptance notification of the successful submissions.</p>

        <p>The presentation format for accepted posters will be a physical poster. For demos, authors are required to present both a physical poster and an on-site demo.
</p>
      <UnderlineHeader>Policy on the Use of Generative A.I.</UnderlineHeader>

        <p>All the submissions must comply with the <ExternalLink href="https://ceur-ws.org/GenAI/Policy.html">CEUR’s Policy on AI-Assisting Tools</ExternalLink>. This includes use for writing or preparing the manuscript and for carrying out or reporting the research. 
Authors remain fully responsible for the work and must disclose any covered use as required; non-compliant submissions may be rejected or withdrawn. 
In case of any questions regarding this policy, please contact the track chairs.
Each submission must include a section titled "Declaration of use of Generative AI” placed immediately before the references. Authors should briefly describe any Generative AI use and how they comply with the policy. This section does not count toward the maximum paper length.
</p>

<UnderlineHeader>Posters and Demos Chairs</UnderlineHeader>

            <p><b>Contact: <ExternalLink href="mailto:iswc2026-pd@easychair.org">iswc2026-pd@easychair.org</ExternalLink></b></p>


              <ul className="ul-disc">
                <li><b>Jiaoyan Chen</b> —  University of Manchester, UK</li>
        <li><b>Robert Hoehndorf</b> — King Abdullah University of Science and Technology, Saudi Arabi
</li>
        
      </ul>




        </BaseContainer>
    );
}

export default Posters;