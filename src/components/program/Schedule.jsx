import React, { useMemo, useState } from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import { SESSION_KINDS, schedule } from "../../data/schedule";
import ExternalLink from "../general/ExternalLink";

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const formatHour = (m) => `${String(Math.floor(m / 60)).padStart(2, "0")}:00`;

// The grid defaults to a 09:00–18:00 window, wide enough for a normal
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

// --- Flipped layout (rooms as columns, time running down the page) ---------
// Used automatically for days with this many rooms or fewer. A day can also
// force either layout with `layout: "vertical"` or `layout: "horizontal"`
// in the schedule data.
const VERTICAL_MAX_ROOMS = 4;

// Vertical scale: pixels per minute (2 → one hour is 120px tall).
const PX_PER_MINUTE_VERTICAL = 2;

// A very short session still needs enough height to read its time + title.
const MIN_EVENT_HEIGHT = 44;

// Breathing room above the first hour line and below the last one.
const VERTICAL_PADDING = 16;

const byStart = (a, b) => toMinutes(a.start) - toMinutes(b.start);

// A session lives in one room (`room`), several (`rooms: [...]`), or all of
// them (`allRooms: true`).
const sessionRooms = (s) => s.rooms ?? (s.room ? [s.room] : []);

const isVisible = (s, visibleRooms) =>
  s.allRooms || sessionRooms(s).some((r) => visibleRooms.has(r));

// Which room columns a session covers in the flipped layout, as runs of
// adjacent columns. Rooms that are next to each other merge into one wide
// card; rooms that are not adjacent get one card per run.
const columnSpans = (s, rooms) => {
  if (s.allRooms) return [{ from: 0, count: Math.max(rooms.length, 1) }];
  const wanted = sessionRooms(s);
  const spans = [];
  rooms.forEach((room, i) => {
    if (!wanted.includes(room)) return;
    const last = spans[spans.length - 1];
    if (last && last.from + last.count === i) last.count += 1;
    else spans.push({ from: i, count: 1 });
  });
  return spans;
};

// Kinds shown in the legend for a day: the day's own `kinds` list if it has
// one, otherwise whatever kinds its sessions actually use.
const legendKinds = (day) => {
  if (day.kinds) return day.kinds.filter((k) => SESSION_KINDS[k]);
  const used = new Set(day.sessions.map((s) => s.kind));
  return Object.keys(SESSION_KINDS).filter((k) => used.has(k));
};

// A day can set its own window with `dayStart` / `dayEnd` ("HH:MM"); otherwise
// the 09:00–18:00 default applies. Either way the grid still grows if a
// session falls outside the window.
const gridBounds = (sessions, day = {}) => {
  const starts = sessions.map((s) => toMinutes(s.start));
  const ends = sessions.map((s) => toMinutes(s.end));
  const dayStart = day.dayStart ? toMinutes(day.dayStart) : DAY_START;
  const dayEnd = day.dayEnd ? toMinutes(day.dayEnd) : DAY_END;
  return {
    start: Math.min(dayStart, ...starts),
    end: Math.max(dayEnd, ...ends),
  };
};

const hourMarks = (start, end) => {
  const hours = [];
  for (let m = Math.ceil(start / 60) * 60; m <= end; m += 60) hours.push(m);
  return hours;
};

const isVerticalDay = (day) =>
  day.layout
    ? day.layout === "vertical"
    : day.rooms.length <= VERTICAL_MAX_ROOMS;

// `gridClass` is the positioning class of the grid the card lives in; `style`
// carries the absolute position (left/width or top/height).
const SessionEvent = ({ session, style, gridClass = "iswc-schedule-grid__event" }) => {
  const kind = SESSION_KINDS[session.kind];

  return (
    <article
      className={`${gridClass} iswc-agenda__card iswc-kind--${session.kind}`}
      style={style}
    >
      <div className="iswc-agenda__meta">
        <span className="iswc-agenda__range">
          {session.start}–{session.end}
        </span>
        {/* Kind badge next to the time — helps scanning parallel tracks.
            Breaks are self-evident, so they get no badge. */}
        {session.kind !== "break" && kind && (
          <span
            className="iswc-agenda__badge"
            style={{ "--kind-color": kind.color }}
          >
            {kind.label}
          </span>
        )}
      </div>

      {session.link ? (
        <div className="iswc-agenda__title">
          <ExternalLink href={session.link}>{session.title}</ExternalLink>
        </div>
      ) : (
        <div className="iswc-agenda__title">{session.title}</div>
      )}

      {session.speaker && (
        <div className="iswc-agenda__speaker">{session.speaker}</div>
      )}
    </article>
  );
};

// A track is one horizontal lane (either "All rooms" or a single room). It
// draws its own hour gridlines and lays its sessions out absolutely so they
// can float at any minute, independent of the hour columns.
const Track = ({ sessions, trackWidth, hours, left, width }) => (
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
        style={{
          left: `${left(toMinutes(session.start))}px`,
          width: `${width(session)}px`,
        }}
      />
    ))}
  </div>
);

// Shared empty states for both layouts. Returns null when there is something
// to draw.
const emptyNote = (day, sessions) => {
  if (day.sessions.length === 0) {
    return (
      <p className="iswc-note">
        The programme for this day will be announced soon.
      </p>
    );
  }
  if (sessions.length === 0) {
    return <p className="iswc-note">No sessions match the selected rooms.</p>;
  }
  return null;
};

