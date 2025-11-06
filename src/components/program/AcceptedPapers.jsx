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
import PaperTable from "../general/PaperTable"
import DeclareSoon from "../general/declareSoon"

export const AcceptedPapers = () => {

    return (
        <BaseContainer>
        <Header>Accepted Papers</Header>

        <DeclareSoon></DeclareSoon>
            
        <UnderlineHeader>Doctoral Consortium</UnderlineHeader>

        {/** <PaperTable data={doctoralConsortium}></PaperTable> */}


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
