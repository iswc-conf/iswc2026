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

  doctoral: { label: "Doctoral Consortium",  color:"#8438a2"},
  tutorial: { label: "Tutorial", color:"#85b38d"},
  workshop: { label: "Workshop", color:"#8693c0"},
  dag: {label: "Dagstuhl-style", color: "#ca7d7d"},
  other: {label: "Other", color: "#898383"},
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
    subtitle: "Conference Day 1",
    rooms: ["Sez. 1", "Sez. 2", "Sez. 3", "Sez. 4", "Sez. 5", "Sez. 6", "Sez. 7", "Sez. 8", "Sala Andromeda", "Sala Cigno", "Pegaso", "Orione", "Auriga (Perseo)"],
    sessions: [

      { start: "10:40", end: "11:10", allRooms: true, title: "Break", kind: "break" },
       { start: "12:50", end: "14:10", allRooms: true, title: "Break", kind: "break" },
       { start: "15:50", end: "16:20", allRooms: true, title: "Break", kind: "break" },

      { start: "09:00", end: "18:00", room: "Sez. 1", title: "#4  6th Wikidata Workshop", kind: "workshop" },
      { start: "09:00", end: "18:00", room: "Sez. 2", title: "#10  21st International Workshop on Ontology Matching (OM-2026)", kind: "workshop" },
      { start: "09:00", end: "18:00", room: "Sez. 3", title: "#21  17th Workshop on Ontology Design and Patterns (WOP)~2026", kind: "workshop" },

      { start: "09:00", end: "12:50", room: "Sez. 4", title: "#6  WikiKGQA: Wiki-Based Knowledge Graph Question Answering Challenge", kind: "workshop" },
      { start: "14:10", end: "18:00", room: "Sez. 4", title: "#7  Graph-Enhanced LLMs for Trustworthy Web Data Management", kind: "workshop" },

      { start: "09:00", end: "18:00", room: "Sez. 5", title: "#2  2nd International Workshop on Data Management for Knowledge Graphs (DMKG 2026)", kind: "workshop" },


      { start: "09:00", end: "12:50", room: "Sez. 6", title: "#497  GOOD: GOod Ontologies and how to Develop them", kind: "tutorial" },
      { start: "14:10", end: "18:00", room: "Sez. 6", title: "#458  OntoLM: Ontology Embedding, Reasoning and Construction with Language Models", kind: "tutorial" },
      { start: "09:00", end: "12:50", room: "Sez. 7", title: "#501  ARGO: Agentic Retrieval and Graph Orchestration for Document Knowledge Systems", kind: "tutorial" },
      { start: "14:10", end: "18:00", room: "Sez. 7", title: "#496  Continual Knowledge Graph Embedding: Foundations, Methods, and Open Challenges", kind: "tutorial" },
      { start: "09:00", end: "12:50", room: "Sez. 8", title: "#486  Shapes for Knowledge Graphs", kind: "tutorial" },
      { start: "14:10", end: "18:00", room: "Sez. 8", title: "#500  Façade-X Tutorial: Querying Any Format as a Knowledge Graph (FX)", kind: "tutorial" },

      { start: "09:00", end: "18:00", room: "Sala Andromeda", title: "#13  KG-NeSy: The Third Workshop on Knowledge Graphs and Neurosymbolic AI", kind: "workshop" },


    
      { start: "09:00", end: "12:50", room: "Sala Cigno", title: "#9  SeMatS 2026 Third International Workshop on Semantic Materials Science: Harnessing the Power of Semantic Web Technologies in Materials Science", kind: "workshop" },
      { start: "14:10", end: "18:00", room: "Sala Cigno", title: "#19  LLMs4OL 2026: Large Language Models for Ontology Learning", kind: "workshop" },

      { start: "09:00", end: "18:00", room: "Pegaso", title: "Multi-dimensional Knowledge Graphs (MKG)", kind: "dag" },
      { start: "09:00", end: "18:00", room: "Orione", title: "Computational cHallenges fRom hiGhly divErse Data (CHARGED)", kind: "dag" },

      { start: "09:00", end: "12:50", room: "Auriga (Perseo)", title: "#495  Neural Networks meet Explicit Knowledge Representation: Towards Mechanistic Interpretability and Neuro-symbolic Modeling by-design", kind: "tutorial" },
      { start: "14:10", end: "15:50", room: "Auriga (Perseo)", title: "#505  Intro to OWL Reasoning with Protégé", kind: "tutorial" },
      { start: "16:20", end: "18:00", room: "Auriga (Perseo)", title: "Doctoral Consortium", kind: "doctoral" },

    ],
  },
  {
    id: "2026-10-26",
    label: "Monday, 26 October 2026",
    subtitle: "Conference Day 2",
    rooms: ["Sez. 1", "Sez. 2", "Sez. 3", "Sez. 4", "Sez. 5", "Sez. 6", "Sez. 7", "Sez. 8", "Sala Andromeda", "Sala Cigno", "Pegaso", "Orione", "Auriga (Perseo)"],

    sessions: [

    ],
  },
];

export default schedule;
