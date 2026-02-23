import React from "react";
import { useState, useRef } from "react";
import DescriptiveTable from "../general/DescriptiveTable";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header"
import { workshops } from "./data/workshops";
import DeclareSoon from "../general/declareSoon";
import SubHeader from "../general/SubHeader";

export const Workshops = () => {


    return (
        <BaseContainer>
        <Header>Accepted Workshops</Header>
        <center>
        <p className="pt-2 font-semibold">Click on a workshop title below to open its full description.</p></center>
        <DescriptiveTable title={"Workshop Title"} description={"Organizers"} data={workshops}></DescriptiveTable>
        </BaseContainer>
    );
};

export default Workshops;
