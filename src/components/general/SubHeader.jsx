import React from "react";
import { theme } from "../../theme.js"

export const SubHeader = ({children}) => {
    return (
        <>
        <br></br>
         <h2 style={{ color: theme.colors.accent}}  className="text-xl font-semibold mt-4 mb-1">{children}</h2>
         <br></br>
        </>
    
    );
}

export default SubHeader;