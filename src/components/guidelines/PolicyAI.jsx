import React from "react";
import BaseContainer from "../general/BaseContainer";
import DeclareSoon from "../general/declareSoon";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import Card from "../general/Card";

export const PolicyAI = () => {
    return (
        <BaseContainer>
        <Header>Policy on the use of Generative AI </Header>

<p>We adhere to <ExternalLink href="https://www.acm.org/publications/policies/new-acm-policy-on-authorship">ACM Policy on Authorship</ExternalLink>, specifically to the principles and guidelines listed under the “Criteria for Authorship”, regarding the use of Generative AI technologies for authoring papers:</p>
<br></br>
<Card>
    <em>“Generative AI tools and technologies, such as ChatGPT, may not be listed as authors of an ACM published Work. The use of generative AI tools and technologies to create content is permitted but must be fully disclosed in the Work [and the use of Generative AI checklist in Easychair]. For example, the authors could include the following statement in [a separate ‘Use of Generative AI’] section of the Work: ChatGPT was utilized to generate sections of this Work, including text, tables, graphs, code, data, citations, etc.). If you are uncertain ­about the need to disclose the use of a particular tool, err on the side of caution, and include a disclosure in the acknowledgements section of the Work. (…) Basic word processing systems that recommend and insert replacement text, perform spelling or grammar checks and corrections, or systems that do language translations are to be considered exceptions to this disclosure requirement and are generally permitted and need not be disclosed in the Work. As the line between Generative AI tools and basic word processing systems like MS-Word or Grammarly becomes blurred, this Policy will be updated.”</em>
</Card>


        

        </BaseContainer>
    );
}

export default PolicyAI;
