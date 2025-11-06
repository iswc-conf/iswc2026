import React from "react";
import { useState, useRef } from "react";
import { tutorials } from "./data/tutorial";
import { sponsored_tutorials } from "./data/sponsoredtutorial";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";

export const AcceptedTutorials = () => {
    return (
        <BaseContainer>
        <Header>Accepted Tutorials</Header>
        <DeclareSoon></DeclareSoon>
        {/**<DescriptiveTable data={tutorials} title={"Tutorial Title"} description={"Organizers"}></DescriptiveTable> */}
        <br></br>
        <Header>Accepted Sponsored Tutorials</Header>
        <DeclareSoon></DeclareSoon>
        {/** <DescriptiveTable data={sponsored_tutorials} title={"Tutorial Title"} description={"Organizers"}></DescriptiveTable> */}
        </BaseContainer>
    );
};

export default AcceptedTutorials;
