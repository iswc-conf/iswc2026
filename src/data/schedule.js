/**
 * Conference schedule — the single source for the Schedule page.
 *
 * Structure:
 *   schedule = [ day, day, ... ]
 *   day      = { id, label, subtitle?, note?, layout?, rooms: [name, ...], sessions: [ ... ] }
 *   session  = { start, end, title, kind, room | rooms | allRooms, chairs?, papers?, link?, speaker? }
 *   paper    = { id, title, authors, track }
 *
 * - `layout: "parts"` (workshop and tutorial days) lists the day as Full day /
 *   Morning / Afternoon, one row per session, with the breaks on one line.
 *   Without it the day is listed time slot by time slot.
 * - `start` / `end` are "HH:MM" (zero-padded). The page groups sessions by
 *   their start–end time.
 * - `room` is the session's room; `rooms: [...]` if it uses several, each
 *   with its own name. Shown on a line under the title.
 *   `allRooms: true` for the breaks of the workshop days (listed on one line).
 * - `title` is the text shown on the page, nothing else.
 * - `chairs` is shown as "Session chairs: ..." under the title ("TBD" until known).
 * - `papers` lists the papers presented in the session, in presentation order.
 * - `link` makes the title an external link.
 * - `kind` is one of SESSION_KINDS below.
 */

export const SESSION_KINDS = {
  doctoral: { label: "Doctoral Consortium", color: "#8438a2" },
  tutorial: { label: "Tutorial", color: "#85b38d" },
  workshop: { label: "Workshop", color: "#8693c0" },
  dag: { label: "Dagstuhl-style", color: "#ca7d7d" },
  break: { label: "Break", color: "#b0b0b0" },
  other: { label: "Other", color: "#8a8803" },
  ceremony: { label: "Ceremony", color: "#9800a3" },
  keynote: { label: "Keynote", color: "#41a300" },
  parallel: { label: "Parallel", color: "#8693c0" },
  poster: { label: "Town", color: "#86c0b8" },
};

const PRE_CONFERENCE_ROOMS = [
  "Sezione  1", "Sezione  2", "Sezione  3", "Sezione  4", "Sezione  5", "Sezione  6", "Sezione  7", "Sezione  8",
  "Sala Andromeda", "Sala Cigno", "Pegaso", "Orione", "Auriga (Perseo)",
];

const MAIN_ROOMS = ["Sezione 1", "Sezione 2", "Sezione 3&4", "Sezione 5"];
// Where the plenary activities of the main conference take place (keynotes,
// ceremonies, breaks, ...). Change the names here, or give a single session
// its own list, e.g. `rooms: ["Auditorium", "Sezione 2 (streamed)"]`.
const PLENARY = ["Plenary"];
const COFFEE = "Foyer (Floor -1)"
const LUNCH = "Cassiopea (Floor 1)"

