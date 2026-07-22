import React from "react";

/** Centred tagline shown directly beneath a <Header>. */
export const SubTitle = ({ children, className = "" }) => (
  <p className={`iswc-subtitle ${className}`.trim()}>{children}</p>
);

export default SubTitle;
