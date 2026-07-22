import React from "react";

/**
 * Legacy wrapper that used to apply the page's reading column. <Page> now owns
 * that, so this only groups its children.
 */
export const TextBlock = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export default TextBlock;
