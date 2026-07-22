import React from "react";

/**
 * Bulleted list. Styling now comes from the global <ul> rules, so this is a
 * thin semantic wrapper.
 */
export const CircleList = ({ children, className = "" }) => (
  <ul className={className}>{children}</ul>
);

export default CircleList;