// Rooms as rows, hours as columns — for the busy multi-room days.
const DayTimeline = ({ day, visibleRooms }) => {
  const rooms = day.rooms.filter((r) => visibleRooms.has(r));
  const sessions = day.sessions.filter(
    (s) => isVisible(s, visibleRooms)
  );

  const { start, end } = useMemo(
    () => gridBounds(sessions.length ? sessions : day.sessions, day),
    [sessions, day]
  );

  const note = emptyNote(day, sessions);
  if (note) return note;

  const HEADER_PADDING = 50;

  const trackWidth = (end - start) * PX_PER_MINUTE + HEADER_PADDING * 2;
  const left = (min) => (min - start) * PX_PER_MINUTE + HEADER_PADDING;
  const width = (s) =>
    Math.max((toMinutes(s.end) - toMinutes(s.start)) * PX_PER_MINUTE, MIN_EVENT_WIDTH);

  const hours = hourMarks(start, end);

  const common = sessions.filter((s) => s.allRooms).sort(byStart);
  const roomRows = rooms
    .map((room) => ({
      room,
      // A multi-room session is repeated in each of its rooms' rows.
      items: sessions
        .filter((s) => !s.allRooms && sessionRooms(s).includes(room))
        .sort(byStart),
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
            <Track sessions={common} trackWidth={trackWidth} hours={hours} left={left} width={width} />
          </div>
        )}

        {roomRows.map(({ room, items }) => (
          <div className="iswc-schedule-grid__row" key={room}>
            <div className="iswc-schedule-grid__room-label">{room}</div>
            <Track sessions={items} trackWidth={trackWidth} hours={hours} left={left} width={width} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Rooms as columns, hours as rows — for days with only a few rooms. Time runs
// down the page; `allRooms` sessions (breaks, plenaries) stretch across every
// column at their time slot.
const DayColumns = ({ day, visibleRooms }) => {
  const rooms = day.rooms.filter((r) => visibleRooms.has(r));
  const sessions = day.sessions.filter(
    (s) => isVisible(s, visibleRooms)
  );

  const { start, end } = useMemo(
    () => gridBounds(sessions.length ? sessions : day.sessions, day),
    [sessions, day]
  );

  const note = emptyNote(day, sessions);
  if (note) return note;

  const top = (min) => (min - start) * PX_PER_MINUTE_VERTICAL + VERTICAL_PADDING;
  const height = (s) =>
    Math.max(
      (toMinutes(s.end) - toMinutes(s.start)) * PX_PER_MINUTE_VERTICAL,
      MIN_EVENT_HEIGHT
    );
  const columns = Math.max(rooms.length, 1);
  const position = (s, span) => ({
    top: `${top(toMinutes(s.start))}px`,
    height: `${height(s)}px`,
    left: `calc(${(span.from / columns) * 100}% + 4px)`,
    width: `calc(${(span.count / columns) * 100}% - 8px)`,
  });
  const bodyHeight =
    (end - start) * PX_PER_MINUTE_VERTICAL + VERTICAL_PADDING * 2;

  const hours = hourMarks(start, end);
  const ordered = [...sessions].sort(byStart);

  return (
    <div className="iswc-schedule-vgrid__scroll">
      <div
        className="iswc-schedule-vgrid"
        style={{ "--room-count": Math.max(rooms.length, 1) }}
      >
        {/* Room header, sticky at the top while the page scrolls. */}
        <div className="iswc-schedule-vgrid__header">
          <div className="iswc-schedule-vgrid__corner" />
          {rooms.map((room) => (
            <div className="iswc-schedule-vgrid__room-label" key={room}>
              {room}
            </div>
          ))}
        </div>

        <div
          className="iswc-schedule-vgrid__body"
          style={{ height: `${bodyHeight}px` }}
        >
          {/* Hour labels down the left edge. */}
          <div className="iswc-schedule-vgrid__hours">
            {hours.map((m) => (
              <span
                key={m}
                className="iswc-schedule-vgrid__hour"
                style={{ top: `${top(m)}px` }}
              >
                {formatHour(m)}
              </span>
            ))}
          </div>

          <div className="iswc-schedule-vgrid__lanes">
            {hours.map((m) => (
              <span
                key={m}
                className="iswc-schedule-vgrid__gridline"
                style={{ top: `${top(m)}px` }}
                aria-hidden="true"
              />
            ))}

            {/* One lane per room: just the column background and divider. */}
            {rooms.map((room) => (
              <div className="iswc-schedule-vgrid__lane" key={room} />
            ))}

            {/* Cards sit on top of the lanes and cover one, several or all
                of them depending on the session's rooms. */}
            {ordered.map((session, i) =>
              columnSpans(session, rooms).map((span) => (
                <SessionEvent
                  key={`${session.start}-${session.title}-${i}-${span.from}`}
                  session={session}
                  gridClass="iswc-schedule-vgrid__event"
                  style={position(session, span)}
                />
              ))
            )}
          </div>
        </div>
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

  const DayView = isVerticalDay(day) ? DayColumns : DayTimeline;
  const kinds = legendKinds(day);

  return (
    <Page width="wide">
      <Header>Schedule</Header>
    
      <p className="iswc-callout">
        <b>Programme correct at time of publication.</b> Minor changes may occur; see this page for updates.
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
      {kinds.length > 0 && (
        <div className="iswc-schedule__legend">
          {kinds.map((key) => (
            <span
              key={key}
              className="iswc-schedule__legend-item"
              style={{ "--kind-color": SESSION_KINDS[key].color }}
            >
              <span className="iswc-schedule__swatch" aria-hidden="true" />
              {SESSION_KINDS[key].label}
            </span>
          ))}
        </div>
      )}

      {day.note && <p className="iswc-callout">{day.note}</p>}

      <DayView day={day} visibleRooms={visibleRooms} />
    </Page>
  );
};

export default Schedule;