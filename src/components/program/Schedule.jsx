import React, { useMemo, useState } from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import { SESSION_KINDS, schedule } from "../../data/schedule";

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

/**
 * Groups a day's sessions by start time so parallel sessions (same start,
 * different room) sit together. Full-width items come first within a group,
 * then rooms in alphabetical order.
 */
const groupByStart = (sessions) => {
  const groups = new Map();
  for (const s of sessions) {
    if (!groups.has(s.start)) groups.set(s.start, []);
    groups.get(s.start).push(s);
  }

  return [...groups.entries()]
    .sort((a, b) => toMinutes(a[0]) - toMinutes(b[0]))
    .map(([start, items]) => ({
      start,
      items: items.slice().sort((a, b) => {
        if (Boolean(a.allRooms) !== Boolean(b.allRooms)) return a.allRooms ? -1 : 1;
        return (a.room || "").localeCompare(b.room || "");
      }),
    }));
};

const DayAgenda = ({ day, visibleRooms }) => {
  const groups = useMemo(() => {
    const sessions = day.sessions.filter(
      (s) => s.allRooms || visibleRooms.has(s.room)
    );
    return groupByStart(sessions);
  }, [day, visibleRooms]);

  if (groups.length === 0) {
    return <p className="iswc-note">No sessions match the selected rooms.</p>;
  }

  return (
    <div className="iswc-agenda">
      {groups.map((group) => (
        <div className="iswc-agenda__group" key={group.start}>
          <div className="iswc-agenda__time">{group.start}</div>

          <div className="iswc-agenda__items">
            {group.items.map((session, i) => (
              <article
                key={`${session.start}-${session.title}-${i}`}
                className={`iswc-agenda__card iswc-kind--${session.kind}${
                  session.allRooms ? " iswc-agenda__card--full" : ""
                }`}
              >
                <div className="iswc-agenda__meta">
                  <span className="iswc-agenda__range">
                    {session.start}–{session.end}
                  </span>
                  {!session.allRooms && session.room && (
                    <span className="iswc-agenda__room">{session.room}</span>
                  )}
                </div>
                <div className="iswc-agenda__title">{session.title}</div>
                {session.speaker && (
                  <div className="iswc-agenda__speaker">{session.speaker}</div>
                )}
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Schedule = () => {
  const [activeId, setActiveId] = useState(schedule[0]?.id);
  const day = schedule.find((d) => d.id === activeId) ?? schedule[0];

  // Room names hidden by the filter (shared across days; names repeat).
  const [hidden, setHidden] = useState(() => new Set());

  if (!day) {
    return (
      <Page width="wide">
        <Header>Schedule</Header>
        <p className="iswc-note">The schedule will be published here soon.</p>
      </Page>
    );
  }

  const visibleRooms = new Set(day.rooms.filter((r) => !hidden.has(r)));

  const toggleRoom = (room) =>
    setHidden((prev) => {
      const next = new Set(prev);
      next.has(room) ? next.delete(room) : next.add(room);
      return next;
    });

  return (
    <Page width="wide">
      <Header>Schedule</Header>

      <p className="iswc-note">
        This is a draft schedule and may still change. All times are local (CEST).
      </p>

      {/* Day switcher */}
      <div className="iswc-schedule__days" role="group" aria-label="Select a day">
        {schedule.map((d) => (
          <button
            type="button"
            key={d.id}
            className="iswc-schedule__day"
            aria-pressed={d.id === day.id}
            onClick={() => setActiveId(d.id)}
          >
            <span className="iswc-schedule__day-label">{d.label}</span>
            {d.subtitle && <span className="iswc-schedule__day-sub">{d.subtitle}</span>}
          </button>
        ))}
      </div>

      {/* Room filter */}
      {day.rooms.length > 1 && (
        <div className="iswc-schedule__filter" role="group" aria-label="Filter by room">
          <span className="iswc-schedule__filter-label">Rooms</span>
          {day.rooms.map((room) => (
            <button
              type="button"
              key={room}
              className="iswc-schedule__chip"
              aria-pressed={!hidden.has(room)}
              onClick={() => toggleRoom(room)}
            >
              {room}
            </button>
          ))}
          {hidden.size > 0 && (
            <button
              type="button"
              className="iswc-schedule__chip iswc-schedule__chip--reset"
              onClick={() => setHidden(new Set())}
            >
              Show all
            </button>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="iswc-schedule__legend">
        {Object.entries(SESSION_KINDS).map(([key, { label, color }]) => (
          <span
            key={key}
            className="iswc-schedule__legend-item"
            style={{ "--kind-color": color }}
          >
            <span className="iswc-schedule__swatch" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>

      {day.note && <p className="iswc-callout">{day.note}</p>}

      <DayAgenda day={day} visibleRooms={visibleRooms} />
    </Page>
  );
};

export default Schedule;
