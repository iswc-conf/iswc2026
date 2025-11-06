import React from "react";
import BaseContainer from "../general/BaseContainer";
import WhovaAgenda from "./WhovaAgenda";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";

export const Schedule = () => {
    const containerStyle = {
        display: 'flex',
        padding: '5px',
    };

    const wrapperStyle = {
        width: '560px', // Set the width to match the iframe
    };

    const legendItemStyle = {
        margin: '8px 0',
        color: '#333',
    };



    return (
        <BaseContainer>
        
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
             <Header>Schedule</Header>
             <DeclareSoon></DeclareSoon>

             {/**

                <p>Google Calendar: <a href="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=MDE3YTRiNmU5YWFjYTk0Zjc4ZDgyNTMwNjIxMzZlN2U0ZmNkNjRjMjFlYmZkZjM1NTVmNWRkYWUzM2Y3ZjNiOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239e69af&mode=AGENDA&dates=20251102/20251106"
                    target="_blank"
                    style={{ 'color': '#e94607', 'text-decoration': 'underline' }} rel="noreferrer">
                    here
                </a></p>

                <div style={containerStyle}>
                    <div style={wrapperStyle}>
                        <p style={legendItemStyle}><strong>WS</strong> - workshop</p>
                        <p style={legendItemStyle}><strong>T</strong> - tutorial</p>
                        <p style={legendItemStyle}><strong>DS</strong> - Dagsthul style workshop</p>
                        <p style={legendItemStyle}><strong>SWC</strong> - Semantic Web Challenge</p>
                        <p style={legendItemStyle}><strong>J</strong> - Journal Session</p>
                        <p style={legendItemStyle}><strong>S</strong> - Main track Session</p>
                    </div>
                </div>

                <WhovaAgenda />
                 */}

                
            </div>
        </BaseContainer>
    )
}