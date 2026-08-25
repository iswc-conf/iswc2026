/**
 * Conference schedule — a multi-track, room-by-room timetable.
 *
 * Built to be edited by hand and to accept data from any source (the current
 * source is the draft pre-conference spreadsheet).
 *
 * Structure:
 *   schedule = [ day, day, ... ]
 *   day  = { id, label, subtitle?, note?, rooms: [name, ...], sessions: [ ... ] }
 *   session = { start, end, room, title, kind, speaker? }  // one block on the grid
 *
 * - `rooms` lists the day's rooms; it drives the room-filter chips.
 * - `start` / `end` are "HH:MM". Sessions are grouped by start time on the
 *   page; the card shows its own start–end range and can be any length.
 * - `room` must match one of `rooms`. Sessions with the same start time but a
 *   different room appear side by side (parallel tracks), each with a room tag.
 * - `allRooms: true` makes a card span the full width (registration, breaks,
 *   lunch, plenaries, receptions) — omit `room` in that case.
 * - `kind` is one of SESSION_KINDS below; it drives the colour and the legend.
 *
 * Everything on the page is derived from this list, so adding a room, moving a
 * session, or changing a time is a single edit here.
 */

// Each kind has a distinct accent colour (used for the legend swatch); the
// matching pastel fill and text colours live in the stylesheet under
// `.iswc-kind--{kind}`.
export const SESSION_KINDS = {
  session: { label: "Session", color: "#185FA5" },
  keynote: { label: "Keynote", color: "#B15143" },
  break: { label: "Break", color: "#7A7A73" },
  social: { label: "Social", color: "#BA7517" },
  plenary: { label: "Plenary", color: "#534AB7" },
};

// -----------------------------------------------------------------------------
// DRAFT / PLACEHOLDER DATA
// -----------------------------------------------------------------------------
// The rooms and sessions below are a placeholder for the two pre-conference
// days. Replace the room names, titles and times with the real programme from
// the schedule spreadsheet. Keep the shape and everything else works.
export const schedule = [
  {
    id: "2026-10-25",
    label: "Sunday, 25 October 2026",
    subtitle: "Pre-conference day 1",
    rooms: ["Room A", "Room B", "Room C"],
    sessions: [
      { start: "08:30", end: "09:00", allRooms: true, title: "Registration", kind: "break" },

      { start: "09:00", end: "10:30", room: "Room A", title: "Workshop — Knowledge Graphs (part 1)", kind: "session" },
      { start: "09:00", end: "12:30", room: "Room B", title: "Tutorial — Ontology Engineering (full morning)", kind: "session" },
      { start: "09:00", end: "10:30", room: "Room C", title: "Workshop — Neuro-symbolic AI (part 1)", kind: "session" },

      { start: "10:30", end: "11:00", allRooms: true, title: "Coffee break", kind: "break" },

      { start: "11:00", end: "12:30", room: "Room A", title: "Workshop — Knowledge Graphs (part 2)", kind: "session" },
      { start: "11:00", end: "12:30", room: "Room C", title: "Workshop — Neuro-symbolic AI (part 2)", kind: "session" },

      { start: "12:30", end: "14:00", allRooms: true, title: "Lunch", kind: "break" },

      { start: "14:00", end: "15:30", room: "Room A", title: "Tutorial — SHACL in practice", kind: "session" },
      { start: "14:00", end: "15:30", room: "Room B", title: "Workshop — LLMs and Knowledge Engineering", kind: "session" },
      { start: "14:00", end: "17:30", room: "Room C", title: "Doctoral Consortium (afternoon)", kind: "session" },

      { start: "15:30", end: "16:00", allRooms: true, title: "Coffee break", kind: "break" },

      { start: "16:00", end: "17:30", room: "Room A", title: "Tutorial — SHACL in practice (part 2)", kind: "session" },
      { start: "16:00", end: "17:30", room: "Room B", title: "Workshop — LLMs and Knowledge Engineering (part 2)", kind: "session" },
    ],
  },
  {
    id: "2026-10-26",
    label: "Monday, 26 October 2026",
    subtitle: "Pre-conference day 2",
    rooms: ["Room A", "Room B", "Room C"],
    sessions: [
      { start: "09:00", end: "10:30", room: "Room A", title: "Workshop session", kind: "session" },
      { start: "09:00", end: "10:30", room: "Room B", title: "Tutorial session", kind: "session" },
      { start: "09:00", end: "12:30", room: "Room C", title: "Doctoral Consortium (full morning)", kind: "session" },

      { start: "10:30", end: "11:00", allRooms: true, title: "Coffee break", kind: "break" },

      { start: "11:00", end: "12:30", room: "Room A", title: "Workshop session", kind: "session" },
      { start: "11:00", end: "12:30", room: "Room B", title: "Tutorial session", kind: "session" },

      { start: "12:30", end: "14:00", allRooms: true, title: "Lunch", kind: "break" },

      { start: "14:00", end: "15:30", room: "Room A", title: "Workshop session", kind: "session" },
      { start: "14:00", end: "15:30", room: "Room B", title: "Tutorial session", kind: "session" },
      { start: "14:00", end: "15:30", room: "Room C", title: "Workshop session", kind: "session" },

      { start: "15:30", end: "16:00", allRooms: true, title: "Coffee break", kind: "break" },

      { start: "16:00", end: "17:30", room: "Room A", title: "Workshop session", kind: "session" },
      { start: "16:00", end: "17:30", room: "Room B", title: "Tutorial session", kind: "session" },

      { start: "18:00", end: "20:00", allRooms: true, title: "Welcome Reception", kind: "social" },
    ],
  },
];

export default schedule;
