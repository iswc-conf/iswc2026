import React, { useMemo, useState } from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import { CATEGORIES, importantDates } from "../../data/importantDates";

const MONTH_FORMAT = { month: "long", year: "numeric" };

/** "10 Feb", or "25–26 Oct" for a multi-day entry. */
const formatDay = ({ date, endDate }) => {
  const start = new Date(`${date}T00:00:00Z`);
  const day = start.getUTCDate();
  const month = start.toLocaleString("en-GB", { month: "short", timeZone: "UTC" });

  if (!endDate) return `${day} ${month}`;

  const end = new Date(`${endDate}T00:00:00Z`);
  return `${day}–${end.getUTCDate()} ${month}`;
};

/** Groups entries into months, in chronological order. */
const groupByMonth = (entries) => {
  const months = new Map();

  for (const entry of [...entries].sort((a, b) => a.date.localeCompare(b.date))) {
    const key = entry.date.slice(0, 7);
    if (!months.has(key)) {
      months.set(key, {
        key,
        label: new Date(`${key}-01T00:00:00Z`).toLocaleString("en-GB", {
          ...MONTH_FORMAT,
          timeZone: "UTC",
        }),
        entries: [],
      });
    }
    months.get(key).entries.push(entry);
  }

  return [...months.values()];
};

const ImportantDates = () => {
  // A null filter means "show everything".
  const [activeKind, setActiveKind] = useState(null);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const visible = activeKind
    ? importantDates.filter((entry) => entry.kind === activeKind)
    : importantDates;

  const months = useMemo(() => groupByMonth(visible), [visible]);

  // The first deadline that hasn't passed, highlighted as the one to act on.
  const nextUp = useMemo(
    () =>
      [...importantDates]
        .sort((a, b) => a.date.localeCompare(b.date))
        .find((entry) => (entry.endDate ?? entry.date) >= today),
    [today]
  );

  return (
    <Page width="wide">
      <Header>Important Dates</Header>

      <p className="iswc-dates__note">
        All deadlines are <strong>23:59 AoE</strong> (anywhere on Earth). This page is
        updated as new dates are announced.
      </p>

      {/* Doubles as the colour legend: each button carries its category colour. */}
      <div className="iswc-dates__filters" role="group" aria-label="Filter dates by type">
        <button
          type="button"
          className="iswc-dates__filter"
          aria-pressed={activeKind === null}
          onClick={() => setActiveKind(null)}
        >
          All dates
        </button>

        {Object.entries(CATEGORIES).map(([kind, { label, color }]) => (
          <button
            key={kind}
            type="button"
            className="iswc-dates__filter"
            aria-pressed={activeKind === kind}
            style={{ "--filter-color": color }}
            onClick={() => setActiveKind(activeKind === kind ? null : kind)}
          >
            <span className="iswc-dates__swatch" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <div className="iswc-dates">
        {months.map((month) => (
          <section className="iswc-dates__month" key={month.key}>
            <h2 className="iswc-dates__month-title">{month.label}</h2>

            <ul className="iswc-dates__list">
              {month.entries.map((entry) => {
                const isPast = (entry.endDate ?? entry.date) < today;
                const isNext = entry === nextUp;

                return (
                  <li
                    key={`${entry.date}-${entry.label}`}
                    className={[
                      "iswc-dates__item",
                      isPast && "iswc-dates__item--past",
                      isNext && "iswc-dates__item--next",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{ "--kind-color": CATEGORIES[entry.kind].color }}
                  >
                    <time className="iswc-dates__day" dateTime={entry.date}>
                      {formatDay(entry)}
                    </time>

                    <span className="iswc-dates__label">
                      {entry.label}
                      {isNext && <span className="iswc-dates__next-pill">Next</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {months.length === 0 && (
        <p className="text-center">No dates match that filter.</p>
      )}
    </Page>
  );
};

export default ImportantDates;
