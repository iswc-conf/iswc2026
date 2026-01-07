import React from "react";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import DeclareSoon from "../general/declareSoon";

export const Timeline = () => {

    const timeline_theme = {
    colors: {
      event: "#a93737ff",
      submission: "#1E88E5",
      notification: "#FB8C00",
      readyspring: "#43A047",
      readyceur: "#8E24AA",
      other: "#000000"
    },
  };



    const events = [
        { date: '10-Feb-26', title: 'Workshop Proposals Deadline', color: timeline_theme.colors.submission },
        { date: '24-Feb-26', title: 'Workshop Notifications to Proposers', color: timeline_theme.colors.notification },
        { date: '20-Mar-26', title: 'Workshop Website and CfP Available Online', color: timeline_theme.colors.other },

        { date: '03-Apr-26', title: 'Challenge Workshops Release Datasets', color: timeline_theme.colors.other },
        { date: '26-Jun-26', title: 'Challenge Solution Submission', color: timeline_theme.colors.submission },
        { date: '10-Jul-26', title: 'Challenge Results', color: timeline_theme.colors.notification },
        { date: '24-Jul-26', title: 'Workshop Paper Submission', color: timeline_theme.colors.submission },

        { date: '21-Aug-26', title: 'Workshop Program with Accepted Papers Available Online', color: timeline_theme.colors.notification },
        { date: '25-26 Oct-26', title: 'Workshop Days', color: timeline_theme.colors.event },

        
    ];

    


    return (
<>
  <UnderlineHeader>Colors Meanings</UnderlineHeader>

   <div className="my-2 mx-4 mb-8">
      {/* Legend */}
      <div className="container">
        <ul className="list-none space-y-1">
              <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.event }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.event }}>
              <b>Event</b>
            </span>
          </li>
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.submissions }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.submission }}>
              <b>Submissions</b>
            </span>
          </li>
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.notifications }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.notification }}>
              <b>Notifications</b>
            </span>
          </li>
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.readyspring }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.readyspring }}>
              <b>Camera-Ready (impacting SPRINGER)</b>
            </span>
          </li>
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.readyceur }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.readyceur }}>
              <b>Camera-Ready (CEUR companion volume)</b>
            </span>
          </li>
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.other }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.other }}>
              <b>All other</b>
            </span>
          </li>
        </ul>
      </div>
      </div>
  
 <UnderlineHeader>Timeline</UnderlineHeader>
 <DeclareSoon></DeclareSoon>
  <div className="flex justify-start items-start min-h-screen">
   

      {/* Timeline */}
      <div className="container my-2 mx-4 mb-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative pl-8 py-4 group"
          >
            {/* Vertical line and dot */}
            <div className="flex flex-col items-start before:absolute before:left-5 before:top-6 before:h-full before:w-px before:bg-slate-300 after:absolute after:left-5 after:w-3 after:h-3 after:bg-black after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
              
              {/* Date above title */}
              <time
                style={{ backgroundColor: "#000000ff" , color:"white"}}
                className="flex items-center justify-center text-sm font-bold uppercase bg-emerald-100 rounded-full px-5  py-1 text-center leading-tight h-auto min-h-[24px] mb-2"
              >
                {event.date}
              </time>

              {/* Title below date */}
              <div
                className="text-lg font-semibold ml-4"
                style={{ color: event.color }}
              >
                {event.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</>

    );
};









