import React, { useMemo, useState } from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import { SESSION_KINDS, schedule } from "../../data/schedule";

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const formatHour = (m) => `${String(Math.floor(m / 60)).padStart(2, "0")}:00`;

// The grid defaults to a 08:00–18:00 window, wide enough for a normal
// conference day at a glance. It only grows beyond that if a session
// actually starts earlier or ends later, so nothing is ever clipped.
const DAY_START = 9 * 60;
const DAY_END = 18 * 60;

// Horizontal scale: pixels per minute. Events sit at their exact start
// time (10:52 lands between the hour lines, not snapped to one) — this is
// what makes the grid scrollable rather than squeezing everything to fit.
const PX_PER_MINUTE = 2.5;

// A very short session still needs enough width to read its title.
const MIN_EVENT_WIDTH = 0;

const byStart = (a, b) => toMinutes(a.start) - toMinutes(b.start);

const gridBounds = (sessions) => {
  const starts = sessions.map((s) => toMinutes(s.start));
  const ends = sessions.map((s) => toMinutes(s.end));
  return {
    start: Math.min(DAY_START, ...starts),
    end: Math.max(DAY_END, ...ends),
  };
};

const SessionEvent = ({ session, left, width }) => (
  <article
    className={`iswc-schedule-grid__event iswc-agenda__card iswc-kind--${session.kind}`}
    style={{ left: `${left}px`, width: `${width}px` }}
  >
    <div className="iswc-agenda__meta">
      <span className="iswc-agenda__range">
        {session.start}–{session.end}
      </span>
    </div>
    <div className="iswc-agenda__title">{session.title}</div>
    {session.speaker && (
      <div className="iswc-agenda__speaker">{session.speaker}</div>
    )}
  </article>
);

// A track is one horizontal lane (either "All rooms" or a single room). It
// draws its own hour gridlines and lays its sessions out absolutely so they
// can float at any minute, independent of the hour columns.
const Track = ({ sessions, start, trackWidth, hours, left, width }) => (
  <div className="iswc-schedule-grid__track" style={{ width: `${trackWidth}px` }}>
    {hours.map((m) => (
      <span
        key={m}
        className="iswc-schedule-grid__gridline"
        style={{ left: `${left(m)}px` }}
        aria-hidden="true"
      />
    ))}
    {sessions.map((session, i) => (
      <SessionEvent
        key={`${session.start}-${session.title}-${i}`}
        session={session}
        left={left(toMinutes(session.start))}
        width={width(session)}
      />
    ))}
  </div>
);

const DayTimeline = ({ day, visibleRooms }) => {
  const rooms = day.rooms.filter((r) => visibleRooms.has(r));
  const sessions = day.sessions.filter(
    (s) => s.allRooms || visibleRooms.has(s.room)
  );

  const { start, end } = useMemo(
    () => gridBounds(sessions.length ? sessions : day.sessions),
    [sessions, day]
  );

  if (sessions.length === 0) {
    return <p className="iswc-note">No sessions match the selected rooms.</p>;
  }

  const HEADER_PADDING = 50;

  const trackWidth = (end - start) * PX_PER_MINUTE + HEADER_PADDING * 2;
  const left = (min) => (min - start) * PX_PER_MINUTE + HEADER_PADDING;
  const width = (s) =>
    Math.max((toMinutes(s.end) - toMinutes(s.start)) * PX_PER_MINUTE, MIN_EVENT_WIDTH);

  const hours = [];
  for (let m = Math.ceil(start / 60) * 60; m <= end; m += 60) hours.push(m);

  const common = sessions.filter((s) => s.allRooms).sort(byStart);
  const roomRows = rooms
    .map((room) => ({
      room,
      items: sessions.filter((s) => !s.allRooms && s.room === room).sort(byStart),
    }))
    .filter((r) => r.items.length > 0);

  return (
    <div className="iswc-schedule-grid__scroll">
      <div className="iswc-schedule-grid">
        {/* Hour header, sticky at the top while the grid scrolls vertically. */}
        <div className="iswc-schedule-grid__row iswc-schedule-grid__row--header">
          <div className="iswc-schedule-grid__room-label iswc-schedule-grid__room-label--corner" />
          <div className="iswc-schedule-grid__track" style={{ width: `${trackWidth}px` }}>
            {hours.map((m) => (
              <span
                key={m}
                className="iswc-schedule-grid__hour"
                style={{ left: `${left(m)}px` }}
              >
                {formatHour(m)}
              </span>
            ))}
          </div>
        </div>

        {common.length > 0 && (
          <div className="iswc-schedule-grid__row iswc-schedule-grid__row--common">
            <div className="iswc-schedule-grid__room-label">All rooms</div>
            <Track sessions={common} start={start} trackWidth={trackWidth} hours={hours} left={left} width={width} />
          </div>
        )}

        {roomRows.map(({ room, items }) => (
          <div className="iswc-schedule-grid__row" key={room}>
            <div className="iswc-schedule-grid__room-label">{room}</div>
            <Track sessions={items} start={start} trackWidth={trackWidth} hours={hours} left={left} width={width} />
          </div>
        ))}
      </div>
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


            <p className="iswc-callout">
            This is a draft schedule and may still change.  Room assignment can be subject to changes. All times are local (CEST).
 
            </p>


      <p className="iswc-note">
      
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

      <DayTimeline day={day} visibleRooms={visibleRooms} />
    </Page>
  );
};

export default Schedule;