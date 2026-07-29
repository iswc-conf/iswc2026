import React from "react";

/**
 * Link to another site. Always opens in a new tab with the rel attributes that
 * avoid leaking the opener reference, and carries a small arrow marking it as
 * an external link.
 *
 * The arrow is a child of the anchor (not a CSS ::after) so that the same-page
 * scroll link, which shares the underline styling, does not inherit it.
 */
export const ExternalLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`iswc-external-link ${className}`.trim()}
  >
    {children}
    <svg
      className="iswc-external-link__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  </a>
);

export default ExternalLink;
