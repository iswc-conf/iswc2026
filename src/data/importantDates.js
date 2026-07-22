/**
 * ISWC 2026 important dates.
 *
 * One entry per deadline. Months and ordering are derived from `date`, so
 * adding an entry anywhere in this list puts it in the right place
 * automatically — there are no month headings to keep in sync.
 *
 * date     ISO date (YYYY-MM-DD). Also used for the <time> element.
 * endDate  Optional, for multi-day events such as the conference itself.
 * label    What the deadline is.
 * kind     One of the CATEGORY keys below; drives the colour and filters.
 *
 * All deadlines are 23:59 AoE (anywhere on Earth).
 */

export const CATEGORIES = {
  submission: { label: "Submission", color: "var(--iswc-submission)" },
  notification: { label: "Notification", color: "var(--iswc-notification)" },
  cameraready: { label: "Camera-ready", color: "var(--iswc-cameraready)" },
  event: { label: "Conference event", color: "var(--iswc-event)" },
  other: { label: "Other", color: "var(--iswc-muted)" },
};

export const importantDates = [
  { date: "2026-02-10", label: "Workshop proposals deadline", kind: "submission" },
  { date: "2026-02-24", label: "Workshop notifications to proposers", kind: "notification" },

  { date: "2026-03-20", label: "Workshop website and CfP available online", kind: "other" },

  { date: "2026-04-03", label: "Challenge workshops release datasets", kind: "other" },

  {
    date: "2026-05-02",
    label: "Research, Resource, In-Use track abstract submission",
    kind: "submission",
  },
  {
    date: "2026-05-07",
    label: "Research, Resource, In-Use track full paper submission",
    kind: "submission",
  },

  { date: "2026-06-01", label: "Doctoral Consortium track submission", kind: "submission" },
  { date: "2026-06-09", label: "Tutorials track submission", kind: "submission" },
  { date: "2026-06-23", label: "Tutorials track notification", kind: "notification" },
  { date: "2026-06-26", label: "Challenge solution submission", kind: "submission" },
  { date: "2026-06-30", label: "Journal track session proposal", kind: "submission" },
  { date: "2026-06-30", label: "Dagstuhl style workshops submission", kind: "submission" },
  {
    date: "2026-06-30",
    label: "SWSA Early Career Award application deadline",
    kind: "submission",
  },

  { date: "2026-07-03", label: "Dagstuhl style workshops notification", kind: "notification" },
  {
    date: "2026-07-06",
    label: "SWSA Distinguished Dissertation Award submission",
    kind: "submission",
  },
  { date: "2026-07-06", label: "Doctoral Consortium notification", kind: "notification" },
  { date: "2026-07-07", label: "Industry track submission", kind: "submission" },
  { date: "2026-07-15", label: "Journal track session notifications", kind: "notification" },
  {
    date: "2026-07-16",
    label: "Research, Resource, In-Use track notifications",
    kind: "notification",
  },
  { date: "2026-07-17", label: "Dagstuhl style workshops website online", kind: "other" },
  { date: "2026-07-21", label: "Tutorial website online", kind: "other" },
  { date: "2026-07-24", label: "Posters and Demos track submission", kind: "submission" },
  { date: "2026-07-25", label: "Visionary Ideas track abstract submission", kind: "submission" },
  { date: "2026-07-27", label: "Revised Doctoral Consortium submission", kind: "submission" },
  {
    date: "2026-07-31",
    label: "Tutorial materials available on the website (if any)",
    kind: "other",
  },

  {
    date: "2026-08-01",
    label: "Visionary Ideas track full paper submission",
    kind: "submission",
  },
  { date: "2026-08-03", label: "Doctoral Consortium track camera-ready", kind: "cameraready" },
  { date: "2026-08-04", label: "Industry track notification", kind: "notification" },
  {
    date: "2026-08-06",
    label: "Research, Resource, In-Use track camera-ready",
    kind: "cameraready",
  },
  { date: "2026-08-21", label: "Posters and Demos track notification", kind: "notification" },
  {
    date: "2026-08-21",
    label: "Workshop program with accepted papers available online",
    kind: "notification",
  },
  { date: "2026-08-26", label: "Visionary Ideas track notification", kind: "notification" },

  { date: "2026-09-01", label: "Visionary Ideas track camera-ready", kind: "cameraready" },
  { date: "2026-09-04", label: "Posters and Demos track camera-ready", kind: "cameraready" },
  { date: "2026-09-11", label: "Industry track camera-ready", kind: "cameraready" },

  { date: "2026-10-25", endDate: "2026-10-26", label: "Workshop days", kind: "event" },
  { date: "2026-10-25", endDate: "2026-10-26", label: "Tutorial days", kind: "event" },
  { date: "2026-10-26", label: "Doctoral Consortium day", kind: "event" },
  { date: "2026-10-27", endDate: "2026-10-29", label: "Conference days", kind: "event" },
];

export default importantDates;
