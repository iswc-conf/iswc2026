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
  break: {label: "Break", color: "#b0b0b0"},
  other: {label: "Other", color: "#8a8803"},
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
      { start: "10:40", end: "11:10", allRooms: true, title: "Break", kind: "break" },
       { start: "12:50", end: "14:10", allRooms: true, title: "Break", kind: "break" },
       { start: "15:50", end: "16:20", allRooms: true, title: "Break", kind: "break" },


    { start: "09:00", end: "18:00", room: "Sez. 1", title: "#16  3rd International Workshop on Retrieval-Augmented Generation Enabled by Knowledge Graphs (RAGE-KG 2026)", kind: "workshop" },
    { start: "09:00", end: "18:00", room: "Sez. 2", title: "#5  6th International Workshop on Scientific Knowledge Representation, Discovery, and Assessment (Sci-K 2026)", kind: "workshop" },
    { start: "09:00", end: "18:00", room: "Sez. 3", title: "#18  6th International Workshop on Semantic Web and Ontology Design for Cultural Heritage, SWODCH 2026", kind: "workshop" },

    { start: "09:00", end: "12:50", room: "Sez. 4", title: "#20  AIAA4KE: 1st Workshop on AI-assisted Approaches to Knowledge Engineering", kind: "workshop" },
    { start: "14:10", end: "18:00", room: "Sez. 4", title: "#15  NLP4KGC 2026: 5th International Workshop on Natural Language Processing for Knowledge Graph Construction", kind: "workshop" },
    { start: "09:00", end: "12:50", room: "Sez. 5", title: "#14  Data-Driven Storytelling: Bridging Knowledge Graphs, GenAI, and Narrative (DDS 2026)", kind: "workshop" },
    { start: "14:10", end: "18:00", room: "Sez. 5", title: "#12  Fourth International Workshop on Semantic Industrial Information Modelling (SemIIM)", kind: "workshop" },


    { start: "09:00", end: "12:50", room: "Sez. 6", title: "#498  Knowledge Graphs for Data Interoperability with Chimera (KG4DI)", kind: "tutorial" },
    { start: "14:10", end: "18:00", room: "Sez. 6", title: "#503  VocBench & Co.: Encompassing the Full Data Lifecycle", kind: "tutorial" },
    { start: "09:00", end: "12:50", room: "Sez. 7", title: "#507  SCOPE - Using SHACL and OWL in Combination for Practical Knowledge Graph Editing", kind: "tutorial" },
    { start: "14:10", end: "18:00", room: "Sez. 7", title: "#506  Unlocking Legal Automation with Semantic Web Technology (ULA-SWeT)", kind: "tutorial" },
    { start: "09:00", end: "12:50", room: "Sez. 8", title: "#502  Semantic-Aware Partitioning of Property Graphs", kind: "tutorial" },
    { start: "14:10", end: "18:00", room: "Sez. 8", title: "#504  Personal Knowledge Graphs for LLM-Powered Decentralized Recommendations", kind: "tutorial" },

    { start: "09:00", end: "12:50", room: "Sala Andromeda", title: "#17  SPARK 2026 - First International Workshop on Spatial Intelligence and Reasoning Enabled by Knowledge Graphs and Foundation Models", kind: "workshop" },
    { start: "14:10", end: "18:00", room: "Sala Andromeda", title: "#23  International Workshop on Explainable AI and Knowledge Graphs (XAI+KG)", kind: "workshop" },
    { start: "09:00", end: "12:50", room: "Sala Cigno", title: "#3  ELMKE 2026: The 4th Workshop on Evaluation of Language Models in Knowledge Engineering", kind: "workshop" },
    { start: "14:10", end: "18:00", room: "Sala Cigno", title: "#8  Workshop on Knowledge Graphs and  Model-driven Systems Engineering (KGMDSE)", kind: "workshop" },


    { start: "09:00", end: "12:50", room: "Pegaso", title: "Rethinking Data Quality for Generative AI and Knowledge Graphs (ReDQ)", kind: "dag" },
    { start: "14:10", end: "18:00", room: "Pegaso", title: "W3C TPAC RDF 1.2 WG", kind: "other" },
    { start: "09:00", end: "12:50", room: "Orione", title: "Semantic Affordances for the Web of Agents: Bridging Multi-Agent Systems, Semantic Web Services, and Agentic AI", kind: "dag" },
    { start: "14:10", end: "18:00", room: "Orione", title: "Towards Agendas for Advancing Personal Agentic Artificial Intelligence (TAAPAAI)", kind: "dag" },
    { start: "09:00", end: "18:00", room: "Auriga (Perseo)", title: "Doctoral Consortium", kind: "doctoral" },


    ],
  },
    {
    id: "2026-10-27",
    label: "Tuesday, 27 October 2026",
    subtitle: "Conference Day 3",
    rooms: ["Sez. 1", "Sez. 2", "Sez. 3", "Sez. 4", "Sez. 5", "Sez. 6", "Sez. 7", "Sez. 8", "Sala Andromeda", "Sala Cigno", "Pegaso", "Orione", "Auriga (Perseo)"],

    sessions: [

    ],
  },
    {
    id: "2026-10-28",
    label: "Wednesday, 28 October 2026",
    subtitle: "Conference Day 4",
    rooms: ["Sez. 1", "Sez. 2", "Sez. 3", "Sez. 4", "Sez. 5", "Sez. 6", "Sez. 7", "Sez. 8", "Sala Andromeda", "Sala Cigno", "Pegaso", "Orione", "Auriga (Perseo)"],

    sessions: [

    ],
  },
    {
    id: "2026-10-29",
    label: "Thursday, 29 October 2026",
    subtitle: "Conference Day 5",
    rooms: ["Sez. 1", "Sez. 2", "Sez. 3", "Sez. 4", "Sez. 5", "Sez. 6", "Sez. 7", "Sez. 8", "Sala Andromeda", "Sala Cigno", "Pegaso", "Orione", "Auriga (Perseo)"],

    sessions: [

    ],
  },
];

export default schedule;
