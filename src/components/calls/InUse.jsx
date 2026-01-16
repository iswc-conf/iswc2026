import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";
import SubHeader from "../general/SubHeader";



export const InUse = () => {
  return (
    <BaseContainer>
      <Header>Call for In-Use Track Papers</Header>
      <DeclareSoon></DeclareSoon>


    </BaseContainer>
  );
}

export default InUse;