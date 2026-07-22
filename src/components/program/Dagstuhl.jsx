import React from "react";
import { useState, useRef } from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubTitle from "../general/SubTitle";
import { dagshtul } from "./data/dagshtul";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";

export const DagstuhlWorkshops = () => {


    return (
        <BaseContainer width="wide">
        <Header> Accepted Dagstuhl-style Workshops</Header>
        <SubTitle>Dagstuhl-style workshops running at the conference</SubTitle>
        <DeclareSoon></DeclareSoon>
        {/** <DescriptiveTable data={dagshtul} title={"Workshop Title"} description={"Organizers"}></DescriptiveTable>}*/}
        </BaseContainer>
    );
};

export default DagstuhlWorkshops;
