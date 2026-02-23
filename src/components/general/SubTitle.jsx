import React from "react";
import { theme } from "../../theme.js"

export const SubTitle = ({children}) => {
    return (
        <>
          <p style={{ color: theme.colors.primary }}  className="text-2xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">{children}</p>
        </>
    
    );
}

export default SubTitle;