import React from "react";

/**
 * Scrolls to another section of the same page.
 *
 * Rendered as a <button> rather than a <span> so it is reachable by keyboard
 * and announced correctly by screen readers.
 */
export const ScrollLink = ({ targetRef, children }) => {
  const handleClick = () => {
    targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button type="button" className="iswc-scroll-link" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ScrollLink;
