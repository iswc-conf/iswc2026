import React from "react";
import { theme } from "../../theme.js"
import { useState, useRef } from "react";

export const PaperTable = ({data}) => {
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
    <div className="overflow-x-auto">
      <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
      <thead>
        <tr style={{ color: theme.colors.secondary }} className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
          <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
          <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
        </tr>
      </thead>
      <tbody>
        {data.map((paper, idx) => (
          <tr key={`dc-${idx}`} className="border-b align-top">
            <td
              style={{ color: theme.colors.primary }}
              className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer align-top"
              onClick={() => toggleDetail(`dc-${idx}`)}
            >
              <div className="flex items-start gap-2">
                <span
                  className={`inline-block transform transition-transform ${
                    openIndexes.includes(`dc-${idx}`) ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ▶
                </span>
                <div className="flex-1">
                  {paper.id && <span className="mr-1 font-mono">{paper.id}:</span>} {paper.title}
                  {openIndexes.includes(`dc-${idx}`) && (
                    <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">{paper.abstract}</div>
                  )}
                </div>
              </div>
            </td>
            <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>

        </>
    
    );
}

export default PaperTable;