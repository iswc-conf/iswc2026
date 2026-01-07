import React from "react";
import { theme } from "../../theme.js"

export const ExternalLink = ({ href, children }) => {
  return (
    <>
    &nbsp;
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline  z-10 relative font-bold"
      style={{color: theme.colors.secondary}}
    >
    {children}
    </a>
    &nbsp;
    </>
  );
};

export default ExternalLink;