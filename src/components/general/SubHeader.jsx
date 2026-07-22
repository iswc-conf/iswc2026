import React from "react";

/** Third-level heading inside a section. */
export const SubHeader = ({ children, className = "" }) => (
  <h3 className={`iswc-subheading ${className}`.trim()}>{children}</h3>
);

export default SubHeader;
