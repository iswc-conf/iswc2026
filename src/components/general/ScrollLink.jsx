import React from "react";
import { theme } from "../../theme.js";

export const ScrollLink = ({ targetRef, children }) => {
  const handleClick = () => {
    targetRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      &nbsp;
      <span
        onClick={handleClick}
        className="underline cursor-pointer font-bold relative z-10"
        style={{ color: theme.colors.secondary }}
      >
        {children}
      </span>
      &nbsp;
    </>
  );
};

export default ScrollLink;