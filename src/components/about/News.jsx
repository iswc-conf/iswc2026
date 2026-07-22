import React from "react";

/**
 * Homepage announcements, newest first.
 *
 * Add an entry to the top of this list and mark it `latest` to give it the
 * NEW pill; remove the flag from the previous entry.
 */
const NEWS = [
  { date: "July 22, 2026", text: "Accepted Tutorials are now available.", latest: true },
  { date: "July 8, 2026", text: "Accepted Doctoral Consortium papers are now available." },
  { date: "March 17, 2026", text: "The CFP is now available for the Industry Track." },
  { date: "February 23, 2026", text: "Sponsorship information is now available." },
  { date: "February 4, 2026", text: "The CFP is now available for the Tutorial Track." },
  {
    date: "January 30, 2026",
    text: "CFPs are now available for the Doctoral Consortium and Posters and Demos tracks.",
  },
  {
    date: "January 19, 2026",
    text: "CFPs are now available for the Research, In Use, and Resource tracks.",
  },
  { date: "November 6, 2025", text: "The ISWC 2026 website is now live." },
];

export const NewsSection = ({ news = NEWS }) => (
  <div>
    {news.map((item) => (
      <article
        key={item.date + item.text}
        className={`iswc-news__item ${item.latest ? "iswc-news__item--latest" : ""}`.trim()}
      >
        <p className="iswc-news__date">
          {item.date}
          {item.latest && <span className="badge text-bg-secondary">NEW</span>}
        </p>
        <p className="mb-0">{item.text}</p>
      </article>
    ))}
  </div>
);

export default NewsSection;
