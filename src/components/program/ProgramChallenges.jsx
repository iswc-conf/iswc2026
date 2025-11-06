import React from "react";
import { useState, useRef} from "react";
import { challenges } from "./data/challenges";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";

export const ProgramChallenges = () => {
    return (
        <BaseContainer>
        <Header>Accepted Challenges</Header>
        <DeclareSoon></DeclareSoon>
        {/** <DescriptiveTable data={challenges} title={"Challenge Title"} description={"Organizers"}></DescriptiveTable> */}
        </BaseContainer>
    );
};

export default ProgramChallenges;
