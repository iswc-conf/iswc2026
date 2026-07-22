import React from "react";
import Page from "../general/Page";
import ExternalLink from "../general/ExternalLink";
import UnderlineHeader from "../general/UnderlineHeader";
import CommitteeSection from "./CommitteeSection";
import organizers from "../../assets/people/organizing_commitee_list";

const Committees = () => (
  <Page width="wide">
    <CommitteeSection
      word="Organizing Committee"
      users={organizers}
    />

    <UnderlineHeader>Contact Us</UnderlineHeader>
    <p className="text-center">
      <ExternalLink href="mailto:iswc2026@easychair.org">
        iswc2026@easychair.org
      </ExternalLink>
    </p>
  </Page>
);

export default Committees;
