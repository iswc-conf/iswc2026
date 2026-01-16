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
        <Header>Policy on the use of Generative AI (adapted from the ACM Policy on Authoring) </Header>
   

<p>


    <ul>

        <li><b>1.</b> Generative AI tools and technologies, including but not restricted to ChatGPT, Grok, Gemini, and Perplexity, may not be listed as authors of an ISWC Work. </li>
<li><b>2.</b> The use of generative AI tools and technologies to create content is permitted but must be fully disclosed in the Work and by ticking the Use of Generative AI tickbox in Easychair. Authors should include the following statement in a separate ‘Use of Generative AI’ section, just before the Bibliography in the Work: “ChatGPT was utilized to generate sections of this Work including” and then list what it was used for such as text, tables, images, graphs, code, data, citations, etc.</li>
<li><b>3. </b>If you are uncertain ­about the need to disclose the use of a particular tool, err on the side of caution, and include a disclosure.</li>
<li><b>4.</b> Basic word processing systems, search tools, and systems for language translations are considered exceptions to this disclosure requirement. They are generally permitted and need not be disclosed in the Work.</li>
   <li><b>5.</b> As the line between Generative AI tools and these basic word processing systems becomes blurred, this Policy will be regularly updated.</li>
   
    </ul>
</p>

        </BaseContainer>
    );
}

export default PolicyAI;
