import React from "react";

const BaseContainer = ({children}) => {
  return (
    <>
    <div className="mt-[150px] px-4 pt-2 bg-white flex items-center justify-center"></div>
    <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12 max-w-5xl mx-auto px-4">{children}</div>
    </>
  );
};

export default BaseContainer;