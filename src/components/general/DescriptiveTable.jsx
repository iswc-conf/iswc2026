import React from "react";
import { theme } from "../../theme.js"
import { useState, useRef } from "react";
import ExternalLink from "./ExternalLink.jsx"

export const DescriptiveTable = ({title, description, data, header_title}) => {
    const [openIndexes, setOpenIndexes] = useState([]);
    const detailRefs = useRef([]);
    const toggleDetail = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };
    const scrollToDetails = (idx) => {
        if (detailRefs.current[idx]) {
            detailRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
            toggleDetail(idx);
        }
    };
    return (
<>
 <div className="flex flex-col w-full pt-10 lg:pt-16 mb-4 lg:my-6 px-4 sm:px-6 lg:px-12">
    <div className="mb-6">
      <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
        <thead>
          <tr style={{ color: theme.colors.secondary }} className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
            <th className="p-4 border border-gray-300 grid-no-grow w-3/4">{title}</th>
            <th className="p-4 border border-gray-300 grid-no-grow w-1/4">{description}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((paper, idx) => (
            <tr key={`dc-${idx}`} className="border-b align-top">
              <td
                
                className="p-4 border border-gray-200   cursor-pointer align-top"
                onClick={() => toggleDetail(`dc-${idx}`)}
              >
                <div className="flex items-start gap-2">
                  <span
                  style={{ color: theme.colors.primary }}
                    className={`inline-block transform transition-transform ${
                      openIndexes.includes(`dc-${idx}`) ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▶
                  </span>
                  <div className="flex-1">
                    {paper.id && <span className="mr-1 font-mono font-semibold">{paper.id}:</span>} <span className="font-semibold" style={{ color: theme.colors.primary }}>{paper.title}</span>
                    {openIndexes.includes(`dc-${idx}`) && (
                      
                      <div className="mt-2  whitespace-pre-line">

                        {paper.description && (
                          <div><p><b>{header_title}</b></p>
                        <p>{paper.description}</p></div>
                        )}
                        
                        <p><b>Keywords</b></p>
                        <p>{paper.keywords}</p>

                        {/* Website */}
                        {paper.website && (
                          <p className="mt-3">
                            
                           <span className="font-bold" > Website:</span> <a href={paper.website} style={{color: theme.colors.primary}}>{paper.website}</a>
                              
               
                          </p>
                        )}

                        {paper.cfp && (
                          <p className="mt-3">
                            
                           <span className="font-bold"> CFP:</span> <a href={paper.cfp} style={{color: theme.colors.primary}}>{paper.cfp}</a>
                              
                        
                          </p>
                        )}

                        {/* Social Medias */}
                        {paper.social_medias && paper.social_medias.length > 0 && (
                          <p className="mt-3">
                            <span className="font-bold">  Social Media: </span>
                            <ul  style={{color:theme.colors.primary}} className="list-disc list-inside ml-8">
                              {paper.social_medias.map(({ social_media, social_media_url }, smIdx) => (
                                <li key={`sm-${smIdx}`}>
                                  <a href={social_media_url} style={{color: theme.colors.primary}}>{social_media}</a>
 
                                </li>
                              ))}
                            </ul>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="p-4 border border-gray-200 align-top">{paper.organizers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>

    
    );
}

export default DescriptiveTable;