import React from "react";

/** Page title. One per page - renders the page's single <h1>. */
export const Header = ({ children, className = "" }) => (
  <h1 className={`iswc-heading ${className}`.trim()}>{children}</h1>
);

export default Header;
