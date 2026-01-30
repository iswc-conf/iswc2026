import React from "react";
import { theme } from "../../theme"; 


const NewsItem = ({ date, text, isLatest = false }) => {
  return (
    <div
      className="border-l-4 pl-4"
      style={{ borderColor: isLatest ? theme.colors.secondary : theme.colors.gray }}
    >
      <p
        className="text-sm flex items-center gap-2"
        style={{ color: theme.colors.secondary }}
      >
        {date}
        {isLatest && (
          <span
            className="px-2 py-0.5 rounded"
            style={{
              backgroundColor: theme.colors.secondary,
              color: theme.colors.background,
            }}
          >
            NEW
          </span>
        )}
      </p>
      <p className="">
        {text}
      </p>
    </div>
  );
};

// News list component
const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((item, idx) => (
        <NewsItem
          key={idx}
          date={item.date}
          text={item.text}
          isLatest={item.isLatest}
        />
      ))}
    </div>
  );
};

const NewsSection = () => {
  const newsData = [
     { date: "January 30, 2026", text: "CFPs are now available for the Doctoral Consortum and 'Posters and Demo' Tracks", isLatest:"True"},
     { date: "January 19, 2026", text: "CFPs are now available for the Research, In Use, and Resource tracks"},
    { date: "November 6, 2025", text: "ISWC 2026 website is now live." },
  ];

  return (
    <div>
      <NewsList news={newsData} />
    </div>
  );
};

export default NewsSection;