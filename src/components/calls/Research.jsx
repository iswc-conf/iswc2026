import React, { useRef } from "react";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import TextBlock from "../general/TextBlock";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";

export const Research = () => {

    const diff_track = useRef(null);
    const suppl_material = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <BaseContainer>

            <Header>Call for Research Track Papers</Header>
            <DeclareSoon></DeclareSoon>
      


        </BaseContainer>
    );
}

export default Research;
