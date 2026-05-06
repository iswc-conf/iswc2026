import React from "react";
import './attending.css'
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


            <SubHeader>Visa Application Information</SubHeader>

            <p>Details on how to apply for a Visa to enter Italy can be found on the following websites:</p>

            <p>
                <ul className="ul-disc ml-8">
                    <li><ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/</ExternalLink></li>
                    <li><ExternalLink href="https://vistoperitalia.esteri.it/?lang=en_US">https://vistoperitalia.esteri.it/?lang=en_US</ExternalLink></li>
                    <li><ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/</ExternalLink></li>

                    <li><ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/</ExternalLink></li>

                </ul>


            </p>

            <SubHeader>Exemption of Visa (Short Term Stay)</SubHeader>
            The list of exempt countries and further details on visa exemptions can be found on the official website of the Ministry of Foreign Affairs of Italy:

            <p>
                <ul className="ul-disc ml-8">
                    <li><ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/</ExternalLink></li>

                </ul>
            </p>


            <SubHeader>Visa Application Information for ISWC2026 Participants</SubHeader>

            <p>All non-Italian nationals entering Italy must provide valid travel documentation. Delegates who hold neither an EU passport nor a Schengen visa should check as soon as possible the Italian Ministry of Foreign Affairs’ website to see if they require a Visa to enter Italy, as visa applications can take as long as 120 days. Visa regulations depend on your nationality and country of origin (visit <ExternalLink href="https://vistoperitalia.esteri.it/?lang=en_US">https://vistoperitalia.esteri.it/?lang=en_US</ExternalLink>  for more information). For the most updated information regarding visa requirements, we suggest you contact your local consulate for full and official instructions on the specific visa regulations and application procedures that apply to you.</p>

            <p>If a visa is required, delegates should apply to the Italian Diplomatic and Consular Representations in their country of residence with the documents outlined on the Ministry of Foreign Affairs’ website <ExternalLink href="https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/">https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/</ExternalLink>.</p>


            <SubHeader>Invitation Letter Details</SubHeader>

            <p>An invitation letter to the Congress may be requested writing to ISWC2026@cicsud.it explicitly indicating the visa request and the event acronym (ISWC 2026) in the object of the email.
                Please note that the visa guarantee letter will only be available to participants already registered to the conference.</p>

            <p>
                <b>
                    Presentation of the requested documentation does not guarantee that the visa will be issued.</b></p>

            <SubHeader>Contact Information</SubHeader>

            <p>For any inquiries, please contact:  </p>

                            <p>
                <ul className="ul-disc ml-8">
                    <li><ExternalLink href="mailto:ISWC2026@cicsud.it">ISWC2026@cicsud.it</ExternalLink></li>

                    <li><ExternalLink href="https://www.cicsud.it/">Cic Sud: Centro Italiano Congressi Bari</ExternalLink></li>
          

                </ul>
           
                
                </p>


    







        </BaseContainer>
    );
};

export default Visa;