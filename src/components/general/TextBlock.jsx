import React from "react";
import { theme } from "../../theme.js"

export const TextBlock = ({children}) => {
    return (
        <>
         <div className="flex justify-start items-start flex-col  pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32  overflow-visible text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2 overflow-auto">
        {children}
        </div>
        <br></br>
        </>
    
    );
}

export default TextBlock;