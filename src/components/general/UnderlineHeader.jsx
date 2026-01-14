import React from "react";
import './attending.css';
import { theme } from "../../theme";

export const UnderlineHeader = ({children}) => {
    return (
        <>
        <br></br>
        <h2  style={{ color: theme.colors.primary, paddingTop: "30px", borderBottom: "2px solid", borderBottomColor: theme.colors.primary}} className="h2-border-bottom">{children}</h2> 
        </>
    
    );
}

export default UnderlineHeader;