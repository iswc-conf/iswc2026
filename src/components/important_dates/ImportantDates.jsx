import React from "react";
import { Timeline } from "./timeline";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";

const ImportantDates = () => {
    return (
        <BaseContainer>
            <div className="flex justify-center items-center"> {/* Ensures the content is centered vertically and horizontally on the page */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-0 mx-2 my-10 w-full max-w-6xl"> {/* Adjust max width as necessary */}
                    <div className="m-2 lg:col-span-8 flex flex-col justify-center items-center">
                        <div className="container mx-auto px-4 lg:px-8">
                            <Header>Important Dates</Header>
                            
                            {/* About Content */}
                            <div className="bg-white p-6 lg:p-12 rounded-lg shadow-md">
                                
                                <Timeline />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </BaseContainer>
    );
};


export default ImportantDates;
