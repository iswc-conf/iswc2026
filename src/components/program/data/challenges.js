 const challenges = [
        {
            title: "LM-KBC: Knowledge Base Conssdffdsftruction from Pretrained Language Models (4th Edition)",
            organizers: "Jan-Christoph Kalo, Tuan-Phong Nguyen, Simon Razniewski and Bohui Zhang",
            description: "Large language models (LLMs) have advanced a range of semantic tasks and have also shown promise for knowledge extraction from the models itself. Although several works have explored this ability in a setting called probing or prompting, the viability of knowledge base construction from LMs remains underexplored. In the 4th edition of the LM-KBC challenge, we ask participants to build actual disambiguated knowledge bases from LMs, for given subjects and relations. In crucial difference to existing probing benchmarks like LAMA (Petroni et al., 2019), we make no simplifying assumptions on relation cardinalities, i.e., a subject-entity can stand in relation with zero, one, or many object-entities. Furthermore, submissions need to go beyond just ranking predicted surface strings and materialize disambiguated entities in the output, which will be evaluated using established KB metrics of precision and recall.\nnThis year's edition contains two breaking changes: (i) Disallowing fine-tuning, and (ii) disallowing external corpora, thus making this a true exploration of knowledge within a given LLM.",
            website: "https://lm-kbc.github.io/challenge2025/",
            social_media: "@lm_kbc (X)",
            social_media_url: "https://x.com/lm_kbc"
        },
        {
            title: "SemTab 2025: Semantic Web Challenge on Tabular Data to Knowledge Graph Matching",
            organizers: "Marco Cremaschi, Fabio D'Adda, Fidel Azanzi Jiomekong, Ernesto Jimenez-Ruiz and Oktie Hassanzadeh",
            description: "SemTab 2025 is the seventh edition of the Semantic Web Challenge on Tabular Data to Knowledge Graph Matching, continuing its tradition at ISWC since 2019. This year's challenge focuses on the role of Large Language Models (LLMs) in the semantic annotation of tabular data, evaluating their effectiveness in mapping table elements to concepts in a Knowledge Graph (KG). Participants will tackle key tasks such as cell-to-entity matching, column-to-class matching, and column-pair-to-property matching using updated datasets, including MammoTab and Secutable (Cybersecurity domain). The competition encourages both open-source solutions and the use of smaller LLMs, offering a dedicated ranking and prizes for these categories. Join us to advance the field of Semantic Table Interpretation (STI) and explore innovative approaches to data integration, cleaning, and knowledge discovery!",
            website: "https://sem-tab-challenge.github.io/2025/"
        },
        // {
        //     title: "Controlling LLM Grounding: Between Weights and Context.",
        //     organizers: "Sebastien Dery",
        //     description: "This challenge focuses on developing AI systems that can flexibly and accurately select between using internal model knowledge and externally provided documents based on explicit instructions. Given that large language models may contain outdated or domain-inappropriate information, this approach is crucial for applications like educational assessments, retrieval-augmented generation, and regulated fields such as law, medicine, and compliance. The objective is to ensure that responses are grounded solely in the designated sources, advancing controllable knowledge access—a goal that aligns closely with the Semantic Web’s mission to represent and query diverse knowledge sources transparently.",
        //     website: "https://lm-grounding.github.io/lmg-github.io/"
        // },
        // {
        //     title: "TRIPLET Challenge 2025: TRIPLET Extraction from Triplet Text, Table, Knowledge Graph",
        //     organizers: "Raphaël Troncy, Yoan Chabot, Veronique Moriceau and Nandana Mihindukulasooriya",
        //     description: "In recent years, the research community has shown increasing interest in the joint understanding of text and tabular data, often, for performing tasks such as question answering or fact checking where evidences can be found in texts and tables. Hence, various benchmarks have been developed for jointly querying tabular data and textual documents in domains such as finance, scientific publications, and open domain. While benchmarks for triple extraction from text for Knowledge Graph construction and semantic annotation of tabular data exist in the community, there remains a gap in benchmarks and tasks that specifically address the joint extraction of triples from text and tables by leveraging complementary clues across these different modalities.\nIn this context, the TRIPLET 2025 challenge aims at proposing three sub-tasks and a common benchmark for understanding the complementarity between tables, texts, and knowledge graphs, and in particular to propose a joint knowledge extraction and reconciliation process.",
        //     website: "https://ecladatta.github.io/triplet/"
        // },
        {
            title: "LLMs4OL 2025: The 2nd Large Language Models for Ontology Learning Challenge at ISWC 2025",
            organizers: "Hamed Babaei Giglou, Jennifer D'Souza, Nandana Mihindukulasooriya, Andrei Aioanei and Sören Auer",
            description: "The LLMs4OL Challenge explores the potential of Large Language Models (LLMs) in Ontology Learning (OL)—a crucial process for structuring web knowledge and improving Semantic Web interoperability. Traditional ontology learning methods often struggle with scalability and adaptability, while LLMs offer new opportunities for automating knowledge extraction, taxonomy discovery, and ontology construction. This challenge focuses on enhancing ontology-based knowledge reuse rather than isolated knowledge generation. \nThis challenge expanded into four tasks of ontology learning: Terminology Extraction, Term Typing, Taxonomy Discovery, and Non-Taxonomic Relation Extraction. While fine-tuned LLMs have shown strong performance, their effectiveness across multi-domain scenarios remains an open challenge.  The second LLMs4OL Challenge introduces benchmarking datasets containing approximately 50 or more curated ontologies to support the development of LLM-based solutions. These datasets and approaches from participants from previous years will be made available as a Python library to provide a solid foundation for participants. ",
            website: "https://sites.google.com/view/llms4ol2025"
        },
        {
            title: "Agentic Pipeline Optimization for the Semantic Web",
            organizers: "Kaushik Roy",
            description: "TBD"
        },
        // {
        //     title: "The 2nd Challenge on Characterizing User Behavior in Social Networks: Propagation, Prediction, and Sensemaking",
        //     organizers: "Qingyun Sun, Xingcheng Fu, Minglai Shao, Haoyi Zhou and Jianxin Li",
        //     description: "As Large Language Models (LLMs) continue to evolve, the Semantic Web community is increasingly integrating LLMs and agentic frameworks with knowledge graphs and ontologies. However, the development of multi-agent LLM pipelines presents several challenges. Static pipelines struggle to adapt to new or complex tasks, while traditional tensor-based training methods are inadequate for dynamically updating or orchestrating multiple agents that communicate via natural language. The original vision of the Semantic Web envisioned autonomous agents capable of reasoning and collaborating at scale, yet current solutions remain constrained by ad-hoc prompt tuning and brittle orchestrations. This challenge seeks to address these limitations by focusing on optimizing agentic pipelines—building and evaluating agent-based frameworks that use language, rather than purely numeric embeddings, for communication, coordination, and iterative improvement.",
        //     website: "https://sites.google.com/view/enterprise-ai-challenge/home"
        // }
    ];

export {challenges};