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

      { link: "https://wikidataworkshop.github.io/2026/", start: "09:00", end: "18:00", room: "Sez. 1", title: "6th Wikidata Workshop", kind: "workshop" },
      { link: "https://om.ontologymatching.org/2026/", start: "09:00", end: "18:00", room: "Sez. 2", title: "21st International Workshop on Ontology Matching (OM-2026)", kind: "workshop" },
      { link: "https://odpa.github.io/workshop-on-ontology-design-and-patterns/2026/", start: "09:00", end: "18:00", room: "Sez. 3", title: "17th Workshop on Ontology Design and Patterns (WOP)~2026", kind: "workshop" },

      { link: "https://wikikgqa.org/", start: "09:00", end: "12:50", room: "Sez. 4", title: "WikiKGQA: Wiki-Based Knowledge Graph Question Answering Challenge", kind: "workshop" },
      { link: "https://glow-workshop.github.io/iswc2026/", start: "14:10", end: "18:00", room: "Sez. 4", title: "Graph-Enhanced LLMs for Trustworthy Web Data Management", kind: "workshop" },

      { link: "https://dmkg-workshop.github.io/2026/", start: "09:00", end: "18:00", room: "Sez. 5", title: "2nd International Workshop on Data Management for Knowledge Graphs (DMKG 2026)", kind: "workshop" },


      { link: "http://www.meteck.org/teaching/GOODtutISWC26.html", start: "09:00", end: "12:50", room: "Sez. 6", title: "GOOD: GOod Ontologies and how to Develop them", kind: "tutorial" },
      { link: "https://huiyang1997.github.io/OntoLM/", start: "14:10", end: "18:00", room: "Sez. 6", title: "OntoLM: Ontology Embedding, Reasoning and Construction with Language Models", kind: "tutorial" },
      { link: "https://argoiswc.github.io/", start: "09:00", end: "12:50", room: "Sez. 7", title: "ARGO: Agentic Retrieval and Graph Orchestration for Document Knowledge Systems", kind: "tutorial" },
      { link: "https://gerardponsrecasens.github.io/CKGE-FMOC/", start: "14:10", end: "18:00", room: "Sez. 7", title: "Continual Knowledge Graph Embedding: Foundations, Methods, and Open Challenges", kind: "tutorial" },
      { link: "https://www.validatingrdf.com/tutorial/iswc2026/", start: "09:00", end: "12:50", room: "Sez. 8", title: "Shapes for Knowledge Graphs", kind: "tutorial" },
      { link: "https://w3c-facade-x.github.io/iswc2026-tutorial/", start: "14:10", end: "18:00", room: "Sez. 8", title: "Façade-X Tutorial: Querying Any Format as a Knowledge Graph (FX)", kind: "tutorial" },

      { link: "https://kg-nesy.github.io/", start: "09:00", end: "18:00", room: "Sala Andromeda", title: "KG-NeSy: The Third Workshop on Knowledge Graphs and Neurosymbolic AI", kind: "workshop" },


    
      { link: "https://sites.google.com/view/semats2026", start: "09:00", end: "12:50", room: "Sala Cigno", title: "SeMatS 2026 Third International Workshop on Semantic Materials Science: Harnessing the Power of Semantic Web Technologies in Materials Science", kind: "workshop" },
      { link: "https://sites.google.com/view/llms4ol2026", start: "14:10", end: "18:00", room: "Sala Cigno", title: "LLMs4OL 2026: Large Language Models for Ontology Learning", kind: "workshop" },

      {link:"https://mkg.infinity-eccch.eu/", start: "11:00", end: "18:00", room: "Pegaso", title: "Multi-dimensional Knowledge Graphs (MKG)", kind: "dag" },
      {link:"https://dhlab-nl.github.io/charged-workshop/", start: "09:00", end: "18:00", room: "Orione", title: "Computational cHallenges fRom hiGhly divErse Data (CHARGED)", kind: "dag" },

      { link: "https://humancentricart.github.io/mechanistic-interpretability-by-design/iswc/index.html", start: "09:00", end: "12:50", room: "Auriga (Perseo)", title: "Neural Networks meet Explicit Knowledge Representation: Towards Mechanistic Interpretability and Neuro-symbolic Modeling by-design", kind: "tutorial" },
      { start: "14:10", end: "15:50", room: "Auriga (Perseo)", title: "Intro to OWL Reasoning with Protégé", kind: "tutorial" },
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


    { link: "https://2026.rage-kg.org/", start: "09:00", end: "18:00", room: "Sez. 1", title: "3rd International Workshop on Retrieval-Augmented Generation Enabled by Knowledge Graphs (RAGE-KG 2026)", kind: "workshop" },
    { link: "https://sci-k.github.io/2026/", start: "09:00", end: "18:00", room: "Sez. 2", title: "6th International Workshop on Scientific Knowledge Representation, Discovery, and Assessment (Sci-K 2026)", kind: "workshop" },
    { link: "https://www.loa.istc.cnr.it/index.php/swodch-2026/", start: "09:00", end: "18:00", room: "Sez. 3", title: "6th International Workshop on Semantic Web and Ontology Design for Cultural Heritage, SWODCH 2026", kind: "workshop" },

    { link: "https://sites.google.com/view/aiaa4ke/", start: "09:00", end: "12:50", room: "Sez. 4", title: "AIAA4KE: 1st Workshop on AI-assisted Approaches to Knowledge Engineering", kind: "workshop" },
    { link: "https://5thnlp4kgc-code.github.io/5nlp4kgc/index.html", start: "14:10", end: "18:00", room: "Sez. 4", title: "NLP4KGC 2026: 5th International Workshop on Natural Language Processing for Knowledge Graph Construction", kind: "workshop" },
    { link: "https://data-driven-storytelling-workshop.replit.app/", start: "09:00", end: "12:50", room: "Sez. 5", title: "Data-Driven Storytelling: Bridging Knowledge Graphs, GenAI, and Narrative (DDS 2026)", kind: "workshop" },
    { link: "https://sites.google.com/view/semiim-2026", start: "14:10", end: "18:00", room: "Sez. 5", title: "Fourth International Workshop on Semantic Industrial Information Modelling (SemIIM)", kind: "workshop" },


    { link: "https://cefriel.github.io/kg4di/", start: "09:00", end: "12:50", room: "Sez. 6", title: "Knowledge Graphs for Data Interoperability with Chimera (KG4DI)", kind: "tutorial" },
    { link: "https://vocbench.uniroma2.it/tutorials/iswc-2026", start: "14:10", end: "18:00", room: "Sez. 6", title: "VocBench & Co.: Encompassing the Full Data Lifecycle", kind: "tutorial" },
    { link: "http://graphwise.ai/iswc2026-workshop-scope", start: "09:00", end: "12:50", room: "Sez. 7", title: "SCOPE - Using SHACL and OWL in Combination for Practical Knowledge Graph Editing", kind: "tutorial" },
    { start: "14:10", end: "18:00", room: "Sez. 7", title: "Unlocking Legal Automation with Semantic Web Technology (ULA-SWeT)", kind: "tutorial" },
    { link: "https://elisjana.github.io/research/iswc2026-tutorial/", start: "09:00", end: "12:50", room: "Sez. 8", title: "Semantic-Aware Partitioning of Property Graphs", kind: "tutorial" },
    { link: "https://brains-group.github.io/PKG-Recs", start: "14:10", end: "18:00", room: "Sez. 8", title: "Personal Knowledge Graphs for LLM-Powered Decentralized Recommendations", kind: "tutorial" },

    { link: "https://sparkworkshop.github.io/", start: "09:00", end: "12:50", room: "Sala Andromeda", title: "SPARK 2026 - First International Workshop on Spatial Intelligence and Reasoning Enabled by Knowledge Graphs and Foundation Models", kind: "workshop" },
    { link: "https://sites.google.com/view/xaikg2026", start: "14:10", end: "18:00", room: "Sala Andromeda", title: "International Workshop on Explainable AI and Knowledge Graphs (XAI+KG)", kind: "workshop" },
    { link: "https://sites.google.com/view/elmke", start: "09:00", end: "12:50", room: "Sala Cigno", title: "ELMKE 2026: The 4th Workshop on Evaluation of Language Models in Knowledge Engineering", kind: "workshop" },
    { link: "https://www.omilab.org/activities/events/iswc2026_kgmdse/", start: "14:10", end: "18:00", room: "Sala Cigno", title: "Workshop on Knowledge Graphs and  Model-driven Systems Engineering (KGMDSE)", kind: "workshop" },


    { link:"https://redq-workshop.github.io/", start: "09:00", end: "12:50", room: "Pegaso", title: "Rethinking Data Quality for Generative AI and Knowledge Graphs (ReDQ)", kind: "dag" },
    { start: "14:10", end: "18:00", room: "Pegaso", title: "W3C TPAC RDF 1.2 WG", kind: "other" },
    { start: "09:00", end: "12:50", room: "Orione", title: "Semantic Affordances for the Web of Agents: Bridging Multi-Agent Systems, Semantic Web Services, and Agentic AI", kind: "dag" },
    { link: "https://taapaai.github.io", start: "14:10", end: "18:00", room: "Orione", title: "Towards Agendas for Advancing Personal Agentic Artificial Intelligence (TAAPAAI)", kind: "dag" },
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