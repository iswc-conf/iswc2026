import React from "react";
import Page from "../general/Page";
import CommitteeSection from "./CommitteeSection";
import program_commitee_list from "../../assets/people/program_commitee_list";

const ProgramCommitee = () => (
  <Page width="wide">
    <CommitteeSection
      word="Program Committee"
      subtitle="The reviewers assessing submissions to ISWC 2026"
      users={program_commitee_list}
      hideImage
    />
  </Page>
);

export default ProgramCommitee;
