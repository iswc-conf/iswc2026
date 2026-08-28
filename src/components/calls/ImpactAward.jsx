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

export const ImpactAward = () => {

    const review_ref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <BaseContainer>

            <Header><s>SWSA Impact Award</s></Header>
            <SubTitle>The Semantic Web Science Association Impact Award</SubTitle>

            <p className="iswc-callout"><b>The SWSA committee did not reach agreement to confer the inaugural ISWC Impact Award in 2026. It will be presented for the first time at ISWC 2027.</b></p>
<s>
            <p>The focus of this award is to recognise and celebrate <b>contributions</b> made possible by the Semantic Web that have delivered an exemplary <b>positive impact on broader society</b>.</p>

            <p>See more at <ExternalLInk href="https://swsa.semanticweb.org/awards/swsa-impact-award/">SWSA Impact Award Official Page</ExternalLInk></p>
    

            <SubHeader>Contributions</SubHeader>

            <p>Contributions are any technical artifacts (e.g., software, libraries, languages, specifications, datasets, ontologies, applications, platforms, portals, best practices, among others). The contribution can be credited to a person or a small group of people (five suggested as maximum) who played a key role in its creation and adoption. The contribution should clearly have its roots in Semantic Web standards, research and/or systems.</p>


            <SubHeader>Submission</SubHeader>

            <p>To be considered for the award, we are soliciting *self-nominations* by those playing a key role in the creation and adoption of the contribution, to whom the award will be credited.

If you wish to promote a third-party contribution, we highly encourage you to rather directly contact the key people behind it and invite them to self-nominate. (Third-party nominations will not be considered.)</p>


            <SubHeader>Evaluation</SubHeader>

            <p>The evaluation criteria and process for nomination are detailed on the SWSA website:

<ExternalLInk href="https://swsa.semanticweb.org/awards/swsa-impact-award/">SWSA Impact Award Official Page</ExternalLInk>

<s>The winner for 2026 will be announced at ISWC 2026.</s> The award includes certificates, a free registration to ISWC 2026, and an opportunity to give a talk on the contribution at the conference.</p>

</s>


            
        </BaseContainer>
    );
}

export default ImpactAward;
