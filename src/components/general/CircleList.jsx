import React from "react";
import { theme } from "../../theme.js"

export const CircleList = ({children}) => {
    return (
        <p>
        <ul className="ml-8 list-disc">
        {children}
        </ul>  
        </p>
    );
}

export default CircleList;