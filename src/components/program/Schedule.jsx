import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import { SESSION_KINDS, schedule, FLOOR_PLANS } from "../../data/schedule";

const FloorPlanViewer = lazy(() => import("./FloorPlanViewer"));

const FloorPlans = () => (
  <section id="schedule-floor-plans" className="iswc-track">
    <UnderlineHeader>Floor Plans</UnderlineHeader>
    <Suspense fallback={<p className="iswc-floorplan__status">Loading floor plans…</p>}>
      <FloorPlanViewer />
    </Suspense>
  </section>
);



// The room(s) shown under a session: `room` for one, `rooms: [...]` for
// several (each with its own name). None for `allRooms` sessions.
const roomLabel = (session) =>
  (session.rooms ?? (session.room ? [session.room] : [])).join(" · ");

// Times are zero-padded "HH:MM", so they sort and compare as plain strings.
const byTime = (a, b) =>
  a.start.localeCompare(b.start) || a.end.localeCompare(b.end);

// "09:00–10:15". Trimmed, so a stray space in the data doesn't split a group.
const timeRange = (session) => `${session.start.trim()}–${session.end.trim()}`;

// A day's sessions grouped by their "start–end" time, earliest first.
const timeGroups = (day) => {
  const groups = new Map();
  [...day.sessions].sort(byTime).forEach((session) => {
    const time = timeRange(session);
    if (!groups.has(time)) groups.set(time, []);
    groups.get(time).push(session);
  });
  return [...groups].map(([time, sessions]) => ({ time, sessions }));
};

// Workshop and tutorial days: which part of the day a session takes.
const PARTS = ["Full day", "Morning", "Afternoon", "Evening"];
const partOf = (session) => {
  if (session.start.trim() >= "18:00") return "Evening";
  if (session.end <= "13:00") return "Morning";
  if (session.start >= "12:00") return "Afternoon";
  return "Full day";
};

// Stable DOM id for a session in the expanded view, so the table view can
// jump to it. Based on the session's position in the data, which never
// changes at runtime (the views sort copies of the array).
const sessionAnchor = (day, session) =>
  `schedule-${day.id}-s${day.sessions.indexOf(session)}`;

// Scrolled to in code rather than linked as `#anchors`, because HashRouter
// owns the URL hash. With `highlight`, the target briefly flashes so it is
// easy to spot among its neighbours.
const scrollToId = (id, { highlight = false } = {}) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (highlight) {
    el.classList.remove("is-highlighted");
    void el.offsetWidth; // restart the animation if it is already running
    el.classList.add("is-highlighted");
    el.addEventListener(
      "animationend",
      () => el.classList.remove("is-highlighted"),
      { once: true }
    );
  }
};

const VIEWS = [
  { id: "schedule-table-view", label: "Table View" },
  { id: "schedule-expanded-view", label: "Expanded View" },
  { id: "schedule-floor-plans", label: "Floor Plans" },
];

const ViewSelector = () => (
  <nav className="iswc-track-index" aria-label="Choose a view">
    {VIEWS.map((view) => (
      <button
        type="button"
        key={view.id}
        className="iswc-track-index__item"
        onClick={() => scrollToId(view.id)}
      >
        {view.label}
      </button>
    ))}
  </nav>
);

