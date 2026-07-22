import React from "react";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import SubHeader from "../general/SubHeader"
import ExternalLink from "../general/ExternalLink"

export const Visa = () => {
    return (
        <BaseContainer>
            <Header>Visa Information</Header>

            <p>This page provides information about visa requirements and the application process. Please note that the submission of all required documentation does not guarantee that a visa will be granted</p>


            <SubHeader>Visa Requirements</SubHeader>

           <p> All non-Italian nationals entering Italy must carry valid travel documentation. Delegates who hold neither an EU passport nor a valid Schengen visa are strongly advised to check as soon as possible whether they require a visa to enter Italy, as visa application procedures may take up to 120 days.</p>
           <p>
Visa regulations depend on the applicant’s nationality, country of residence, purpose of stay, and length of stay. For official and updated information regarding visa requirements and application procedures, please consult the following websites:</p>

            <ul>
                    <li><ExternalLink href="https://vistoperitalia.esteri.it/?lang=en_US&utm_source=chatgpt.com">https://vistoperitalia.esteri.it/?lang=en_US&utm_source=chatgpt.com</ExternalLink></li>
                    <li><ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/</ExternalLink></li>
                    <li><ExternalLink href="https://www.esteri.it/en/servizi-consolari-e-visti/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/">https://www.esteri.it/en/servizi-consolari-e-visti/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/</ExternalLink></li>


                </ul>

            <p>
                Participants are also encouraged to contact the Italian Diplomatic or Consular Representation in their country of residence for detailed and official instructions applicable to their individual case.
            </p>

            <SubHeader>Exemption of Visa (Short Term Stay)</SubHeader>
            The list of exempt countries and further details on visa exemptions can be found on the official website of the Ministry of Foreign Affairs of Italy:

            <ul>
                    <li><ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/</ExternalLink></li>

                </ul>


            <UnderlineHeader>Visa Application Procedure</UnderlineHeader>

            <p>If a visa is required, delegates should apply through the Italian Diplomatic and Consular Representation in their country of residence and submit all required supporting documentation as indicated by the Italian Ministry of Foreign Affairs and International Cooperation.</p>
            <p>Please note that the submission of the required documentation does not guarantee that a visa will be issued.</p>


            <SubHeader>Invitation Letter</SubHeader>

            <p>Participants requiring a visa may request an official invitation letter for visa purposes by contacting: <ExternalLink href="mailto:ISWC2026@cicsud.it">ISWC2026@cicsud.it</ExternalLink></p>
<p>Please include:</p>
           <ul>

                <li>“Visa Request – ISWC 2026” in the subject line of the email; </li>
                <li>Your full name;</li>
                <li>affiliation/institution;</li>
                <li>registration details, if available. </li>
            </ul>

           <p>Please note that invitation letters (visa support letters) will only be issued to participants who have completed their conference registration.</p>

           <p>The invitation letter is intended exclusively to support the participant’s visa application and does not imply any financial or legal responsibility on the part of the conference organizers.</p>

            <SubHeader>Disclaimer</SubHeader>

            <p>The Organizing Committee is not authorized to intervene with Embassies or Consulates on behalf of participants and cannot influence the outcome of visa applications.
All expenses related to conference registration, travel, accommodation, and visa applications are the sole responsibility of the participant. The Organizing Committee does not accept responsibility for any losses or expenses incurred due to the rejection or delay of a visa application.
</p>

            <SubHeader>Contact Information</SubHeader>

            <p>For any inquiries regarding visa support documentation, please contact: </p>

                            <ul>
                    <li><ExternalLink href="mailto:ISWC2026@cicsud.it">ISWC2026@cicsud.it</ExternalLink></li>

                    <li><ExternalLink href="https://www.cicsud.it/">Cic Sud: Centro Italiano Congressi Bari</ExternalLink></li>
          

                </ul>


    

        </BaseContainer>
    );
};

export default Visa;