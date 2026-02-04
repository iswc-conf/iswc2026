import React from "react";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import DeclareSoon from "../general/declareSoon";
import Card from "../general/Card";

export const Timeline = () => {

    const timeline_theme = {
    colors: {
      event: "rgb(206, 70, 70)",
      submission: "#3d8cd1",
      notification: "#FB8C00",
      cameraready: "#922be5",
      other: "#000000"
    },
  };



    const events = [



        /** FEBRUARY */
          { type: "month", label: "February 2026" },
        { date: '10-Feb-26', title: 'Workshop Proposals Deadline', color: timeline_theme.colors.submission },
        { date: '24-Feb-26', title: 'Workshop Notifications to Proposers', color: timeline_theme.colors.notification },
        
        /** MARCH */
        { type: "month", label: "March 2026" },
        { date: '20-Mar-26', title: 'Workshop Website and CfP Available Online', color: timeline_theme.colors.other },

        { date: '03-Apr-26', title: 'Challenge Workshops Release Datasets', color: timeline_theme.colors.other },

        /** MAY */
        { type: "month", label: "May 2026" },
        { date: '02-May-26', title: 'Research, Resource, In-Use Track Abstract Submission', color: timeline_theme.colors.submission },
        { date: '07-May-26', title: 'Research, Resource, In-Use Track Full Paper Submission', color: timeline_theme.colors.submission },

        /** JUNE */
        { type: "month", label: "June 2026" },
        { date: '01-Jun-26', title: 'Doctoral Consortium Track Submission', color: timeline_theme.colors.submission },
        { date: '09-Jun-26', title: 'Tutorials Track Submission', color: timeline_theme.colors.submission },
        { date: '23-Jun-26', title: 'Tutorials Track Notification', color: timeline_theme.colors.notification },
        { date: '24-Jun-26', title: 'Research, Resource, In-Use Track Notifications', color: timeline_theme.colors.notification },
        { date: '26-Jun-26', title: 'Challenge Solution Submission', color: timeline_theme.colors.submission },

        /** JULY */
        { type: "month", label: "July 2026" },
        { date: '06-Jul-26', title: 'Doctoral Consortium Notification', color: timeline_theme.colors.notification },
         { date: '07-Jul-26', title: 'Posters and Demos Track Submission', color: timeline_theme.colors.submission },
        { date: '08-Jul-26', title: 'Research, Resource, In-Use Track Camera Ready', color: timeline_theme.colors.cameraready },
        { date: '10-Jul-26', title: 'Challenge Results', color: timeline_theme.colors.notification },
        { date: '24-Jul-26', title: 'Workshop Paper Submission', color: timeline_theme.colors.submission },
        { date: '21-Jul-26', title: 'Tutorial Website Online', color: timeline_theme.colors.other },
        { date: '27-Jul-26', title: 'Revised Doctoral Consortium Submission', color: timeline_theme.colors.submission },
         { date: '31-Jul-26', title: 'Tutorial Materials Available on the Website (if any)', color: timeline_theme.colors.other },

        /** AUGUST */
        { type: "month", label: "August 2026" },
         { date: '03-Aug-26', title: 'Doctoral Consortium Track Camera Ready', color: timeline_theme.colors.cameraready },
        { date: '07-Aug-26', title: 'Posters and Demos Track Notification', color: timeline_theme.colors.notification },
        { date: '21-Aug-26', title: 'Workshop Program with Accepted Papers Available Online', color: timeline_theme.colors.notification },
        { date: '21-Aug-26', title: 'Posters and Demos Track Camera Ready', color: timeline_theme.colors.cameraready },
        
        /** OCTOBER */
        { type: "month", label: "ISWC 2026 Events in October" },
        { date: '25-26 Oct-26', title: 'Workshop Days', color: timeline_theme.colors.event },
        { date: '25-26 Oct-26', title: 'Tutorial Days', color: timeline_theme.colors.event },
        { date: '26 Oct-26', title: 'Doctoral Consortium Day', color: timeline_theme.colors.event },
        { date: '27-29 Oct-26', title: 'Conference Days', color: timeline_theme.colors.event },

        
    ];

    


    return (
<>
  <UnderlineHeader>Colors Meanings</UnderlineHeader>

   <div className="my-2 mx-4 mb-8">
      {/* Legend */}
      <div className="container">
        <ul className="list-none space-y-1 ul-disc">
              <li>
     
            <span style={{ color: timeline_theme.colors.event }}>
              <b>Event</b>
            </span>
          </li>
          <li>
        
            <span style={{ color: timeline_theme.colors.submission }}>
              <b>Submissions</b>
            </span>
          </li>
          <li>
         
            <span style={{ color: timeline_theme.colors.notification }}>
              <b>Notifications</b>
            </span>
          </li>
          <li>
          
            <span style={{ color: timeline_theme.colors.cameraready }}>
              <b>Camera-Ready (impacting SPRINGER)</b>
            </span>
          </li>
          <li>
         
            <span style={{ color: timeline_theme.colors.other }}>
              <b>All other</b>
            </span>
          </li>
        </ul>
      </div>
      </div>
  
 <UnderlineHeader>Timeline</UnderlineHeader>
 <Card>
   <p><em>This timeline will be updated as new information, news, and events become available. Please review it periodically for the latest updates and newly announced dates.</em></p>
 </Card>
  <div className="flex justify-start items-start min-h-screen">
   

      {/* Timeline */}
      <div className="container my-2 mx-4 mb-8">
<div className="relative container my-2 mx-4 mb-8">
  {/* Global vertical line */}
  <div className="absolute left-5 top-0 h-full w-px bg-slate-300" />

  {events.map((event, index) => {
if (event.type === "month") {
  return (
    <div key={index} className="relative pl-8 py-6">
      <div className="inline-block ml-4 bg-white border-2 border-black rounded-lg px-6 py-2 shadow-sm">
        <h2 className="text-lg font-bold text-black">
          {event.label}
        </h2>
      </div>
    </div>
  );
}

    return (
      <div key={index} className="relative pl-8 py-4 group">
        {/* Dot */}
        <div className="absolute left-5 top-6 w-3 h-3 bg-black rounded-full -translate-x-1/2" />
<time
  style={{ backgroundColor: "#000000ff", color: "white" }}
  className="inline-flex items-center justify-center w-fit text-sm font-bold uppercase rounded-full px-5 py-1 mb-2"
>
  {event.date}
</time>

        <div
          className="text-lg font-semibold ml-4"
          style={{ color: event.color }}
        >
          {event.title}
        </div>
      </div>
    );
  })}
</div>
      </div>
    </div>
</>

    );
};









