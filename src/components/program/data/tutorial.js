    const tutorials = [
        {
            "title": "Shaping Knowledge and Interoperable Graphs",
            "organizers": "Jose Emilio Labra Gayo",
            "description": "Since Google introduced the use of Knowledge Graphs to enhance search functionality and organize information internally, their adoption and application have grown significantly. Various technologies have been developed to implement Knowledge Graphs, with RDF-based triplestores being a cornerstone of the Semantic Web, while Property Graphs are also widely used in the context of graph databases. Wikidata, a well-known Knowledge Graph, provides RDF data through its SPARQL query service, but its data model closely resembles Property Graphs, incorporating features like qualifiers and references. The recent introduction of RDF 1.2 (formerly known as RDF-Star) aims to bridge the gap between RDF and Property Graphs by enabling statements about statements, offering greater flexibility. Data quality is a critical aspect of Knowledge Graphs, often ensured through validation against predefined data models or shapes. This tutorial will explore several approaches developed for describing and validating RDF, such as Shape Expressions (ShEx) and Shapes Constraint Language (SHACL). Notably, the Data Shapes Working Group has been tasked this year with developing SHACL 1.2, aligning it with RDF 1.2. We will briefly outline these approaches, highlighting their similarities, differences, and recent advancements. For Property Graphs, proposals like PGSchema, PShEx, and ProGS have emerged, with GQL recently offering a way to define typed graphs. Wikidata has adopted Entity Schemas, which are based on ShEx, alongside its own property constraint system, and a proposal called WShEx is also under consideration. This tutorial will delve into the various types of Knowledge Graphs and the methods used for their validation. Additionally, we will examine practical applications of these technologies, such as inferring shapes from existing data and generating compliant subsets of Knowledge Graphs.",
            "website": "https://www.validatingrdf.com/tutorial/iswc2025/",
            "social_medias": []
        },
        {
            "title": "Testing Knowledge Graph Applications (TestKG)",
            "organizers": "Eduard Kamburjan, Tobias John, Einar Broch Johnsen and Dominic Steinhöfel",
            "description": "Knowledge graphs (KGs) are supported by a rich and ever-growing ecosystem of standards, technologies and software tools. For the quality of the KGs application, software reliability in this ecosystem is as important as the quality and reliability of the data, in particular if KGs are used to improve confidence in an overall application, e.g., to counteract gaps. But while the quality of the underlying software tools is critical, developers of new applications operating on KGs, as well as maintainers of legacy software have little tool and methodological support. This tutorial aims to provide information about automated testing for programs that operate on RDF and OWL inputs. It will introduce basic testing theory that describes different options to setup testing oracles and input generators, as well as describe the concrete challenges and possible solutions for KGs. The hands-on part will introduce two concrete approaches, namely mutation-based and language-based input fuzzing, to generate RDF or OWL targeting a specific application. The participants will develop two automated testing suites for a knowledge graph construction tool, and use state-of-the-art input fuzzers.",
            "website": "https://edkamb.github.io/TestKG/",
            "social_medias": []
        },
        {
            "title": "Referring Expressions in Artificial Intelligence and Knowledge Representation Systems",
            "organizers": "David Toman",
            "description": "The tutorial introduces the audience to the concept of referring expressions, formulae that can be used to communicate identities of otherwise abstract objects. The formalism provides foundations for a successful and unambiguous exchange of information about individuals between agents sharing common knowledge about such individuals, a task that is indispensable in most modern applications of knowledge representation and semantic technologies.",
            "website": "https://cs.uwaterloo.ca/~david/iswc25/",
            "social_medias": []
        },
        {
            "title": "An Introduction to RDF and SPARQL 1.2 (RDF/SPARQL 1.2)",
            "organizers": "Ruben Taelman, Enrico Franconi, Pierre-Antoine Champin and Ora Lassila",
            "description": "The RDF 1.1 and SPARQL 1.1 specifications are foundational to Knowledge Graphs and Semantic Web research. More than a decade after their last versions were released as W3C recommendations, they are scheduled to receive an update to version 1.2. For the last 3 years, the RDF-star Working Group has been working on these updates, with as primary focus the ability to make statements about other statements. The goal of this tutorial is to provide a crash course into RDF 1.2 and SPARQL 1.2, for people that already know RDF 1.1 and SPARQL 1.1. We will discuss the history and motivations for this update, explain the new triple terms and reification concepts, and give an overview of the other changes that were included in the relevant specifications. As outcomes, participants will understand the motivations for these changes, and they will be able to make use of it in their future work.",
            "website": "https://www.w3.org/Talks/2025/iswc-tutorial-rdfsparql-12/",
            "social_medias": []
        },
        {
            "title": "OWL or SHACL: A Beginner’s Guide to Making the Right Choice",
            "organizers": "Davide D'Amico and Tara Raafat",
            "description": "As knowledge graphs become increasingly integral to enterprise data strategies, the adoption of semantic technologies continues to grow. However, one question arises repeatedly: Should I use Web Ontology Language (OWL), SHApes Constraint Language (SHACL), or a combination of both? This tutorial addresses that question by introducing the core concepts, their practical purposes, and real-world applications of OWL and SHACL, with a focus on understanding when each technology is most appropriate to use. Using a dataset from the museum domain, the session will guide participants through key use cases that demonstrate the distinct strengths and weaknesses of these technologies, as well as where they overlap. Through an example-driven, hands-on approach, attendees will explore how modeling, inference, and data validation are influenced by the use of OWL and SHACL. Participants will collaboratively analyze various problem scenarios to determine the most suitable language(s) for addressing each challenge. The tutorial will involve building ontologies, defining SHACL shapes, and validating data using open source tools. By the end of the session, attendees will have gained practical experience and a clear understanding of how to apply OWL and SHACL effectively in diverse knowledge graph development contexts.",
            "website": "https://semanticmasterclass.github.io/iswc2025/",
            "social_medias": [
                {
                    "social_media": "Tara Raafat LinkedIn",
                    "social_media_url": "https://www.linkedin.com/in/tara-raafat-phd-1038315"
                },
                {
                    "social_media": "Davide D'Amico LinkedIn",
                    "social_media_url": "https://www.linkedin.com/in/davide~damico"
                }
            ]
        },
        {
            "title": "Building Streaming and Cross-Environment Data Processing Pipelines with RDF-Connect",
            "organizers": "Ieben Smessaert, Arthur Vercruysse, Julián Rojas and Pieter Colpaert",
            "description": "RDF-Connect is a novel, language-agnostic framework for building provenance-aware, streaming data pipelines that integrate heterogeneous processors across languages. It aims to facilitate the construction, maintenance, and reusability of modular, interoperable pipelines for complex, semantically rich data workflows. Data processing pipelines are essential for modern data-centric systems, such as knowledge graphs, LLMs, and machine learning systems. Developers and researchers need flexible, interoperable tools for creating multilingual data processing pipelines. To meet this need, we present a comprehensive tutorial that blends conceptual foundations with hands-on experience. Participants will learn how to use RDF-Connect to design and execute reusable, extensible, and transparent streaming pipelines. Participants will construct a streaming data processing pipeline from real-world data: generating a weather forecast knowledge graph for Nara, Japan from the Japan Meteorological Agency. They will: (i) Construct a machine learning pipeline using processors in multiple programming languages, (ii) Create custom data processors for diverse endpoints, (iii) Explore provenance tracking using RDF and PROV-O ontology. By the end of the tutorial, participants from varied backgrounds, including Python, JavaScript, and Java developers, will gain practical experience in building language-agnostic, semantically rich data processing pipelines. This tutorial not only introduces RDF-Connect but also opens new avenues for interdisciplinary data transformation strategies in Semantic Web research and development.",
            "website": "https://rdf-connect.github.io/Tutorial-ISWC2025/",
            "social_medias": [
                {
                    "social_media": "GitHub",
                    "social_media_url": "https://github.com/rdf-connect"
                }
            ]
        },
        {
            "title": "SODa WissKI Bits Tutorial: Ontology-Driven Semantic Modeling and FAIR Publishing with WissKI",
            "organizers": "Canan Hastik, Gudrun Schwenk and Mark Fichtner",
            "description": "This tutorial introduces participants to ontology-driven semantic modeling and FAIR data publishing through the open-source research environment WissKI. Participants will follow a structured, activity-based learning path based on the TaDiRAH taxonomy, focusing on real-world collection building and Linked Data integration. Using established Semantic Web technologies such as RDF, OWL, SPARQL, and the CIDOC Conceptual Reference Model (CRM), the session offers hands-on experience in modeling cultural heritage entities, creating collection scenarios, and exporting interoperable data. The tutorial is particularly relevant for researchers, data stewards, and ontology engineers working on domain-specific knowledge graphs and LOD infrastructures.",
            "website": "https://liascript.github.io/course/?https://raw.githubusercontent.com/soda-collections-objects-data-literacy/SODa_WissKI-ISWC25Bits/refs/heads/main/didacticConcept/SODa_WissKI-ISWC25Bits_didacticConcept.md#1",
            "social_medias": [
                {
                    "social_media": "SODa LinkedIn",
                    "social_media_url": "https://www.linkedin.com/company/soda-zentrum"
                },
                {
                    "social_media": "Fedihum Mastodon",
                    "social_media_url": "https://fedihum.org/@SODa"
                }
            ]
        },
        {
            "title": "GeoKG 2025 Introduction to geospatial knowledge graphs",
            "organizers": "Sergios Anestis Kefalidis, Manolis Koubarakis, Konstantinos Plas and Cogan Shimizu",
            "description": "In the last two decades, knowledge graphs (KGs) have seen increased interest thanks to their suitability for representing relations (edges) between entities (nodes), and their semi-structured nature, which eases the integration of diverse, heterogeneous data sources. This tutorial will introduce its audience to geospatial knowledge graphs (GeoKGs) i.e., knowledge graphs that combine thematic (e.g., “Nara is the capital city of the Nara prefecture and has an estimated population of 367,353 according to World Population Review”) and geospatial knowledge (e.g., “the coordinates of Nara are 34°41′ 04′′N and 135°48′18′′E” or “Nara is within the region Kansai”)",
            "website": "https://ai-team-uoa.github.io/GeoKG-2025-ISWC/",
            "social_medias": []
        },
        {
            "title": "QUALIDATA - Linked Data Quality in Practice",
            "organizers": "Gianluca Demartini, Maria Angela Pellegrino, Anisa Rula and Gabriele Tuozzo",
            "description": "This tutorial offers a comprehensive introduction to data quality in the Semantic Web, combining theory and hands-on practice. It covers quality dimensions, FAIR principles, and their application to Linked Data. Participants engage in interactive activities, explore the KGHeartBeat tool through practical tasks, and reflect on broader quality issues such as bias and its practical implications. It targets researchers, practitioners, and developers seeking both foundational understanding and applied skills in quality-aware Linked Data practices.",
            "website": "https://gabrielet0.github.io/QUALIDATA/",
            "social_medias": []
        },
        {
            "title": "Key Facets in Modern Knowledge Graph Representation Learning (KeyKGRL)",
            "organizers": "Joyce Whang",
            "description": "Knowledge graph representation learning (KGRL) aims to convert entities and relations into feature vectors, thereby facilitating their effective integration into contemporary AI models. This half-day tutorial explores the ongoing research avenues and key aspects being investigated in the latest KGRL research. In particular, this tutorial provides a review of seminal works in KGRL from four different perspectives: (1) KGRL methods incorporating multimodal data in generating knowledge representations, (2) inductive KGRL methods that allow inference on new KGs without retraining KGRL models, (3) KG foundation models that pretrain a KGRL model using various KGs and apply it to different KGs, and (4) representation learning methods on hyper-relational KGs that extend the vanilla KGs to represent enriched information. Along with four lecturing sessions, two hands-on exercise sessions will also be provided, where audiences can run the KGRL methods and analyze the results. As long as they have a basic background in machine learning and non-trivial programming skills, all the materials will be easy to follow.",
            "website": "https://bdi-lab.github.io/keykgrl_iswc2025/",
            "social_medias": []
        }
    ]

    export {tutorials};
