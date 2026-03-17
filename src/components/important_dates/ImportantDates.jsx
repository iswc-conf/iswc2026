import React from "react";
import { Timeline } from "./timeline";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader";
import Card from "../general/Card";

const ImportantDates = () => {
    return (
        <BaseContainer>
            <Header>Important Dates</Header> 
 <Card>
   <p><em>This timeline will be updated as new information, news, and events become available. Please review it periodically for the latest updates and newly announced dates.</em></p>
 </Card>
                  
            <Timeline />
                           
                            


        </BaseContainer>
    );
};


export default ImportantDates;
