import React from "react";
import { useState, useRef } from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DescriptiveTable from "../general/DescriptiveTable";
import DeclareSoon from "../general/declareSoon";
import { dags } from "./data/dagshtul";

export const DagstuhlWorkshops = () => {


    return (
        <BaseContainer width="wide">
        <Header> Accepted Dagstuhl-style Workshops</Header>
                <div className="text-center">
                <p className="pt-2 fw-semibold">Click on a workshop title below to open its full description.</p></div>
                <DescriptiveTable title={"Dagstuhl-style Workshops Title"}  data={dags} header_title={"Abstract"} unit="Dagstuhl-style Workshops"></DescriptiveTable>
        </BaseContainer>
    );
};

export default DagstuhlWorkshops;
