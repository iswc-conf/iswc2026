import React from "react";
import { useState, useRef } from "react";
import DescriptiveTable from "../general/DescriptiveTable";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header"
import { workshops } from "./data/workshops";
import DeclareSoon from "../general/declareSoon";

export const Workshops = () => {


    return (
        <BaseContainer>
        <Header>Accepted Workshops</Header>
        <DeclareSoon></DeclareSoon>
        {/** <DescriptiveTable title={"Workshop Title"} description={"Organizers"} data={workshops}></DescriptiveTable> */}
           
        </BaseContainer>
    );
};

export default Workshops;
