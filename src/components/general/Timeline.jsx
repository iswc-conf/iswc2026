import React from "react";
import SubHeader from "./SubHeader";
import UnderlineHeader from "./UnderlineHeader";
import DeclareSoon from "./declareSoon";
import Card from "./Card";
import BaseContainer from "./BaseContainer"

export const Timeline = ({ data }) => {

  return (

    <div style={{ marginLeft: 200 }}>


      <div className="flex justify-start items-start min-h-screen">


        {/* Timeline */}
        <div className="container my-2 mx-4 mb-8">
          <div className="relative container my-2 mx-4 mb-8">
            {/* Global vertical line */}
            <div className="absolute left-5 top-0 h-full w-px bg-slate-300" />

            {data.map((event, index) => {
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
    </div>

  );
};