const DaySelector = () => (
  <nav className="iswc-schedule__days" aria-label="Jump to a day">
    {schedule.map((day) => (
      <button
        type="button"
        key={day.id}
        className="iswc-schedule__day"
        onClick={() => scrollToId(`schedule-${day.id}`)}
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

// --- Table view: one compact table per day ----------------------------------
//
// Rows are time slots; parallel sessions sit side by side in unnamed
// columns. A row with fewer sessions than the day's busiest slot lets its
// last session stretch across the remaining columns, so a keynote or a
// break spans the full width.

// A horizontal scroller that shows when there is more to see. Whichever edge
// has hidden content fades out, and a small bar above the table says so and
// offers buttons to scroll. Nothing shows when the table fits (wide screens,
// quiet days, and phones, where the table reflows into cards).
const ScrollHint = ({ children }) => {
  const ref = useRef(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setEdges({ left: el.scrollLeft > 1, right: el.scrollLeft < max - 1 });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const scrollBy = (direction) =>
    ref.current?.scrollBy({
      left: direction * ref.current.clientWidth * 0.8,
      behavior: "smooth",
    });

  const overflowing = edges.left || edges.right;

  return (
    <>
      {overflowing && (
        <div className="iswc-scroll-hint__bar">
          <span className="iswc-scroll-hint__text">
            {edges.right
              ? "More sessions to the right"
              : "Scroll back for earlier sessions"}
          </span>
          <button
            type="button"
            className="iswc-table-toggle-all"
            onClick={() => scrollBy(-1)}
            disabled={!edges.left}
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            type="button"
            className="iswc-table-toggle-all"
            onClick={() => scrollBy(1)}
            disabled={!edges.right}
            aria-label="Scroll right"
          >
            More sessions →
          </button>
        </div>
      )}
      <div
        className={`iswc-scroll-hint${
          edges.left ? " iswc-scroll-hint--left" : ""
        }${edges.right ? " iswc-scroll-hint--right" : ""}`}
      >
        <div ref={ref} className="iswc-table-scroll">
          {children}
        </div>
      </div>
    </>
  );
};

const OverviewCell = ({ day, session, colSpan }) => {
  const kind = SESSION_KINDS[session.kind];
  const isBreak = session.kind === "break";
  const papers = session.papers?.length ?? 0;
  const meta = [
    roomLabel(session),
    papers > 0 && `${papers} paper${papers === 1 ? "" : "s"}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <td
      colSpan={colSpan > 1 ? colSpan : undefined}
      className={`iswc-overview__cell${
        session.kind ? ` iswc-kind--${session.kind}` : ""
      }`}
      style={kind ? { "--kind-color": kind.color } : undefined}
    >
      {isBreak ? (
        // Breaks have no entry of their own in the expanded view.
        <span className="iswc-overview__title">{session.title}</span>
      ) : (
        <button
          type="button"
          className="iswc-scroll-link iswc-overview__title"
          onClick={() =>
            scrollToId(sessionAnchor(day, session), { highlight: true })
          }
        >
          {session.title}
        </button>
      )}
      {meta && <div className="iswc-overview__meta">{meta}</div>}
      <SubSessions session={session} compact />
    </td>
  );
};

const DayOverview = ({ day }) => {
  const groups = timeGroups(day);
  if (groups.length === 0) return null;

  // Parallel sessions in room order, as in the expanded view.
  const roomOrder = (s) => day.rooms.indexOf(s.room ?? s.rooms?.[0]);
  const columns = Math.max(...groups.map((g) => g.sessions.length));

  return (
    <section id={`overview-${day.id}`} className="iswc-track">
      <h3 className="iswc-subheading">{day.label}</h3>
      <ScrollHint>
        <table
          className="iswc-table iswc-overview"
          style={{ "--overview-cols": columns }}
        >
          <colgroup>
            <col className="iswc-overview__time-col" />
            {Array.from({ length: columns }, (_, i) => (
              <col key={i} />
            ))}
          </colgroup>
          <tbody>
            {groups.map(({ time, sessions }) => {
              const row = [...sessions].sort(
                (a, b) => roomOrder(a) - roomOrder(b)
              );
              return (
                <tr key={time}>
                  <th scope="row" className="iswc-overview__time">
                    {time}
                  </th>
                  {row.map((session, i) => (
                    <OverviewCell
                      key={sessionAnchor(day, session)}
                      day={day}
                      session={session}
                      colSpan={
                        i === row.length - 1 ? columns - row.length + 1 : 1
                      }
                    />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </ScrollHint>
    </section>
  );
};

// --- Main conference days: time slot by time slot ---------------------------

// Paper tracks → badge modifier class. Unknown tracks fall back to a neutral badge.
const TRACK_CLASS = {
  Research: "research",
  Resource: "resource",
  "In-Use": "in-use",
  "Visionary Ideas" : "vis",
  "Industry" : "ind"
};

const StarIcon = () => (
  <svg
    className="iswc-paper-badge__icon"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z"
    />
  </svg>
);

const PaperBadges = ({ paper }) =>
  (paper.track || paper.spotlight) && (
    <div className="iswc-paper-badges">
      {paper.track && (
        <span
          className={`iswc-paper-badge iswc-paper-badge--${
            TRACK_CLASS[paper.track] ?? "other"
          }`}
        >
          {paper.track}
        </span>
      )}
      {paper.spotlight && (
        <span className="iswc-paper-badge iswc-paper-badge--spotlight">
          <StarIcon />
          Spotlight
        </span>
      )}
    </div>
  );

const Session = ({ day, session }) => {
  const room = roomLabel(session);

  return (
    <li id={sessionAnchor(day, session)} className="iswc-schedule-anchor">
      <span className="iswc-schedule-list__title">
        <SessionTitle session={session} />
      </span>
      {room && <div className="iswc-schedule-list__room">{room}</div>}
      {session.speaker && (
        <div className="iswc-agenda__speaker">{session.speaker}</div>
      )}
      {session.chairs && (
        <div className="iswc-schedule-list__chairs">
          Session chair: {session.chairs}
        </div>
      )}

       {session.description && (
        <p className="iswc-schedule-list__description">{session.description}</p>
      )}

      <SubSessions session={session} />

      {session.papers?.length > 0 && (
        <ul className="iswc-schedule-list__papers">
          {session.papers.map((paper) => (
            <li
              key={paper.id}
              className={paper.spotlight ? "iswc-paper--spotlight" : undefined}
            >
              <span className="iswc-table__title">{paper.title}</span>
              <div className="iswc-agenda__speaker">{paper.authors}</div>
              <PaperBadges paper={paper} />
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
        {sessions.map((session) => (
          <Session
            key={sessionAnchor(day, session)}
            day={day}
            session={session}
          />
        ))}
      </ul>
    </div>
  ));

// --- Workshop and tutorial days: Full day / Morning / Afternoon -------------

const SessionRow = ({ day, session }) => {
  const kind = SESSION_KINDS[session.kind];

  return (
    <li
      id={sessionAnchor(day, session)}
      className="iswc-schedule-rows__row iswc-schedule-anchor"
    >
      <div className="iswc-schedule-rows__room">{roomLabel(session)}</div>
      <div>
        <SessionTitle session={session} />
        <div className="iswc-schedule-rows__meta">
          {kind && session.kind !== "other" && (
            <span className="iswc-table__tag">{kind.label}</span>
          )}
          <span>{timeRange(session)}</span>
        </div>
      </div>
    </li>
  );
};

const DayByPart = ({ day }) => {
  // Registration has no end time; it gets its own line rather than "08:00–".
  const registration = day.sessions.find(
    (s) => s.kind === "break" && s.title === "Registration"
  );
  const breaks = day.sessions
    .filter((s) => s.kind === "break" && s !== registration)
    .sort(byTime);
  // Breaks with something happening inside them (lunches, sponsor coffee…)
  const breaksWithSubs = breaks.filter((b) => b.subsessions?.length > 0);

  // Kept in room order, so a room is easy to find in each list.
  const order = (s) => day.rooms.indexOf(s.room ?? s.rooms?.[0]);
  const sessions = day.sessions
    .filter((s) => s.kind !== "break")
    .sort((a, b) => order(a) - order(b) || byTime(a, b));

  return (
    <>
      {(registration || breaks.length > 0) && (
        <div className="iswc-schedule-rows__breaks">
          {registration && (
            <p>
              <b>Registration:</b> {registration.start.trim()}
            </p>
          )}
{breaks.length > 0 && (
  <p>
    <b>Breaks:</b>{" "}
    {breaks
      .map((b) => {
        const room = roomLabel(b);
        return `${b.title} ${timeRange(b)}${room ? ` (${room})` : ""}`;
      })
      .join(" · ")}
  </p>
)}
      {breaksWithSubs.map((b) => {
  const room = roomLabel(b);
  return (
    <div
      key={sessionAnchor(day, b)}
      id={sessionAnchor(day, b)}
      className="iswc-schedule-anchor"
    >
      <b>{b.title}</b> ({timeRange(b)}{room ? ` · ${room}` : ""})
      <SubSessions session={b} />
    </div>
  );
})}
        </div>
      )}

      {PARTS.map((part) => {
        const items = sessions.filter((s) => partOf(s) === part);
        if (items.length === 0) return null;

        return (
          <div key={part}>
            <h3 className="iswc-subheading">{part}</h3>
            <ul className="iswc-schedule-rows">
              {items.map((session) => (
                <SessionRow
                  key={sessionAnchor(day, session)}
                  day={day}
                  session={session}
                />
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

const SubSessions = ({ session, compact = false }) => {
  const subs = session.subsessions ?? [];
  if (subs.length === 0) return null;

  return (
    <ul className={`iswc-subsessions${compact ? " iswc-subsessions--compact" : ""}`}>
      {subs.map((sub, i) => {
        const time = sub.start ? timeRange({ start: sub.start, end: sub.end ?? "" }) : null;
        const meta = [sub.room, time].filter(Boolean).join(" · ");
        return (
          <li key={i} className="iswc-subsessions__item">
            <span className="iswc-subsessions__title">
              <SessionTitle session={sub} />
            </span>
            {meta && <span className="iswc-subsessions__meta">{meta}</span>}
            {!compact && sub.description && (
              <p className="iswc-subsessions__description">{sub.description}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const Schedule = () => (
  <Page>
    <Header>Schedule</Header>

    {schedule.length === 0 ? (
      <p className="iswc-note">The schedule will be published here soon.</p>
    ) : (
      <>
        <ViewSelector /> 

        <p className="iswc-callout">
          <b>Programme correct at time of publication.</b> Minor changes may
          occur; see this page for updates.
        </p>

         <DaySelector />

        <FloorPlans />


         

        <section id="schedule-table-view" className="iswc-track">
          <UnderlineHeader>Table View</UnderlineHeader>
          {schedule.map((day) => (
            <DayOverview key={day.id} day={day} />
          ))}
        </section>
        

        <section id="schedule-expanded-view" className="iswc-track">
             {/*<UnderlineHeader>Expanded View</UnderlineHeader>  */}
         
          {schedule.map((day) => (
            <Day key={day.id} day={day} />
          ))}
        </section>
      </>
    )}
  </Page>
);

export default Schedule;