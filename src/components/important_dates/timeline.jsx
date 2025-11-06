import React from "react";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import DeclareSoon from "../general/declareSoon";

export const Timeline = () => {

    const timeline_theme = {
    colors: {
      submissions: "#1E88E5",
      notifications: "#FB8C00",
      readyspring: "#43A047",
      readyceur: "#8E24AA",
      other: "#000000"
    },
  };

    const events = [
   
    ];

    {/*
    const events = [
        { date: '18-Feb-25', title: 'Workshop proposals', color: timeline_theme.colors.submissions },
        { date: '4-Mar-25', title: 'Semantic Web Challenge proposals', color: timeline_theme.colors.submissions },
        { date: '11-Mar-25', title: 'Workshop notifications', color: timeline_theme.colors.notifications },
        { date: '16-Mar-25', title: 'Semantic Web Challenges notifications', color: timeline_theme.colors.notifications },
        { date: '6-May-25', title: 'Abstracts (Research, In-use, and Resource tracks)', color: timeline_theme.colors.submissions },
        { date: '13-May-25 (extended 14-May-25)', title: 'Papers (Research, In-use, and Resource tracks)', color: timeline_theme.colors.submissions },
        { date: '3-Jun-25', title: 'Tutorial proposals', color: timeline_theme.colors.submissions },
        { date: '3-Jun-25', title: 'Doctoral Consortium submissions', color: timeline_theme.colors.submissions },
        { date: '10-Jun-25', title: 'Tutorial notifications', color: timeline_theme.colors.notifications },
        { date: '17-20 Jun-25', title: 'Rebuttal (Research, In-use, and Resource tracks)', color: timeline_theme.colors.other },
        { date: '30-Jun-25', title: 'Journal Sessions Proposals', color: timeline_theme.colors.submissions },
        { date: '8-Jul-25', title: 'Doctoral Consortium notifications', color: timeline_theme.colors.notifications },
        { date: '17-Jul-25', title: 'Paper notifications (Research, In-use, and Resource tracks)', color: timeline_theme.colors.notifications },
        { date: '8-Jul-25', title: 'Industry papers submissions', color: timeline_theme.colors.submissions },
        { date: '8-Jul-25', title: 'Dagstuhl-style workshop submission', color: timeline_theme.colors.submissions },
        { date: '17-Jul-25', title: 'Journal Sessions Notifications', color: timeline_theme.colors.notifications },
        { date: '29-Jul-25', title: 'Industry papers notifications', color: timeline_theme.colors.notifications },
        { date: '31-Jul-25', title: 'Camera-ready papers (Research, In-use, and Resource tracks)', color: timeline_theme.colors.readyspring },
        { date: '31-Jul-25', title: 'Poster & Demo submissions', color: timeline_theme.colors.submissions },
        { date: '28-Aug-25', title: 'Poster & Demo notifications', color: timeline_theme.colors.notifications },
        { date: '28-Aug-25', title: 'Workshop papers notifications', color: timeline_theme.colors.notifications },
        { date: '11-Sep-25', title: 'Camera-ready - Industry', color: timeline_theme.colors.readyceur },
        { date: '11-Sep-25', title: 'Camera-ready - Poster&Demo', color: timeline_theme.colors.readyceur },
        { date: '11-Sep-25', title: 'Camera-ready - Doctoral Consortium', color: timeline_theme.colors.readyceur },
        { date: '2-3 Nov-25', title: 'Workshops & Tutorials', color: timeline_theme.colors.other },
        { date: '4-6 Nov-25', title: 'Main conference', color: timeline_theme.colors.other },
    ];
    */ }
    


    return (
<>
  <UnderlineHeader>Colors Meanings</UnderlineHeader>

   <div className="my-2 mx-4 mb-8">
      {/* Legend */}
      <div className="container">
        <ul className="list-none space-y-1">
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.submissions }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.submissions }}>
              <b>Submissions</b>
            </span>
          </li>
          <li>
            <span className="mr-2" style={{ color: timeline_theme.colors.notifications }}>
              <b>&#8226;</b>
            </span>
            <span style={{ color: timeline_theme.colors.notifications }}>
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









