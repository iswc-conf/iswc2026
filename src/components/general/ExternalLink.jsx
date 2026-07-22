import React from "react";

/**
 * Link to another site. Always opens in a new tab with the rel attributes
 * required to avoid leaking the opener reference.
 */
export const ExternalLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`iswc-external-link ${className}`.trim()}
  >
    {children}
  </a>
);

export default ExternalLink;
