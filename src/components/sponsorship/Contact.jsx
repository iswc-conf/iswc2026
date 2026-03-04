import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubTitle from "../general/SubTitle";
import UnderlineHeader from "../general/UnderlineHeader";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink";


export const WhySponsor = () => {
    return (
        <BaseContainer>
        <Header>Contacts</Header>

        <p>Interested in sponsoring ISWC 2026? Contact us to learn about available sponsorship opportunities and how you can get involved.</p>

       <p>
        
            <ul className="ul-disc">
                <li><b>Peter Haase</b> - <ExternalLink href="mailto:ph@metaphacts.com.org">ph@metaphacts.com</ExternalLink>
        </li>
                <li><b>Juan Sequeda</b> - <ExternalLink href="mailto:juan.sequeda@servicenow.com">juan.sequeda@servicenow.com</ExternalLink></li>

                <li><b>Wen Zhang</b> - <ExternalLink href="mailto:zhang.wen@zju.edu.cn">zhang.wen@zju.edu.cn</ExternalLink></li>
              </ul>

            </p>
        







        </BaseContainer>
    );
}

export default WhySponsor;