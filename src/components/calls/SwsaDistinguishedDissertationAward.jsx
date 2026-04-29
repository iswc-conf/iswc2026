import React from "react";
import SWSAImage from "../../assets/logos/swsa.png";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader"
import ExternalLink from "../general/ExternalLink"

export const SwsaDistinguishedDissertationAward = () => {
    return (
        <BaseContainer>
            <Header>SWSA Distinguished Dissertation Award</Header>

            <br></br>

            <p>The Semantic Web Science Association (SWSA) invites applications for the 2026 SWSA Distinguished Dissertation Award. The award will be presented during the International Semantic Web Conference (ISWC), taking  place in Bari, Italy on 25 - 29 October, 2026.
            <br></br>For more information see <ExternalLink href="https://swsa.semanticweb.org/content/swsa-distinguished-dissertation-award">https://swsa.semanticweb.org/content/swsa-distinguished-dissertation-award</ExternalLink></p>
            <SubHeader>Eligibility</SubHeader>

            <p>
Eligible doctoral dissertations are those which present innovative research results related to the combination of semantics, data and the Web, which have been awarded a PhD strictly <b>between January 01, 2025 and June 30, 2026</b>, and which have not previously been nominated for this award. The selection of the dissertation will be based on the originality, significance, and impact of the work. Evidence of such impact includes (but is not limited to) publications at highly selective conferences and journals in the field.</p>


<SubHeader>Award committee</SubHeader>
<p>
 The award committee, which will comprise two members of SWSA and a number of external experts, will be the final arbiter in the decision process. The award committee may decide to consult additional external assessors and reserves the right to not award the prize if the applications do not meet the expected quality level.</p>

<SubHeader>The Award</SubHeader> 
<p>The award includes a certificate and a 1000 euros payment. A free registration to ISWC 2026 will also be covered.</p>

<UnderlineHeader>How to Apply</UnderlineHeader>
<p>
Submissions must include the following documents, which must be submitted via easychair on or before July 6, 2026:</p>

<p>
<ul className="list-disc list-inside ml-8">
   <li>A pdf file of the dissertation.</li>
   <li>A short (no more than 5 pages in total) paper summarizing the key contributions of the dissertation. The paper should be in PDF, should be edited according to the Springer publication guideline for Lecture Notes in Computer Science (LNCS), and should cover the following elements:
    <ul style={{ listStyleType: "circle" }} className="list-inside ml-16">
       <li>Motivation and objectives of the research.</li>
       <li>Description of the approach, highlighting its key aspects and the novelty with respect to the state of the art.</li>
       <li>Major results.</li>
       <li>Description of the evaluation methods used to validate the results.</li>
       <li>Significance of the work, open issues, and future directions of work.</li></ul></li>
    <li>A document that lists your publications that are associated with the dissertation, with links to the corresponding pdf files.</li>
   <li>A letter from the student’s supervisor or institution that confirms that the student was awarded his/her PhD between January 01, 2025 and June 30, 2026.</li>
</ul>
</p>


        </BaseContainer>
    )
}