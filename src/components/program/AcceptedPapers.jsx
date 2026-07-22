import React from "react";
import { useState, useRef } from "react";
import { doctoralConsortium } from "./data/accepted/docoralConsortium";
import { researchTrack } from "./data/accepted/researchTrack";
import { resourceTrack } from "./data/accepted/resourceTrack";
import { inuseTrack } from "./data/accepted/inuseTrack";
import { industryTrack } from "./data/accepted/industryTrack"
import { posters } from "./data/accepted/posters"
import { demos } from "./data/accepted/demos"
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import PaperTable from "../general/PaperTable"
import DeclareSoon from "../general/declareSoon"
import LNCS_LOGO from "../../assets/logos/springer_lncs.png"

/**
 * Springer's own hosted copy of the LNCS logo, supplied by them for exactly
 * this purpose. To serve it from the site instead, save the file into
 * src/assets/logos/, import it, and swap the constant below.
 */
;

const PREVIOUS_PROCEEDINGS = "https://link.springer.com/conference/semweb";

export const AcceptedPapers = () => {

    return (
        <BaseContainer width="wide">
        <Header>Accepted Papers</Header>

        <UnderlineHeader>Proceedings</UnderlineHeader>

        <section className="iswc-proceedings">
          <img
            className="iswc-proceedings__logo"
            src={LNCS_LOGO}
            alt="Springer Lecture Notes in Computer Science"
            loading="lazy"
          />

          <div className="iswc-proceedings__text">
            <p>
              The proceedings of ISWC 2026 will be published by Springer in the{" "}
              <b>Lecture Notes in Computer Science (LNCS)</b> series.
            </p>
            <p className="mb-0">
              Proceedings from previous editions of ISWC are available on{" "}
              <ExternalLink href={PREVIOUS_PROCEEDINGS}>SpringerLink</ExternalLink>.
            </p>
          </div>
        </section>


        <UnderlineHeader>Doctoral Consortium</UnderlineHeader>

        <PaperTable data={doctoralConsortium}></PaperTable> 


        <UnderlineHeader>Research Track</UnderlineHeader>

        {/** <PaperTable data={researchTrack}></PaperTable> */}
               
        <UnderlineHeader>Resource Track</UnderlineHeader>

        {/**<PaperTable data={resourceTrack} /> */}

        <UnderlineHeader>In Use Track</UnderlineHeader> 
        {/**<PaperTable data={inuseTrack} /> */}

        <UnderlineHeader>Industry Track</UnderlineHeader>
        {/**<PaperTable data={industryTrack} /> */}

        <UnderlineHeader>Posters</UnderlineHeader>
        {/**<PaperTable data={posters} /> */}

        <UnderlineHeader>Demos</UnderlineHeader>
        {/**<PaperTable data={demos} /> */}

       
       
        </BaseContainer>
    );
};

export default AcceptedPapers;
