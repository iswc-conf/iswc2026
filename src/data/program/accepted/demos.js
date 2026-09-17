const demos = [
  {
    title: ".rete: Browser-Native SPARQL over Static, Range-Addressable RDF Files",
    authors: "Carlos Vivar Rios",
  },
  {
    title: "AIDA Dashboard 4.0: Multi-Dimensional Analytics and Recommendations over Scholarly Knowledge Graphs",
    authors: "Antonello Meloni, Enrico Motta, Francesco Osborne, Diego Reforgiato Recupero and Angelo Salatino",
  },
  {
    title: "Ask Wol: A Practical Review Assistant for OWL Ontologies",
    authors: "Kathrin Füllenbach and Dani Metilli",
  },
  {
    title: "ASTER: Agentic Text-to-SPARQL with Task Skills, Autonomous Exploration, and Refinement",
    authors: "Nandana Mihindukulasooriya, Niharika Dsouza, Satyananda Kashyap, Oshani Seneviratne and Horst Samulowitz",
  },
  {
    title: "AutoVKG: LLM-Driven Virtual Knowledge Graphs for Unified Access to Heterogeneous Data Sources",
    authors: "Xander Poortvliet and Mel Chekol",
  },
  {
    title: "bioKG-RAG: Integrating Biomedical Ontologies for Knowledge-Grounded Retrieval-Augmented Generation",
    authors: "Sergio Consoli, Lorenzo Bertolini, Roberta Angioni, Silvia M. Massa, Daniele Riboni and Diego Reforgiato Recupero",
  },
  {
    title: "BootSPARQL: A Workbench for Growing Question–SPARQL Datasets from Live SPARQL Endpoints",
    authors: "Ruijie Wang, Panayiotis Smeros, Vincent Emonet, Tarcisio Mendes de Farias and Ana Claudia Sima",
  },
  {
    title: "capPG: Constraint-Aware Partitioning for Property Graphs",
    authors: "Elisjana Ymeralli, Stefania Dumbrava, Dimitris Plexousakis and Haridimos Kondylakis",
  },
  {
    title: "Change Propagation in Application Profile Hierarchies using Dataspecer",
    authors: "Jakub Klímek, Štěpán Stenchlák and Petr Škoda",
  },
  {
    title: "COCI: Conference Organisers and Content Identifier",
    authors: "Angelo Salatino, Francesco Osborne, Alexis Vizcaino, Aliaksandr Birukou and Enrico Motta",
  },
  {
    title: "Demonstrating ProbSPARQL: Querying Knowledge Graphs with Multi-dimensional, Uncertain Numeric Data",
    authors: "Jingcheng Wu, Ratan Bahadur Thapa, Daniel Hernández, Hongkuan Zhou and Steffen Staab",
  },
  {
    title: "Demonstrating the MLIPs Ontology: Querying Machine-Learning Interatomic Potential Metadata in SPARQL, Natural Language, and via MCP",
    authors: "Daniel Hernández, Jong Hyun Jung, Yuji Ikeda, Yongliang Ou, Pranav Kumar, Tom Schächtel, Wenchuan Liu, Xin Li, Xi Zhang, Xiang Xu, Lifang Zhu, Fritz Körmann, Steffen Staab and Blazej Grabowski",
  },
  {
    title: "Designing and Evaluating Knowledge Graph Pipelines with KGpipe Explorer",
    authors: "Marvin Hofer, Oliver Welz and Erhard Rahm",
  },
  {
    title: "FedTREK-LM: Inspectable Movie Recommendations from Federated Personal Knowledge Graphs",
    authors: "Fernando Spadea and Oshani Seneviratne",
  },
  {
    title: "From Boxes to Knowledge: Tool4Boxology for Semantic Modeling and Analysis of Neuro-Symbolic AI Systems",
    authors: "Yashrajsinh Chudasama, Disha Purohit, Mahsa Forghani, Enrique Iglesias and Maria-Esther Vidal",
  },
  {
    title: "Integrating Scattered Prosopographical Data into a Common Knowledge Graph: The Prosopographical Research Platform Austria (PFP)",
    authors: "Max Beck, Lukas Plank and Matthias Schlögl",
  },
  {
    title: "Is It a Plant, Activity, or Medicine? Constructing Thick Knowledge Graphs",
    authors: "Marieke van Erp and Paul Groth",
  },
  {
    title: "OntoInk: Interactive Ontology Visualization, Validation, and Reasoning",
    authors: "Ebrahim Norouzi, Jörg Waitelonis and Harald Sack",
  },
  {
    title: "OOPS!+: Improving Ontology Pitfall Detection with Large Language Models",
    authors: "Carlos Gaspar-Santiago, María Poveda-Villalón and Daniel Garijo",
  },
  {
    title: "ParliamentRAG: An Authority-Aware Multi-View RAG System for Italian Parliamentary Proceedings",
    authors: "Mirko Tritella, Riccardo Pozzi and Matteo Palmonari",
  },
  {
    title: "PathExtractor: Extracting Path Information in Graph Databases (Demo Paper)",
    authors: "Christian Birzer, Wim Martens, Matthias Niewerth, Stijn Vansummeren and Domagoj Vrgoc",
  },
  {
    title: "rdflib-endpoint: Exposing Idiomatic Python Functions as Federated SPARQL Services",
    authors: "Vincent Emonet, Marco Pagni, Ana Claudia Sima and Tarcisio Mendes de Farias",
  },
  {
    title: "REFV-KG Explorer: Causal and Stakeholder-Oriented Exploration of Renewable Energy Policy Discussions",
    authors: "Kouji Kozaki and Mizuki Hayashi",
  },
  {
    title: "RepuLink: A Linked Data Platform for Accountable Trust",
    authors: "Wenbo Wu and George Konstantinidis",
  },
  {
    title: "RIGOR App: A Demo System for Retrieval-Augmented Generation of Ontologies from Relational Databases",
    authors: "Nadeen Fathallah, Mojtaba Nayyeri and Steffen Staab",
  },
  {
    title: "SciKGDash: The Human-in-the-Loop Curation Dashboard for the Open Research Knowledge Graph",
    authors: "Lena John, Sören Auer and Oliver Karras",
  },
  {
    title: "SHACL-Wizard: Guided Creation of SHACL Shapes",
    authors: "Jin Ke, Beyrem Hadj Fredj, Ahmed Karakaya, Johannes Mäkelburg, Zenon Zacouris and Maribel Acosta",
  },
  {
    title: "SHACLear: A SHACL to Natural Language Translator",
    authors: "Yuchen Zhou, Simon Jost, Romit Kheni and Maribel Acosta",
  },
  {
    title: "Similarity-based OSF Logic for Flexible SPARQL Query Answering",
    authors: "Gian Carlo Milanese and Gabriella Pasi",
  },
  {
    title: "The OVAL Policy Evaluator Engine for ODRL",
    authors: "Paolo Pareti, Jaime Osvaldo Salas Trejo, Christopher Maidens and George Konstantinidis",
  },
  {
    title: "Towards an Accessible Reference ODRL Policy Editor",
    authors: "Christopher Maidens, Paolo Pareti and George Konstantinidis",
  },
  {
    title: "WoTBot - A Semantic Web of Things Agent for Natural-Language Service Discovery and Control",
    authors: "Sebastian Alberternst and Sebastian Hocke",
  },
  {
    title: "X-DigCheck: Co-Evolving Application Profiles and Knowledge Graphs, Demonstrated on the RTI Documentation of Rupe Magna",
    authors: "Célian Ringwald, Valentina Presutti, Huseyin Erdoğan and Cristiano Putzolu",
  },
  {
    title: "YAGO: A Logically Consistent Subset of Wikidata",
    authors: "Fabian M. Suchanek, Thomas Bonald, Nikola Dobricic, Marc Jeanmougin and Margherita Necchi",
  },
];

export { demos };
