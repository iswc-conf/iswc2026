import React from "react";
import { theme } from "../../theme.js"

export const Accent = ({children}) => {
    return (
        <span className="font-bold" style={{color:theme.colors.secondary}}>
        {children}
        </span>
    
    );
}

export default Accent;