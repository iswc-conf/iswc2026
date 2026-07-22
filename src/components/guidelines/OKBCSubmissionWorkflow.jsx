import React from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubTitle from "../general/SubTitle";
import DeclareSoon from "../general/declareSoon";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import ORKGSchema from "../../assets/ORKGWorkflow.jpg"

export const OKBCSubmissionWorkflow = () => {
    return (
        <BaseContainer>
            <Header>ORKG Submission Workflow</Header>
            <SubTitle>Submitting your work through the Open Research Knowledge Graph</SubTitle>

             
      <div
        style={{
          display: "flex",
          justifyContent: "center", // horizontal center
          alignItems: "center",     // vertical center (optional if container has height)
          marginTop: "2rem",        // optional spacing from header
        }}
      >
        <img
          src={ORKGSchema}
          alt="ORKG Workflow Schema"
          style={{
            width: "60%",
            objectFit: "contain", // keeps aspect ratio
          }}
        />
      </div>

        </BaseContainer>
    );
}

export default OKBCSubmissionWorkflow;
