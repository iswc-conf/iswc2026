import React from "react";
import { Link } from "react-router-dom";

/**
 * Homepage announcements, newest first, shown as a vertical timeline.
 *
 * Add an entry to the top of this list and mark it `latest` to give it the
 * NEW pill and the highlighted marker; remove the flag from the previous
 * entry. An optional `to` turns the item into a click-through to an internal
 * route (use a router path, e.g. "/program/acceptedpapers").
 */
const NEWS = [
  {
    date: "August 26, 2026",
    text: "Accepted Posters, Demos, and Doctoral Consortium papers are now available.",
    to: "/program/acceptedpapers",
    latest: true,
  },
  { date: "July 22, 2026", text: "Accepted Tutorials are now available." },
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
  <ol className="iswc-news">
    {news.map((item) => (
      <li
        key={item.date + item.text}
        className={`iswc-news__item ${
          item.latest ? "iswc-news__item--latest" : ""
        }`.trim()}
      >
        <span className="iswc-news__marker" aria-hidden="true" />

        <div className="iswc-news__body">
          <p className="iswc-news__date">
            <time>{item.date}</time>
            {item.latest && <span className="iswc-news__pill">New</span>}
          </p>

          <p className="iswc-news__text">{item.text}</p>

          {item.to && (
            <Link className="iswc-news__link" to={item.to}>
              View <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </li>
    ))}
  </ol>
);

export default NewsSection;
