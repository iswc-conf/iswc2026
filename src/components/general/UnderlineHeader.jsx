import React from "react";

/** Section heading with the terracotta rule beneath it. */
export const UnderlineHeader = ({ children, className = "", ...rest }) => (
  <h2 className={`iswc-rule-heading ${className}`.trim()} {...rest}>
    {children}
  </h2>
);

export default UnderlineHeader;
