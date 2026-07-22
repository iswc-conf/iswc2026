import React from "react";
import UnderlineHeader from "./UnderlineHeader";

/**
 * Section heading for a talk: a label such as "Keynote Talk" followed by the
 * speaker's name in the secondary colour.
 */
export const TalkHeading = ({ label, speaker }) => (
  <UnderlineHeader>
    {label}: <span className="iswc-talk-speaker">{speaker}</span>
  </UnderlineHeader>
);

export default TalkHeading;
