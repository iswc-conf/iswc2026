import React from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import { SESSION_KINDS, schedule } from "../../data/schedule";

// The room(s) shown under a session: `room` for one, `rooms: [...]` for
// several (each with its own name). None for `allRooms` sessions.
const roomLabel = (session) =>
  (session.rooms ?? (session.room ? [session.room] : [])).join(" · ");

// Times are zero-padded "HH:MM", so they sort and compare as plain strings.
const byTime = (a, b) =>
  a.start.localeCompare(b.start) || a.end.localeCompare(b.end);

// A day's sessions grouped by their "start–end" time, earliest first.
const timeGroups = (day) => {
  const groups = new Map();
  [...day.sessions].sort(byTime).forEach((session) => {
    const time = `${session.start}–${session.end}`;
    if (!groups.has(time)) groups.set(time, []);
    groups.get(time).push(session);
  });
  return [...groups].map(([time, sessions]) => ({ time, sessions }));
};

// Workshop and tutorial days: which part of the day a session takes.
const PARTS = ["Full day", "Morning", "Afternoon"];
const partOf = (session) => {
  if (session.end <= "13:00") return "Morning";
  if (session.start >= "12:00") return "Afternoon";
  return "Full day";
};

// Scrolled to in code rather than linked as `#anchors`, because HashRouter
// owns the URL hash.
const scrollToDay = (id) =>
  document
    .getElementById(`schedule-${id}`)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const DaySelector = () => (
  <nav className="iswc-schedule__days" aria-label="Jump to a day">
    {schedule.map((day) => (
      <button
        type="button"
        key={day.id}
        className="iswc-schedule__day"
        onClick={() => scrollToDay(day.id)}
      >
        <span className="iswc-schedule__day-label">{day.label}</span>
        {day.subtitle && (
          <span className="iswc-schedule__day-sub">{day.subtitle}</span>
        )}
      </button>
    ))}
  </nav>
);

const SessionTitle = ({ session }) =>
  session.link ? (
    <ExternalLink href={session.link}>{session.title}</ExternalLink>
  ) : (
    session.title
  );

// --- Main conference days: time slot by time slot ---------------------------

const Session = ({ session }) => {
  const room = roomLabel(session);

  return (
    <li>
      <span className="iswc-schedule-list__title">
        <SessionTitle session={session} />
      </span>
      {room && <div className="iswc-schedule-list__room">{room}</div>}
      {session.speaker && (
        <div className="iswc-agenda__speaker">{session.speaker}</div>
      )}
      {session.chairs && (
        <div className="iswc-schedule-list__chairs">
          Session chairs: {session.chairs}
        </div>
      )}

      {session.papers?.length > 0 && (
        <ul className="iswc-schedule-list__papers">
          {session.papers.map((paper) => (
            <li key={paper.id}>
              <span className="iswc-table__title">{paper.title}</span>
              <div className="iswc-agenda__speaker">
                {paper.authors} · {paper.track}
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const DayBySlot = ({ day }) =>
  timeGroups(day).map(({ time, sessions }) => (
    <div key={time}>
      <h3 className="iswc-subheading">{time}</h3>
      <ul className="iswc-schedule-list">
        {sessions.map((session, i) => (
          <Session key={`${session.title}-${i}`} session={session} />
        ))}
      </ul>
    </div>
  ));

// --- Workshop and tutorial days: Full day / Morning / Afternoon -------------

const SessionRow = ({ session }) => {
  const kind = SESSION_KINDS[session.kind];

  return (
    <li className="iswc-schedule-rows__row">
      <div className="iswc-schedule-rows__room">{roomLabel(session)}</div>
      <div>
        <SessionTitle session={session} />
        <div className="iswc-schedule-rows__meta">
          {kind && session.kind !== "other" && (
            <span className="iswc-table__tag">{kind.label}</span>
          )}
          <span>
            {session.start}–{session.end}
          </span>
        </div>
      </div>
    </li>
  );
};

const DayByPart = ({ day }) => {
  const breaks = day.sessions.filter((s) => s.kind === "break").sort(byTime);
  // Kept in room order, so a room is easy to find in each list.
  const order = (s) => day.rooms.indexOf(s.room ?? s.rooms?.[0]);
  const sessions = day.sessions
    .filter((s) => s.kind !== "break")
    .sort((a, b) => order(a) - order(b) || byTime(a, b));

  return (
    <>
      {breaks.length > 0 && (
        <p className="iswc-schedule-rows__breaks">
          <b>Breaks:</b>{" "}
          {breaks.map((s) => `${s.start}–${s.end}`).join(" · ")}
        </p>
      )}

      {PARTS.map((part) => {
        const items = sessions.filter((s) => partOf(s) === part);
        if (items.length === 0) return null;

        return (
          <div key={part}>
            <h3 className="iswc-subheading">{part}</h3>
            <ul className="iswc-schedule-rows">
              {items.map((session, i) => (
                <SessionRow key={`${session.title}-${i}`} session={session} />
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const Day = ({ day }) => (
  // `iswc-track` gives the jump target the scroll margin that clears the
  // sticky navbar.
  <section id={`schedule-${day.id}`} className="iswc-track">
    <UnderlineHeader>{day.label}</UnderlineHeader>

    {day.note && <p className="iswc-callout">{day.note}</p>}

    {day.sessions.length === 0 && (
      <p className="iswc-note">
        The programme for this day will be announced soon.
      </p>
    )}

    {day.layout === "parts" ? <DayByPart day={day} /> : <DayBySlot day={day} />}
  </section>
);

export const Schedule = () => (
  <Page>
    <Header>Schedule</Header>

    {schedule.length === 0 ? (
      <p className="iswc-note">The schedule will be published here soon.</p>
    ) : (
      <>
        <DaySelector />

        <p className="iswc-callout">
          <b>Programme correct at time of publication.</b> Minor changes may
          occur; see this page for updates.
        </p>

        {schedule.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </>
    )}
  </Page>
);

export default Schedule;