import React from "react";

/**
 * Vertical timeline for the Important Dates page.
 *
 * Entries are either a month separator (`{ type: "month", label }`) or a dated
 * event (`{ date, title, color }`). The colour comes from `theme.timeline` and
 * tints both the title and the rail dot.
 */
export const Timeline = ({ data = [] }) => (
  <ol className="iswc-timeline list-unstyled">
    {data.map((entry, index) => {
      if (entry.type === "month") {
        return (
          <li className="iswc-timeline__month" key={`month-${entry.label}`}>
            <span>{entry.label}</span>
          </li>
        );
      }

      return (
        <li
          className="iswc-timeline__item"
          key={`${entry.date}-${entry.title}-${index}`}
          style={{ color: entry.color }}
        >
          <time className="iswc-timeline__date" dateTime={entry.date}>
            {entry.date}
          </time>
          <p className="iswc-timeline__title mb-0">{entry.title}</p>
        </li>
      );
    })}
  </ol>
);

export default Timeline;
