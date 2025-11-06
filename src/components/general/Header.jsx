import React from "react";
import { theme } from "../../theme.js"

export const Header = ({children}) => {
    return (
        <>
         <p style={{ color: theme.colors.secondary }}  className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">{children}</p>
        </>
    
    );
}

export default Header;