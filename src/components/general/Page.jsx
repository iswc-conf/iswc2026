import React from "react";

/**
 * Standard page shell for every content route.
 *
 * Handles the fixed-navbar offset and the reading-width column so individual
 * pages never have to reinvent their own spacing.
 *
 * @param {'default'|'wide'} width  'wide' opts into the full-width column,
 *                                  for tables and committee grids.
 */
export const Page = ({ children, width = "default", className = "" }) => (
  <main
    id="main-content"
    className={`iswc-page ${width === "wide" ? "iswc-page--wide" : ""} ${className}`.trim()}
  >
    <div className="iswc-page__inner">{children}</div>
  </main>
);

export default Page;
