import React from "react";
import { useState, useRef} from "react";
import { challenges } from "./data/challenges";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubTitle from "../general/SubTitle";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";

export const ProgramChallenges = () => {
    return (
        <BaseContainer width="wide">
        <Header>Accepted Challenges</Header>
        <SubTitle>Challenges running at ISWC 2026</SubTitle>
        <DeclareSoon></DeclareSoon>
        {/** <DescriptiveTable data={challenges} title={"Challenge Title"} description={"Organizers"}></DescriptiveTable> */}
        </BaseContainer>
    );
};

export default ProgramChallenges;
