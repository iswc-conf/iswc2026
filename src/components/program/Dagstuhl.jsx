import React from "react";
import { useState, useRef } from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import { dagshtul } from "./data/dagshtul";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";

export const DagstuhlWorkshops = () => {


    return (
        <BaseContainer>
        <Header> Accepted Dagstuhl-style Workshops</Header>
        <DeclareSoon></DeclareSoon>
        {/** <DescriptiveTable data={dagshtul} title={"Workshop Title"} description={"Organizers"}></DescriptiveTable>}*/}
        </BaseContainer>
    );
};

export default DagstuhlWorkshops;