export const schedule = [
  // ---------------------------------------------------------------------------
  // Sunday — workshops and tutorials
  // ---------------------------------------------------------------------------
  {
    id: "2026-10-25",
    label: "Sunday, 25 October 2026",
    subtitle: "Conference Day 1",
    layout: "parts",
    rooms: PRE_CONFERENCE_ROOMS,
    sessions: [
      { start: "10:40", end: "11:10", allRooms: true, title: "Break", kind: "break" },
      { start: "12:50", end: "14:10", allRooms: true, title: "Break", kind: "break" },
      { start: "15:50", end: "16:20", allRooms: true, title: "Break", kind: "break" },

      { start: "09:00", end: "18:00", room: "Sezione  1", title: "6th Wikidata Workshop", kind: "workshop", link: "https://wikidataworkshop.github.io/2026/" },
      { start: "09:00", end: "18:00", room: "Sezione  2", title: "21st International Workshop on Ontology Matching (OM-2026)", kind: "workshop", link: "https://om.ontologymatching.org/2026/" },
      { start: "09:00", end: "18:00", room: "Sezione  3", title: "17th Workshop on Ontology Design and Patterns (WOP) 2026", kind: "workshop", link: "https://odpa.github.io/workshop-on-ontology-design-and-patterns/2026/" },

      { start: "09:00", end: "12:50", room: "Sezione  4", title: "WikiKGQA: Wiki-Based Knowledge Graph Question Answering Challenge", kind: "workshop", link: "https://wikikgqa.org/" },
      { start: "14:10", end: "18:00", room: "Sezione  4", title: "Graph-Enhanced LLMs for Trustworthy Web Data Management", kind: "workshop", link: "https://glow-workshop.github.io/iswc2026/" },

      { start: "09:00", end: "18:00", room: "Sezione  5", title: "2nd International Workshop on Data Management for Knowledge Graphs (DMKG 2026)", kind: "workshop", link: "https://dmkg-workshop.github.io/2026/" },

      { start: "09:00", end: "12:50", room: "Sezione  6", title: "GOOD: GOod Ontologies and how to Develop them", kind: "tutorial", link: "http://www.meteck.org/teaching/GOODtutISWC26.html" },
      { start: "14:10", end: "18:00", room: "Sezione  6", title: "OntoLM: Ontology Embedding, Reasoning and Construction with Language Models", kind: "tutorial", link: "https://huiyang1997.github.io/OntoLM/" },
      { start: "09:00", end: "12:50", room: "Sezione  7", title: "ARGO: Agentic Retrieval and Graph Orchestration for Document Knowledge Systems", kind: "tutorial", link: "https://argoiswc.github.io/" },
      { start: "14:10", end: "18:00", room: "Sezione  7", title: "Continual Knowledge Graph Embedding: Foundations, Methods, and Open Challenges", kind: "tutorial", link: "https://gerardponsrecasens.github.io/CKGE-FMOC/" },
      { start: "09:00", end: "12:50", room: "Sezione  8", title: "Shapes for Knowledge Graphs", kind: "tutorial", link: "https://www.validatingrdf.com/tutorial/iswc2026/" },
      { start: "14:10", end: "18:00", room: "Sezione  8", title: "Façade-X Tutorial: Querying Any Format as a Knowledge Graph (FX)", kind: "tutorial", link: "https://w3c-facade-x.github.io/iswc2026-tutorial/" },

      { start: "09:00", end: "18:00", room: "Sala Andromeda", title: "KG-NeSy: The Third Workshop on Knowledge Graphs and Neurosymbolic AI", kind: "workshop", link: "https://kg-nesy.github.io/" },

      { start: "09:00", end: "12:50", room: "Sala Cigno", title: "SeMatS 2026 Third International Workshop on Semantic Materials Science: Harnessing the Power of Semantic Web Technologies in Materials Science", kind: "workshop", link: "https://sites.google.com/view/semats2026" },
      { start: "14:10", end: "18:00", room: "Sala Cigno", title: "LLMs4OL 2026: Large Language Models for Ontology Learning", kind: "workshop", link: "https://sites.google.com/view/llms4ol2026" },

      { start: "10:00", end: "18:00", room: "Pegaso", title: "Multi-dimensional Knowledge Graphs (MKG)", kind: "dag", link: "https://mkg.infinity-eccch.eu/" },
      { start: "09:00", end: "18:00", room: "Orione", title: "Computational cHallenges fRom hiGhly divErse Data (CHARGED)", kind: "dag", link: "https://dhlab-nl.github.io/charged-workshop/" },

      { start: "09:00", end: "12:50", room: "Auriga (Perseo)", title: "Neural Networks meet Explicit Knowledge Representation: Towards Mechanistic Interpretability and Neuro-symbolic Modeling by-design", kind: "tutorial", link: "https://humancentricart.github.io/mechanistic-interpretability-by-design/iswc/index.html" },
      { start: "14:10", end: "15:50", room: "Auriga (Perseo)", title: "Intro to OWL Reasoning with Protégé", kind: "tutorial" },
      { start: "16:20", end: "18:00", room: "Auriga (Perseo)", title: "Doctoral Consortium", kind: "doctoral" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Monday — workshops and tutorials
  // ---------------------------------------------------------------------------
  {
    id: "2026-10-26",
    label: "Monday, 26 October 2026",
    subtitle: "Conference Day 2",
    layout: "parts",
    rooms: PRE_CONFERENCE_ROOMS,
    sessions: [
      { start: "10:40", end: "11:10", allRooms: true, title: "Break", kind: "break" },
      { start: "12:50", end: "14:10", allRooms: true, title: "Break", kind: "break" },
      { start: "15:50", end: "16:20", allRooms: true, title: "Break", kind: "break" },

      { start: "09:00", end: "18:00", room: "Sezione  1", title: "3rd International Workshop on Retrieval-Augmented Generation Enabled by Knowledge Graphs (RAGE-KG 2026)", kind: "workshop", link: "https://2026.rage-kg.org/" },
      { start: "09:00", end: "18:00", room: "Sezione  2", title: "6th International Workshop on Scientific Knowledge Representation, Discovery, and Assessment (Sci-K 2026)", kind: "workshop", link: "https://sci-k.github.io/2026/" },
      { start: "09:00", end: "18:00", room: "Sezione  3", title: "6th International Workshop on Semantic Web and Ontology Design for Cultural Heritage, SWODCH 2026", kind: "workshop", link: "https://www.loa.istc.cnr.it/index.php/swodch-2026/" },

      { start: "09:00", end: "12:50", room: "Sezione  4", title: "AIAA4KE: 1st Workshop on AI-assisted Approaches to Knowledge Engineering", kind: "workshop", link: "https://sites.google.com/view/aiaa4ke/" },
      { start: "14:10", end: "18:00", room: "Sezione  4", title: "NLP4KGC 2026: 5th International Workshop on Natural Language Processing for Knowledge Graph Construction", kind: "workshop", link: "https://5thnlp4kgc-code.github.io/5nlp4kgc/index.html" },
      { start: "09:00", end: "12:50", room: "Sezione  5", title: "Data-Driven Storytelling: Bridging Knowledge Graphs, GenAI, and Narrative (DDS 2026)", kind: "workshop", link: "https://data-driven-storytelling-workshop.replit.app/" },
      { start: "14:10", end: "18:00", room: "Sezione  5", title: "Fourth International Workshop on Semantic Industrial Information Modelling (SemIIM)", kind: "workshop", link: "https://sites.google.com/view/semiim-2026" },

      { start: "09:00", end: "12:50", room: "Sezione  6", title: "Knowledge Graphs for Data Interoperability with Chimera (KG4DI)", kind: "tutorial", link: "https://cefriel.github.io/kg4di/" },
      { start: "14:10", end: "18:00", room: "Sezione  6", title: "VocBench & Co.: Encompassing the Full Data Lifecycle", kind: "tutorial", link: "https://vocbench.uniroma2.it/tutorials/iswc-2026" },
      { start: "09:00", end: "12:50", room: "Sezione  7", title: "SCOPE - Using SHACL and OWL in Combination for Practical Knowledge Graph Editing", kind: "tutorial", link: "http://graphwise.ai/iswc2026-workshop-scope" },
      { start: "14:10", end: "18:00", room: "Sezione  7", title: "Unlocking Legal Automation with Semantic Web Technology (ULA-SWeT)", kind: "tutorial" },
      { start: "09:00", end: "12:50", room: "Sezione  8", title: "Semantic-Aware Partitioning of Property Graphs", kind: "tutorial", link: "https://elisjana.github.io/research/iswc2026-tutorial/" },
      { start: "14:10", end: "18:00", room: "Sezione  8", title: "Personal Knowledge Graphs for LLM-Powered Decentralized Recommendations", kind: "tutorial", link: "https://brains-group.github.io/PKG-Recs" },

      { start: "09:00", end: "12:50", room: "Sala Andromeda", title: "SPARK 2026 - First International Workshop on Spatial Intelligence and Reasoning Enabled by Knowledge Graphs and Foundation Models", kind: "workshop", link: "https://sparkworkshop.github.io/" },
      { start: "14:10", end: "18:00", room: "Sala Andromeda", title: "International Workshop on Explainable AI and Knowledge Graphs (XAI+KG)", kind: "workshop", link: "https://sites.google.com/view/xaikg2026" },
      { start: "09:00", end: "12:50", room: "Sala Cigno", title: "ELMKE 2026: The 4th Workshop on Evaluation of Language Models in Knowledge Engineering", kind: "workshop", link: "https://sites.google.com/view/elmke" },
      { start: "14:10", end: "18:00", room: "Sala Cigno", title: "Workshop on Knowledge Graphs and Model-driven Systems Engineering (KGMDSE)", kind: "workshop", link: "https://www.omilab.org/activities/events/iswc2026_kgmdse/" },

      { start: "09:00", end: "12:50", room: "Pegaso", title: "Rethinking Data Quality for Generative AI and Knowledge Graphs (ReDQ)", kind: "dag", link: "https://redq-workshop.github.io/" },
      { start: "14:10", end: "18:00", room: "Pegaso", title: "W3C TPAC RDF 1.2 WG", kind: "other" },
      { start: "09:00", end: "12:50", room: "Orione", title: "Semantic Affordances for the Web of Agents: Bridging Multi-Agent Systems, Semantic Web Services, and Agentic AI", kind: "dag" },
      { start: "14:10", end: "18:00", room: "Orione", title: "Towards Agendas for Advancing Personal Agentic Artificial Intelligence (TAAPAAI)", kind: "dag", link: "https://taapaai.github.io" },
      { start: "09:00", end: "18:00", room: "Auriga (Perseo)", title: "Doctoral Consortium", kind: "doctoral" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Tuesday — main conference
  // ---------------------------------------------------------------------------
  {
    id: "2026-10-27",
    label: "Tuesday, 27 October 2026",
    subtitle: "Conference Day 3",
    rooms: MAIN_ROOMS,
    sessions: [
      { start: "08:45", end: "09:15", rooms: PLENARY, title: "Opening Ceremony", kind: "ceremony"},
      { start: "09:15", end: "10:15", rooms: PLENARY, title: "Keynote 1 - Frank van Harmelen", kind: "keynote", chairs: "TBD", link: "/#/program/keynotespeakers?speaker=frank-van-harmelen" },
      { start: "10:15", end: "10:45", room: COFFEE, title: "Coffee Break", kind: "break" },

      {
        start: "10:45", end: "12:15", room: "Sezione 1", kind: "parallel",
        title: "Dynamic and Streaming Knowledge Graphs, Querying, and Provenance",
        chairs: "TBD",
        slot: 1,
        papers: [
          { id: 259, title: "Open all the windows! : RSP-QL under cross-window entailment with provenance semi-rings", authors: "Cas Proost and Pieter Bonte", track: "Research" },
          { id: 54, title: "Fully Inductive Cardinality Estimation", authors: "Tim Schwabe, Lukas Ketzer and Maribel Acosta", track: "Research" },
          { id: 233, title: "HERITRACE: a domain-agnostic framework for SHACL-driven RDF curation with provenance and change tracking", authors: "Arcangelo Massari and Silvio Peroni", track: "Resource" },
          { id: 307, title: "QAER: Query-Adaptive Evidence Routing for Temporal Knowledge Graph Extrapolation", authors: "Kaibo Zhang, Feng Ye, Peng Zhang, Fengsheng Li, Zheng Wu, Jiahuan Li, Xuanzhe Zhao and Hui Min", track: "Research" },
        ],
      },
      {
        start: "10:45", end: "12:15", room: "Sezione 2", kind: "parallel",
        title: "Knowledge Graph Learning and Temporal Reasoning",
        chairs: "TBD",
        slot: 6,
        papers: [
          { id: 151, title: "Fetch That Stream! RetrievR-guided Virtual Linked Stream Discovery and Access", authors: "Daniel de Leng, Robin Keskisärkkä, Volodymyr Kadzhaia and Pieter Bonte", track: "Research" },
          { id: 310, title: "Can we GLUE it? Extending an Interactive Adhesive Selector with Knowledge Graphs", authors: "Ioannis Dasoulas, Simon Vandevelde, Jeroen Jordens, Duo Yang, Xuemin Duan, Abdellatif Bey-Temsamani, Joost Vennekens and Anastasia Dimou", track: "In-Use" },
          { id: 28, title: "Bridging Semantic Gap in Temporal Knowledge Graph Reasoning via Spatiotemporal-aware Entity Profile Graph Embedding", authors: "Sheng Tian, Haoran Wang, Wanru Fang, Shijie Leng, Kun Wang, Qi Liu and Xiaomei Wei", track: "Research" },
          { id: 112, title: "JediKG: Return of the Schema - Building Complete Datasets for Machine Learning and Reasoning on Knowledge Graphs", authors: "Ivan Diliso, Roberto Barile, Nicola Fanizzi and Claudia D'Amato", track: "Resource" },
        ],
      },
      {
        start: "10:45", end: "12:15", room: "Sezione 3&4", kind: "parallel",
        title: "Ontology-Driven Modeling, Integration, and Workflows",
        chairs: "TBD",
        slot: 10,
        papers: [
          { id: 170, title: "Integrating Semantics into Research Data Management: Modelling and Validating Materials Science Experiment Workflows", authors: "Samuel García Vázquez, Victor Dudarev, Alfred Ludwig, Markus Stricker and Maribel Acosta", track: "In-Use" },
          { id: 111, title: "A General Sufficient Condition for Rewriting Horn-ALCHI Queries into GQL", authors: "David Carral, Calixte Gruson and Quentin Manière", track: "Research" },
          { id: 65, title: "MIAO: A Mental Illness Analysis Ontology for Detecting Mental Health Conditions", authors: "Gianluca Apriceno, Sergio Muñoz, Tania Bailoni, Mauro Dragoni and Carlos Ángel Iglesias", track: "Resource" },
          { id: 134, title: "MQTO: A Connector Ontology for Cross-Domain Manufacturing Quality Troubleshooting", authors: "Stefan Bischof, Florian Rötzer, Erwin Filtz, Josiane Xavier Parreira, Simon Steyskal and Stephan Strommer", track: "Resource" },
        ],
      },
      {
        start: "10:45", end: "12:15", room: "Sezione 5", kind: "parallel",
        title: "LLMs and Agentic AI for Knowledge Graphs",
        chairs: "TBD",
        slot: 9,
        papers: [
          { id: 37, title: "Select, Don’t Train: The Benefits of Modular Entity Disambiguation with LLM-Based Selection", authors: "Fina Polat, Daniel Daza, Pengyu Zhang, Klim Zaporojets and Paul Groth", track: "Research" },
          { id: 173, title: "Transparent, Traceable, Deterministic: Agentic Memory via Knowledge Graphs", authors: "Anna Lisa Gentile, Sungeun An and Chad DeLuca", track: "In-Use" },
          { id: 302, title: "Improving the Computational Efficiency of Neural Link Predictors", authors: "Anas Azdad, Victor Charpenay and Antoine Zimmermann", track: "Research" },
          { id: 123, title: "NL2SHACL-Bench: A Benchmark Suite for Natural Language to SHACL Translation", authors: "Yuchen Zhou, Niels Bobet and Maribel Acosta", track: "Resource" },
        ],
      },

      { start: "12:15", end: "13:45", room: LUNCH, title: "Lunch", kind: "break" },

      {
        start: "13:45", end: "15:15", room: "Sezione 1", kind: "parallel",
        title: "Knowledge Graph Alignment, Evolution, and Temporal Forecasting",
        chairs: "TBD",
        slot: 2,
        papers: [
          { id: 90, title: "SECEA: Self Configuring Matcher Framework For Entity And Knowledge Graph Alignment", authors: "Alexander Becker, Axel-Cyrille Ngonga Ngomo and Mohamed Ahmed Sherif", track: "Research" },
          { id: 240, title: "Evaluating Competency Questions: Measuring Perspectivisation from Requirement Sources", authors: "Anna Sofia Lippolis, Andrea Giovanni Nuzzolese, Valentina Presutti and Minh Davide Ragagni", track: "Research" },
          { id: 167, title: "CountTRuCoLa: Rule Learning for Interpretable Temporal Knowledge Graph Forecasting", authors: "Julia Gastinger, Christian Meilicke and Heiner Stuckenschmidt", track: "Research" },
          { id: 267, title: "Vibes Lore Core: the Aesthetics Knowledge Graph", authors: "Silvia Cappa, Anna Sofia Lippolis, Anouk Flinkert, Ekaterina Krasnova, Shiho Nakamura, Andrea Giovanni Nuzzolese and Aldo Gangemi", track: "Resource" },

        ],
      },
      {
        start: "13:45", end: "15:15", room: "Sezione 2", kind: "parallel",
        title: "Knowledge Graphs and Linked Data",
        chairs: "TBD",
        slot: 7,
        papers: [
          { id: 293, title: "FITTER: Vocabulary-Agnostic Inference on Temporal Knowledge Graphs", authors: "Jiaxin Pan, Mojtaba Nayyeri, Osama Mohammed, Daniel Hernández, Rongchuan Zhang, Cheng Cheng and Steffen Staab", track: "Research" },
          { id: 127, title: "An Open Linked Data Portal for Benchmarking Web AI Agents in the European Health Data Space", authors: "Meem Arafat Manab and Victor Rodríguez-Doncel", track: "Resource" },
          { id: 135, title: "PeGazUs: A knowledge graph to represent Paris addresses from the 18th century to nowadays", authors: "Charly Bernard, Nathalie Abadie, Bertrand Duménieu and Julien Perret", track: "Resource" },
          { id: 377, title: "DMFO: A Modular Alignment Architecture for Situationally Interpretable State Representations", authors: "Jan Christian Redlich, Peter Kloke and Sebastian Bosse", track: "Resource" },
        ],
      },
      { start: "13:45", end: "15:15", room: "Sezione 3&4", title: "Journal Papers from TGDK", kind: "parallel", chairs: "TBD" },
      { start: "13:45", end: "15:15", room: "Sezione 5", title: "Journal Papers from SWJ", kind: "parallel", chairs: "TBD" },

      { start: "15:15", end: "15:45", room: COFFEE, title: "Coffee Break", kind: "break" },
      { start: "15:45", end: "17:15", rooms: PLENARY, title: "Keynote 2 - James Hendler ", kind: "keynote", chairs: "TBD", link: "/#/program/keynotespeakers?speaker=james-hendler"},
      { start: "17:15", end: "18:25", rooms: PLENARY, title: "Minute Madness", kind: "parallel", chairs: "TBD" },
      //{ start: "18:25", end: "19:00",  title: "Poster Setting Up" },
      { start: "19:00", end: "21:00", rooms: PLENARY, title: "Poster and Demos", kind: "parallel", chairs: "TBD" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Wednesday — main conference
  // ---------------------------------------------------------------------------
  {
    id: "2026-10-28",
    label: "Wednesday, 28 October 2026",
    subtitle: "Conference Day 4",
    rooms: MAIN_ROOMS,
    sessions: [
      { start: "09:00", end: "10:00", rooms: PLENARY, title: "Keynote 3 - Tara Raafat", kind: "keynote", chairs: "TBD", link: "/#/program/keynotespeakers?speaker=tara-raafat" },
      { start: "10:00", end: "10:30", room: COFFEE, title: "Coffee Break", kind: "break" },


      {
        start: "10:30", end: "12:00", room: "Sezione 1", kind: "parallel",
        title: "Robust Knowledge Graph Learning, Construction, and Data Quality",
        chairs: "TBD",
        slot: 8,
        papers: [
          { id: 216, title: "Simulating Missing Data Patterns in Knowledge Graphs", authors: "Jovana Dobreva and Tomer Sagi", track: "Research" },
          { id: 221, title: "THGFM: Dual-Branch Temporal Heterogeneous Graph Fusion Model", authors: "Yixin Peng, Diego Collarana, Er Jin and Stefan Decker", track: "Research" },
          { id: 245, title: "ImbalancE: Inference-Time Latent Search Against Degree Imbalance in Link Prediction", authors: "Alberto Bernardi, Luca Costabello and Christophe Gueret", track: "Research" },
          { id: 266, title: "Constraint-Guided RDF Construction with Provenance", authors: "Xuemin Duan, David Chaves-Fraga and Anastasia Dimou", track: "Research" },
        ],
      },


      {
        start: "10:30", end: "12:00", room: "Sezione 2", kind: "parallel",
        title: "Ontology Engineering, Question Answering and LLMs",
        chairs: "TBD",
        slot: 15,
        papers: [
          { id: 56, title: "DistillER: Knowledge Distillation in Entity Resolution with Large Language Models", authors: "Alexandros Zeakis, George Papadakis and Dimitrios Skoutas", track: "Research" },
          { id: 176, title: "FedV-KGQA: Multi-Hop Question Answering over Vertically Partitioned Knowledge Graphs", authors: "Md Saikat Islam Khan Bappy and Oshani Seneviratne", track: "Research" },
          { id: 358, title: "CQ4OE: A benchmark for assessing LLM-assisted ontology generation from competency questions", authors: "Jiayi Li, Ziyuan Wang, Daniel Garijo and María Poveda Villalón", track: "Resource" },
          { id: 401, title: "RDFS-LLM-Bench: A Benchmark for Evaluating RDF Schema Inference in LLMs", authors: "Taichi Hosokawa, Sudesna Chakraborty and Takeshi Morita", track: "Resource" },
        ],
      },

      {
        start: "10:30", end: "12:00", room: "Sezione 3&4", kind: "parallel",
        title: "Federation, Alignment, and Semantic Interoperability",
        chairs: "TBD",
        slot: 4,
        papers: [
          { id: 199, title: "Does SPARQL federation work in the real world? A case study over large biological SPARQL endpoints", authors: "Elias Crum, Bryan-Elliott Tam, Jonni Hanski, Ana-Claudia Sima, Tarcisio Mendes de Farias, Jerven Bolleman and Ruben Taelman", track: "In-Use" },
          { id: 295, title: "Uplifting the Superpowers of Worst-Case-Optimal Join Algorithms", authors: "Adrián Gómez-Brandón, Aidan Hogan and Gonzalo Navarro", track: "Research" },
          { id: 350, title: "Improving Interoperability among Defence and National Security Ontologies: Analysis and Evaluation Tasks", authors: "Jonathon Dilworth, Pedro Giesteira Cotovio, David Herron, Paul Cripps, Nigel Dewdney, Catia Pesquita and Ernesto Jiménez-Ruiz", track: "Resource" },
          { id: 444, title: "SEER-KG: Side Effect Exploration and Evaluation with Knowledge Graph-based Retrieval in Knowledge Editing for LLMs", authors: "Patipon Wiangnak, Natthawut Kertkeidkachorn and Kiyoaki Shirai", track: "Research" },
        ],
      },

      { start: "10:30", end: "12:00", room: "Sezione 5", title: "Industry Papers I", kind: "parallel", chairs: "TBD" },

      { start: "12:00", end: "13:30", room: LUNCH, title: "Lunch", kind: "break" },

      {
        start: "13:30", end: "15:00", room: "Sezione 1", kind: "parallel",
        title: "Graph Languages, Federation, and Provenance",
        chairs: "TBD",
        slot: 5,
        papers: [
          { id: 306, title: "A Compositional Language for Property Graphs", authors: "Marcelo Arenas, Leonid Libkin and Wim Martens", track: "Research" },
          { id: 437, title: "FeDivers: Graph-Pattern-Aware Source Selection for Scalable SPARQL Federations", authors: "Erwan Boisteau-Desdevises, Gabriela Montoya, Brice Nédelec, Pascal Molli, Hala Skaf-Molli and Salim Tasan", track: "Research" },
          { id: 193, title: "kgDRIFT: Modeling the Evolution of User Interests through Embedding-Induced Summaries", authors: "Giannis Vassiliou, Georgia Troullinou, Georgia Eirini Trouli and Haridimos Kondylakis", track: "Research" },
          { id: 126, title: "Authoring and Management of Transparent Research Integrity Assessments of Randomised Clinical Trial Publications Using LLM-Assisted Tools and Provenance Knowledge Graphs", authors: "Milan Markovic, Goutham Indukuri, Somayajulu Sripada, Colby Vorland, Jack Wilkinson, Mark Bolland, Andrew Grey, Miriam Brazzelli, Alison Avenell and Clare Robertson", track: "Resource" },
        ],
      },

      {
        start: "13:30", end: "15:00", room: "Sezione 2", kind: "parallel",
        title: "Ontology Management and Explanation, and Knowledge Graph Validation ",
        chairs: "TBD",
        slot: 17,
        papers: [
          { id: 347, title: "Recovering Explanations from Transformed Rule-Based Ontologies", authors: "Alex Ivliev, Markus Krötzsch and Maximilian Marx", track: "Research" },
          { id: 270, title: "Ontology Unpacking and Semantic Bridging for Enterprise Decision-Making", authors: "Antony Medeiros, Daniel Schwabe and Sergio Lifschitz", track: "Research" },
          { id: 362, title: "Rewrite Once, Validate Anywhere: Producing OWL-Aware SHACL Constraints", authors: "Anouk Michelle Oudshoorn, Piotr Gorczyca and Dörthe Arndt", track: "Research" },
          { id: 312, title: "A Semantic Resource Suite for Privacy Policy Formalization", authors: "Rui Zhao, Vladyslav Melnychuk, Jesse Wright, Jun Zhao and Nigel Shadbolt", track: "Resource" },
        ],
      },
      {
        start: "13:30", end: "15:00", room: "Sezione 3&4", kind: "parallel",
        title: "Neurosymbolic reasoning in knowledge graphs",
        chairs: "TBD",
        slot: 11,
        papers: [
          { id: 257, title: "A Neurosymbolic Scholarly Intelligence System in Use at Springer Nature", authors: "Antonello Meloni, Angelo Salatino, Francesco Osborne, Alexis Vizcaino, Aliaksandr Birukou, Diego Reforgiato Recupero and Enrico Motta", track: "In-Use" },
          { id: 69, title: "Dempster–Shafer Evidence Calibration for Conflict-Aware Knowledge Graph Reasoning", authors: "Kang Yao, Quanbo Cheng, Zhijie Ren, Jinjiang Cui and Weiwei Fu", track: "Research" },
          { id: 331, title: "Stratified Negation in RDF Rules: A Correct Approach", authors: "Nils Küchenmeister, Alex Ivliev, Dörthe Arndt and Markus Krötzsch", track: "Research" },
          { id: 189, title: "MedSchema: A Chinese Medical Schema Rule Dataset for Advancing Neuro-Symbolic Reasoning", authors: "Yu Huang, Ke Xiong, Chuanhao Xu, Tingxin Jiang, Yang Liu and Xiaowang Zhang", track: "Resource" },
        ],
      },

      { start: "13:30", end: "15:00", room: "Sezione 5", title: "Industry Papers II", kind: "parallel", chairs: "TBD" },

      { start: "15:00", end: "15:30", room: COFFEE, title: "Coffee Break", kind: "break" },


      {
        start: "15:30", end: "17:45", room: "Sezione 1", kind: "parallel",
        title: "Grounded LLMs, Scalable Reasoning, and Privacy",
        chairs: "TBD",
        slot: 20,
        papers: [
          { id: 190, title: "How Graphs ground Large Language Models - Counterfactuals for Subgraph Verbalizations", authors: "Sara Buchmann, Emanuel Slany and Stephan Scheele", track: "Research" },
          { id: 404, title: "Fast, flexible, interpretable: massively parallel knowledge graph reasoning and concept alignment with OWL ontologies", authors: "Jade Franklin, John Erickson and Deborah McGuinness", track: "Research" },
          { id: 303, title: "Tractable Query Answering under Epistemic Confidentiality Policies in Description Logic Ontologies", authors: "Lorenzo Marconi, Daniela Rieti and Riccardo Rosati", track: "Research" },
          { id: 88, title: "SolidSessionBench: Realistic Query Sequences for User-Oriented Decentralized Environments", authors: "Ruben Eschauzier and Ruben Taelman", track: "Resource" },
          { id: 73, title: "CQGen-MAS: Iterative Multi-Agent CQ Generation for Ontology Retrofitting", authors: "Fei Du, Li Chen, Evgeny Kharlamov, Yihan Lu and Weidong Liu", track: "Research" },
          { id: 288, title: "LELA: LLM-based Entity Linking with Zero-Shot Domain Adaptation", authors: "Samy Haffoudhi, Fabian Suchanek and Nils Holzenberger", track: "Research" },
        ],
      },

      {
        start: "15:30", end: "17:45", room: "Sezione 2", kind: "parallel",
        title: "Neurosymbolic reasoning and ontologies",
        chairs: "TBD",
        slot: 13,
        papers: [
          { id: 147, title: "Bridging the Semantic Web and Model-Based Systems Engineering with the Ontological Modeling Language", authors: "Maged Elaasar, Bentley Oakes, Eduard Kamburjan, Mohammad Hamdaqa and Abdelwahab Hamou-Lhadj", track: "In-Use" },
          { id: 89, title: "Neuro-Symbolic Meta-Policies for Temporal Knowledge-Graph Memory under Partial Observability", authors: "Taewoon Kim, Vincent Francois Lavet and Michael Cochez", track: "Research" },
          { id: 106, title: "Moose: Latent concept learning with reasoning-shortcut awareness in EL++", authors: "Olga Mashkova, Asaad Mohammedsaleh, Fernando Zhapa-Camacho and Robert Hoehndorf", track: "Research" },
          { id: 241, title: "TP-ONT: An Ontology for Enhanced Reasoning in AI Task Planning via Atomic Decomposition", authors: "Ma'Ayan Armony, Albert Meroño-Peñuela and Gerard Canal", track: "Resource" },
          { id: 375, title: "Linking the Grid: A Knowledge Graph Approach to France’s Electricity Consumption", authors: "Thibault Ehrhart, Pasquale Lisena, Raphael Troncy, Ghislain Agoua, Somsakun Maneerat and Fatma-Zohra Hannou", track: "In-Use" },
          { id: 255, title: "NORMA: A Semantic Framework for Legal Norm Representation from Annotated BPMN", authors: "Sheyla Leyva Sánchez, María Poveda-Villalón, Victor Rodríguez-Doncel, Marinella Quaranta, Ilaria Angela Amantea and Meem Arafat Manab", track: "Resource" },
        ],
      },

      {
        start: "15:30", end: "17:45", room: "Sezione 3&4", kind: "parallel",
        title: "Uncertain Querying, Knowledge Graph Augmentation, and Data Sharing",
        chairs: "TBD",
        slot: 21,
        papers: [
          { id: 254, title: "ProbSPARQL: Querying Knowledge Graphs with Multi-dimensional, Uncertain Numeric Data", authors: "Jingcheng Wu, Ratan Bahadur Thapa, Daniel Hernandez, Hongkuan Zhou and Steffen Staab", track: "In-Use" },
          { id: 421, title: "Mitigating Exploration Sluggishness in Iterative Knowledge Graph Augmentation", authors: "Zequn Sun, Xiaohui Zhang, Yaqin Jin and Wei Hu", track: "Research" },
          { id: 311, title: "Beyond Edge Addition: A Dataset for Information Extraction Incorporating New Instances, Types, and Relations", authors: "Sven Hertling, Cedric Möller, Nandana Mihindukulasooriya and Ricardo Usbeck", track: "Resource" },
          { id: 337, title: "Knowledge Graph–Supported Negotiation for Data Sharing", authors: "Soulmaz Gheisari and George Konstantinidis", track: "Research" },
          { id: 273, title: "SNAP-KG: Streaming Node Assignment via Projection for Knowledge Graph Entity Integration", authors: "Jui-Chien Lin, Oshani Seneviratne and Mohammad Mohammadi Amiri", track: "Research" },
          { id: 143, title: "Knowledge Graph Representation Learning with Efficient Message Passing", authors: "Huu Tan Mai, Cuong Xuan Chu, Heiko Paulheim and Daria Stepanova", track: "Research" },
        ],
      },

      {
        start: "15:30", end: "17:45", room: "Sezione 5", kind: "parallel",
        title: "Scalable Knowledge Graph Query Processing and Optimization",
        chairs: "TBD",
        slot: 3,
        papers: [
          { id: 138, title: "Evolving FedX: High-Performance SPARQL Federation in the Eclipse RDF4J Ecosystem", authors: "Andreas Schwarte, Peter Haase and Katja Hose", track: "In-Use" },
          { id: 125, title: "Query-Specific Pruning of RML Mappings", authors: "Sitt Min Oo and Olaf Hartig", track: "Research" },
          { id: 83, title: "STC: Semantic Target Control for Frozen Knowledge Graph Completion Rankings", authors: "Efstratios Skaperdas and Nick Bassiliades", track: "Research" },
          { id: 341, title: "froGQL: Worst-Case Optimal Joins and Type-Driven Optimization for Lightweight GQL", authors: "Felipe Avendaño, Jean Paul Duchens, Sebastián Ferrada and Matías Toro", track: "Resource" },
          { id: 385, title: "Who Speaks Matters: Authority-Aware Multi-View Retrieval-Augmented Generation over Italian Parliamentary Proceedings", authors: "Mirko Tritella, Riccardo Pozzi and Matteo Palmonari", track: "In-Use" },
          { id: 234, title: "Semantified CEUR-WS in Wikidata", authors: "Wolfgang Fahl, Tim Holzheim, Christoph Lange, Jerven Bolleman and Stefan Decker", track: "In-Use" },
        ],
      },
      { start: "19:15 ", end: " Late",  title: "Gala Dinner & Disco (Villa de Grecis)", link: "https://maps.app.goo.gl/rnbViwj1LuaGquZp8" },


    ],
  },

  // ---------------------------------------------------------------------------
  // Thursday — main conference
  // ---------------------------------------------------------------------------
  {
    id: "2026-10-29",
    label: "Thursday, 29 October 2026",
    subtitle: "Conference Day 5",
    rooms: MAIN_ROOMS,
    sessions: [
      { start: "09:00", end: "10:00", rooms: PLENARY, title: "Keynote 4 - Francesca Toni", kind: "keynote", chairs: "TBD", link: "/#/program/keynotespeakers?speaker=francesca-toni" },
      { start: "10:00", end: "10:30", room: COFFEE, title: "Coffee Break", kind: "break" },


      {
        start: "10:30", end: "12:00", room: "Sezione 1", kind: "parallel",
        title: "Knowledge Graphs for Retrieval, Knowledge Editing, and Adaptive Reasoning",
        chairs: "TBD",
        slot: 18,
        papers: [
          { id: 27, title: "Retrieval-Augmented Generation of Ontologies from Relational Databases", authors: "Nadeen Fathallah, Mojtaba Nayyeri, Yogi Athish Aalla, Ratan Bahadur Thapa, Hans-Michael Tautenhahn, Anton Schnurpel and Steffen Staab", track: "Research" },
          { id: 149, title: "Graph-Based Reranking for Cross-Domain Biomedical Ontology Alignment", authors: "Giuseppe Futia", track: "Research" },
          { id: 261, title: "CLARK: Closed-loop Learning for Adaptive Reasoning over Knowledge Graphs", authors: "Yousef Khan, Luca Gherardini, Marco Maratea, Joel Arrais and Jose Sousa", track: "Research" },
          { id: 370, title: "Eventour: A GeoSPARQL Knowledge Graph for Cultural and Service-Aware Urban Exploration", authors: "Blerina Spahiu, Marco Cremaschi and Giuseppe Vizzari", track: "Resource" },
        ],
      },

        {
        start: "10:30", end: "12:00", room: "Sezione 2", kind: "parallel",
        title: "Ontology and Shape Learning",
        chairs: "TBD",
        slot: 16,
        papers: [
          { id: 164, title: "LYRA: Belief-Driven Scalable Class Expression Learning in Description Logics", authors: "Amgad Abdulmaqsod, Yasir Mahmood, Axel-Cyrille Ngonga Ngomo and Mohamed Sherif", track: "Research" },
          { id: 159, title: "Shapes from Examples: Foundations of Shape Learning in Recursive SHACL", authors: "Bente Gortworst, Cem Okulmus, Magdalena Ortiz and Anni-Yasmin Turhan", track: "Research" },
         // { id: 240, title: "Evaluating Competency Questions: Measuring Perspectivisation from Requirement Sources", authors: "Anna Sofia Lippolis, Andrea Giovanni Nuzzolese, Valentina Presutti and Minh Davide Ragagni", track: "Research" },
          { id: 93, title: "Words Matter: Robust Entity Alignment for Knowledge Graphs via Multi-View Textualization", authors: "Hanane Kteich, Gianluca Quercini, Joe Raad and Fatiha Sais", track: "Research" },
         { id: 390, title: "The Prebiotic Origins of Life Ontology", authors: "Shweta U Narkar, Vincent S Riggi, Karyn L Rogers and James A Hendler", track: "Resource" },
        ],
      },
 
      {
        start: "10:30", end: "12:00", room: "Sezione 3&4", kind: "parallel",
        title: "FAIR, Decentralized, and Trustworthy Knowledge Infrastructures",
        chairs: "TBD",
        slot: 23,
        papers: [
          { id: 427, title: "RangeFC: Interval-Aware Temporal Fact Checking for Knowledge Graph", authors: "Abdullah Qamar, Umair Qudus, Michael Röder and Axel-Cyrille Ngonga Ngomo", track: "Research" },
          { id: 428, title: "Autonomous FAIR Digital Objects: From Passive Assertions to Active Knowledge", authors: "Zeyd Boukhers, Oya Beyan, Cong Yang and Christoph Lange", track: "Research" },
          { id: 272, title: "BLOD: A Domain-Specific Subcloud for Discoverable and FAIR Biomedical Knowledge Graphs", authors: "Sana Latif and Maria Angela Pellegrino", track: "Resource" },
          { id: 75, title: "A Robust Decentralized Infrastructure for Trust-Aware Open Knowledge Sharing", authors: "Tobias Kuhn, Virginia Balseiro, Ashley Caselli, Ziroli Plutschow, Piotr Sowiński and Anastasiya Danilenka", track: "Research" },
        ],
      },
  

      { start: "10:30", end: "12:00", room: "Sezione 5", title: "Visionary Papers", kind: "parallel", chairs: "TBD" },

      { start: "12:00", end: "13:30", room: LUNCH, title: "Lunch", kind: "break" },

      {
        start: "13:30", end: "14:40", room: "Sezione 1", kind: "parallel",
        title: "Knowledge Graphs, Retrieval-Augmented Question Answering, and Ontologies for Domain Applications",
        chairs: "TBD",
        slot: 19,
        papers: [
          { id: 432, title: "KARMA: When Knowledge Graphs Still Matter for Retrieval-Augmented Question Answering", authors: "Thi Hoang Thi Pham, Pascal Molli and Hala Skaf-Molli", track: "Research" },
          { id: 132, title: "CEON: Circular Economy Ontology Network", authors: "Huanyu Li, Els de Vleeschauwer, Robin Keskisärkkä, Mikael Lindecrantz, Mina Abd Nikooie Pour, Ying Li, Ben De Meester, Patrick Lambrix and Eva Blomqvist", track: "Resource" },
          { id: 305, title: "From Records to Signs: A Layered Knowledge Graph for Conceptual Dynamics in Charles S. Peirce's Manuscripts", authors: "Carlo Teo Pedretti, Dario Baldini, Lorenzo Zangari, Alessandro Adamou and Davide Picca", track: "Resource" },    
        ],
      },
      {
        start: "13:30", end: "14:40", room: "Sezione 2", kind: "parallel",
        title: "Human-Centered Ontology Engineering and Domain Knowledge Graphs",
        chairs: "TBD",
        slot: 24,
        papers: [
          { id: 345, title: "A Collaborative Human-AI Workflow for Ontology Requirement Engineering in Use", authors: "Reham Alharbi, George Hannah, Elliott Watkiss-Leek, Wilf Morlidge, Jacopo de Berardinis and Terry R. Payne", track: "In-Use" },
          { id: 117, title: "SVEN: A Framework to Semanticize Virtual Environments", authors: "Nicolas Saint-Léger, Joe Raad, Nicolas Férey and Patrick Bourdot", track: "Resource" },
          { id: 333, title: "RTSKG: Building a Rail Transit Station Knowledge Graph Dataset", authors: "Shutong Zhu, Tianxing Wu, Runfeng Liu, Yuang Gu, Xuan He and Yuan Zhu", track: "Resource" },
        ],
      },
      { start: "13:30", end: "14:40", room: "Sezione 5", title: "Round table about the vision of the 25 years of Semantic Web", kind: "parallel", chairs: "TBD" },

      { start: "14:40", end: "15:10", room: COFFEE, title: "Coffee Break", kind: "break" },
      { start: "15:10", end: "16:10", rooms: PLENARY, title: "Town Hall", kind: "poster", chairs: "TBD" },
      { start: "16:10", end: "16:55", rooms: PLENARY, title: "Workshop Summary & Closing Ceremony", kind: "ceremony", chairs: "TBD" },
    ],
  },
];

export default schedule;