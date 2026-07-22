import React from "react";
import { useState, useRef } from "react";
import { tutorials } from "./data/tutorial";
import { sponsored_tutorials } from "./data/sponsoredtutorial";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";
import TutorialTable from "../general/TutorialTable";

export const AcceptedTutorials = () => {
    return (
        <BaseContainer>
        <Header>Accepted Tutorials</Header>
        <div className="text-center"><p className="pt-2 font-semibold">Click on a tutorial title below to open its full description.</p></div>
        <TutorialTable title={"Tutorial Title"} description={"Authors"} data={tutorials} header_title={"Description"}></TutorialTable>
      
        </BaseContainer>
    );
};

export default AcceptedTutorials;
