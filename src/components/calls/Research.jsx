import React, { useRef } from "react";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import TextBlock from "../general/TextBlock";
import SubHeader from "../general/SubHeader";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import BaseContainer from "../general/BaseContainer";
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";

export const Research = () => {

    const diff_track = useRef(null);
    const suppl_material = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <BaseContainer>

            <Header>Call for Research Track Papers</Header>
            <p>The International Semantic Web Conference is the premier venue for presenting fundamental research, innovative technologies, and applications related to semantics, data, and the Web.</p>

            <p>The research track of ISWC 2026 solicits novel and significant research contributions addressing theoretical, analytical, and empirical aspects of the Semantic Web. We welcome work describing original and replicable research showing evidence of a substantial contribution to the Semantic Web.</p>

            <p>The track’s program committee will assess all papers. Each paper will be reviewed by at least three committee members, with a meta-review provided by a senior member. The review criteria used are outlined below.</p>

            <p>As ISWC 2026 features multiple tracks, authors are asked to consult the calls of the other tracks to choose the track that best fits their contribution (see <ScrollLink targetRef={diff_track}>Differentiation from Other Tracks</ScrollLink>). The submission of the same work to multiple tracks (as well as to other conferences) is not allowed and results in rejection without review.</p>


            <SubHeader>Important information for authors:</SubHeader>

            <p>
                <ul className="list-disc list-inside">

                    <li>Submissions are dual anonymous.</li>
                    <li>Papers are limited to 15 pages excluding references and the "Declaration of use of Generative AI” section. Supplemental materials and annexes count toward the established page limit.</li>
                    <li>All submissions are expected to include a mandatory <ScrollLink targetRef={suppl_material}>Supplemental Material Statement</ScrollLink> that may contain links to code and data repositories. In case this is not possible, the statement must be justified. </li>
                    <li>Unless otherwise justified in the <ScrollLink targetRef={suppl_material}>Supplemental Material Statement</ScrollLink>, we expect supplemental material to be provided anonymously with the submitted paper.</li>
                    <li>Pre-submission of abstracts is a strict requirement.</li>

                </ul>
            </p>

            <SubHeader>Important Dates</SubHeader>


            <p>
                <ul className="list-disc list-inside">

                    <li>Abstract submission due<b>	2 May 2026</b></li>
                    <li>Full paper submission due <b>7 May 2026</b></li>
                    <li>Rebuttal<b> 28 May - 3 June 2026</b> </li>
                    <li>Notifications<b> 24 June 2026</b> </li>
                    <li>Camera-ready papers due<b>	8 July 2026</b></li>
                    <li>Conference:			<b>27 - 29 October 2026</b></li>

                </ul>
            </p>
            <p>
                All deadlines are<b> 23:59 AoE (anywhere on Earth)</b></p>


            <UnderlineHeader>Topics of Interest</UnderlineHeader>

            <p>We encourage papers that directly advance the Semantic Web. The relationship to the core area of the conference needs to be clearly described in the submitted work. Submissions beyond the scope will be desk-rejected. Topics in the Semantic Web area include, but are not limited to:</p>

            <SubHeader>Ontologies and capturing knowledge including:</SubHeader>
            <p>
                <ul className="list-disc list-inside">
                    <li>Ontology Engineering and ontology patterns</li>
                    <li>Ontology modularity, mapping, merging, and alignment</li>
                    <li>Information extraction, knowledge graph construction</li>

                </ul>
            </p>

            <SubHeader>Representation, management, and applications of Knowledge Graphs (including RDF and property graphs):</SubHeader>
            <p>
                <ul className="list-disc list-inside">
                    <li>Knowledge Representation and Reasoning</li>
                    <li>Search, query, integration, and analysis</li>
                    <li>Robust and scalable management</li>
                    <li>Information visualization and exploratory analysis </li>
                    <li>Databases and ontology-based data access, integration, and exchange on the Web</li>
                    <li>Knowledge graph-centered Natural Language Processing, information retrieval, semantic analysis, and Large Language Models  </li>

                </ul>
            </p>
            <SubHeader>Integration of the Semantic Web with:</SubHeader>
            <p>
                <ul className="list-disc list-inside">
                    <li>Machine learning, data mining, and neurosymbolic reasoning</li>
                    <li>Generative AI (including Large Language Models) and Agentic AI</li>
                    <li>User interfaces, usability, and accessibility</li>
                    <li>Data integration, quality assurance, and data provenance</li>
                    <li>Social issues, including trust, bias, fairness, privacy, security, and policy</li>
                    <li>Web services, process management, social Web, and Internet of Things</li>
                    <li>Dynamic and streaming data, including complex event processing and stream reasoning</li>
                    <li>Software engineering, algorithms, and decentralized architectures</li>
                    <li>Specialized domains (geographical, biomedical, e-Science, multimedia, performing arts, public administration, cultural heritage, law, etc.)</li>
                    <li>Artificial Intelligence and hybrid app</li>

                </ul>
            </p>
            <SubHeader>Semantic Web Agents including:</SubHeader>
            <p>
                <ul className="list-disc list-inside">
                    <li>Autonomous systems, including multi-agent systems and robotics</li>
                    <li>Architecture characteristics for autonomy exploiting KGs</li>
                    <li>Incomplete or conflicting knowledge, beliefs, and assumptions and KGs</li>
                    <li>Human-machine social interactions and KGs</li>
                    <li>Architecture characteristics for exploiting KGs autonomously</li>
                    <li>Development platforms and frameworks for exploiting KGs in an autonomous manner</li>
                    <li>Governance of autonomous agents on the Web</li>

                </ul>
            </p>

            <p>We welcome descriptions of contributions that leverage knowledge representation based on Semantic Web standards or other graph data models to improve the acquisition, processing, and sharing of data on the Web. We require authors to explicitly highlight how their work could be applied in a Semantic Web setting.</p>



            <UnderlineHeader>Review Criteria</UnderlineHeader>


            <p>Papers in this track will be reviewed according to the following criteria:</p>

            <p>
                <ul className="list-disc list-inside">
                    <li>Originality and novelty</li>
                    <li>Relevance of the topic to the conference</li>
                    <li>Impact of the research contributions</li>
                    <li>Technical soundness</li>
                    <li>Rigor and reproducibility of the work (including evaluation)</li>
                    <li>Clarity and quality of presentation</li>
                    <li>Grounding in the literature</li>


                </ul>
            </p>

            <p>Any submissions that are clearly out of scope, or have significant omissions with respect to these criteria, may be subject to desk rejection before a full review. Guidelines for reviewers are available <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/review">here</ExternalLink>.</p>





            <UnderlineHeader>Rebuttal</UnderlineHeader>
            <p>Authors will have the chance to provide a response to the reviews during a rebuttal period that precedes the reviewer discussion period. The SPCs and PC Chairs will consider the authors' responses to the points raised by the reviewers.</p>


            <UnderlineHeader>Policy on the use of Generative AI</UnderlineHeader>

            <p>All submissions must comply with the conference’s <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/generative-ai-policy">Generative AI policy</ExternalLink>. This includes use for writing or preparing the manuscript and for carrying out or reporting the research. Authors remain fully responsible for the work and must disclose any covered use as required; non-compliant submissions may be rejected or withdrawn.</p>

<p>In case of any questions regarding this policy, please contact the track chairs.</p>

<p>Each submission must include a section titled "Declaration of use of Generative AI” placed <b>immediately before the references</b>. Authors should briefly describe any Generative AI use and how they comply with the policy. This section <b>does not count toward the maximum paper length.</b></p>


            <div ref={suppl_material}><UnderlineHeader>Supplemental Material Statement and Reproducibility</UnderlineHeader></div>

            <p>

                Reproducibility is a key goal of scientific research. We require authors of all papers to include a statement at the end of their submission that facilitates the independent reproducibility or verification of the results presented (where relevant), pointing to where supplemental material can be found. These resources may include datasets, queries, code, proofs of results, configuration details, hyperparameters, etc., depending on the contributions of the paper. The statement should cover all of the resources necessary to reproduce or verify the results presented in the paper, indicating their persistent identifiers (e.g., DOI) when appropriate. In case certain resources cannot be made available (e.g., due to privacy, ethical, or financial concerns), the statement should include a justification of why this is the case. In case the paper is fully self-contained and does not have additional resources associated (e.g., a theoretical paper with full proofs contained in the body of the paper), a short statement can be provided arguing that the paper is self-contained. Please see the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/supplemental">Supplemental Material Statement Guidelines</ExternalLink> for more details.
            </p>

            <p>Reviewers will be asked to evaluate the statement. In particular, they will be asked to ensure that the statement convinces them that the results of the paper are reproducible, to ensure that the resources are indeed available and support reproducibility (both now and for the foreseeable future), and, in cases where resources are not provided, to verify that there is a reasonable justification. Unless otherwise justified, it is expected that access to resources is provided from the submitted paper since these resources may often play an important role in the review process. All resources must be provided anonymously; please see the “Supplemental Material” section for recommended options.</p>


            <UnderlineHeader>Submission Details</UnderlineHeader>

            <p>
                <ul className="list-disc list-inside">
                    <li>Pre-submission of abstracts is a strict requirement. </li>
                    <li>All papers and abstracts have to be submitted electronically via <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink>. </li>
                    <li>Submitted papers will be checked to ensure that they satisfy the submission criteria and are in scope with the aims of the conference, and if such violations are identified, then the submission may be subject to desk rejection without review.</li>
                    <li>Papers must provide a clear statement of their claims, argue how the results of the paper substantiate their claims, clarify any technical assumptions and/or known limitations, and provide a Supplemental Material Statement.</li>
                    <li>All research submissions must be in English, and no longer than 15 pages (excluding references and the "Declaration of use of Generative AI” section).</li>
                    <li>Submissions must be either in PDF or HTML, formatted in the style of the Springer Publications format for Lecture Notes in Computer Science (LNCS). For details on the LNCS style, see Springer’s Author Instructions. For HTML submission guidance, please see the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/html-submission">HTML submission guide</ExternalLink>.</li>
                    <li>Each submission must be original. Authors need to authorize the organizer to perform a plagiarism check of the paper.</li>
                    <li>Papers that exceed the page limit, violate the style or show any kind of plagiarism will be rejected without review.</li>
                    <li>Papers submitted to the research track will be subject to dual anonymous peer review and must conform to the instructions (detailed below) for dual anonymous review.</li>
                    <li>We encourage embedding metadata in the PDF/HTML to provide machine-readable links from the paper to resources.</li>
                    <li>Authors of accepted papers will be required to provide semantic annotations for the submission, which will be made available online. Details will be provided at the time of acceptance.</li>
                    <li>Accepted papers will be distributed to conference attendees and also published in the conference proceedings. </li>
                    <li>At least one author of each accepted paper must register for the conference and present the paper. </li>
                    <li>As in previous years, students will be able to apply for funding to support their travel to attend/register for the conference. </li>




                </ul>
            </p>








            <div ref={diff_track}><UnderlineHeader>Differentiation From Other Tracks</UnderlineHeader></div>

            <p>We strongly recommend that prospective authors carefully check the calls of the other tracks of the conference in order to identify the optimal track for their submission (submission of the same work to multiple tracks is prohibited). Papers that propose new algorithms and architectures should be submitted to the Research track as usual. Papers focusing on new reusable resources themselves, such as datasets, ontologies, workflows, etc., should be submitted to the Resources Track. Papers that describe and/or assess the use or application of Semantic Web and Knowledge Graph technologies in practical settings should be submitted to the In-Use track. See “Exemplary In-Use Papers From Previous Editions of ISWC” (below) for additional details.</p>

            <p> We strongly recommend that prospective authors carefully check the calls of the other main tracks of the conference in order to identify the optimal track for their submission (submission of the same work to multiple tracks is prohibited). </p>

            <p>
                <ul className="list-disc list-inside">

                    <li>Papers that propose new algorithms and architectures should be submitted to the regular research track;</li>
                    <li>Papers that reuse and apply state-of-the-art semantic technology or resources in practical settings should be submitted to the in-use track (i.e., the novelty falls into the in-use application of the semantic technology or resource);</li>
                    <li>Authors who want to present an interesting industry application but who do not want to submit a full paper should submit to the industry track;</li>
                    <li>Papers describing concrete resources (datasets, ontologies, vocabularies, annotated corpora, workflows, knowledge graphs, evaluation benchmarks, etc.) should be submitted to the resources track.</li>


                </ul>
            </p>


            <p>Note that research, in-use and resource papers are published within the same proceedings by Springer’s Lecture Notes in Computer Science series.</p>


            <UnderlineHeader>Instructions for Dual Anonymous Reviewing</UnderlineHeader>


            <p>Reviewing for ISWC 2026 is dual-anonymous, i.e., the identities of the authors and reviewers are hidden. Both authors and reviewers are expected to make every effort to honor this process. Authors should do their best to ensure that the submission can be evaluated without it being obvious who wrote the paper, and reviewers should not undertake any investigation with the specific goal of revealing the authors’ identity.</p>

            <p>To help with the dual anonymous reviewing process please ensure the following when submitting to ISWC 2026: </p>


            <p>
                <ul className="list-disc list-inside">

                    <li>The first page, on which the paper body begins, should include the title and abstract but not the names or affiliations of the authors.</li>
                    <li>Remove any identifying information, including author names, from file names and ensure document properties are also anonymized.</li>
                    <li>Remove any identifying information from your paper resources such as datasets, models, or code (e.g., README and package files in code repositories, Zenodo deposits, etc.)</li>
                    <li>The references should include all published literature relevant to the paper. When referring to one’s own work, use the third person, rather than the first person. For example, say “Previously, Foo [4] showed that…,” rather than “In our previous work [4] we showed that…”</li>
                    <li>Try to avoid including any information that would identify the authors or their affiliations. Such information may be added to the final camera-ready version for publication.</li>
                    <li>Remove references to funding sources and/or acknowledgments. Such information should be included in the final camera-ready version for publication.</li>


                </ul>
            </p>



            <UnderlineHeader>Supplemental Material</UnderlineHeader>

            <p>The length of the main submission is strictly limited as indicated in the call for papers. However, authors may also choose to submit supplemental material, including proofs of theorems stated in the main paper, video demonstrations, data from experimental evaluations, source code, and so on. Note that submissions may reference the supplemental material for further details, but should be self-contained. Reviewers are instructed to make their evaluations based on the main submission and are not obliged to consult the supplemental material. Therefore, make sure that your submission stands on its own without them.</p>


            <p>Please ensure you do not violate the dual-anonymous-review requirements in the supplemental material. You may make supplemental material available per one of the following options:
            </p>


            <p><b>OPTION 1.</b> As an anonymized link to supplemental material included in the paper. This option may be used, in particular, in case the total size of the submission (paper+supplemental materials) exceeds 100MB. We recommend the use of Github, Zenodo, Figshare, or Dryad. Anonymous dataset submissions can be managed through Zenodo and Figshare without additional accounts; see, for example,<ExternalLink href="https://github.com/dgraziotin/disclose-data-dbr-first-then-opendata">this guide by Daniel Graziotin</ExternalLink> . Code repository submissions may be anonymized using platforms such as <ExternalLink href="https://anonymous.4open.science/">https://anonymous.4open.science/.</ExternalLink>.</p>
            <p><b>OPTION 2.</b> As a second zipped folder uploaded via the Easychair system; note that the total size of the submission (paper+supplemental materials) must not exceed 100MB.</p>


            <p>Supplemental material submitted at the time of submission for review will not be automatically published or posted if the paper is accepted for publication. Hence, we expect authors of accepted papers choosing OPTION 2 to publish this material in one of the aforementioned repositories (or arXiv in the case of an extended version of the paper with proofs) and provide references to the supplemental material in the final camera-ready version of the paper.</p>

            <p>In both cases, we strongly encourage making supplemental material available under open licenses and providing sufficient documentation to enable reproducibility</p>


            <UnderlineHeader>Prior Publication and Multiple Submissions</UnderlineHeader>

            <p>ISWC 2026 will not accept research papers that, at the time of submission, are under review for or have already been published in, or accepted for publication, in a journal or another conference. Please refer and adhere to the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/prior-publications">ISWC Prior Publication and Multiple Submission Policy.</ExternalLink></p>
            <UnderlineHeader>Positioning with respect to other fields</UnderlineHeader>

            <p>Contributions should be clearly related to the Semantic Web or have an impact in the field of semantics. The scope of the conference is semantic technologies and how they enable new research and applications. While semantic technologies are part of a broader interdisciplinary ecosystem, including aspects of Data Management and Artificial Intelligence, such as Machine Learning (ML) and Natural Language Processing (NLP), it remains a distinct scholarly field, with its own research methods, tools, and challenges. Therefore, contributions to other disciplines that have no direct impact on the landscape of semantic technologies are not relevant to the ISWC conference, and may be desk-rejected on this basis.</p>

            <UnderlineHeader>Research Track Chairs</UnderlineHeader>
            
            <p><b>Contact: <ExternalLink href="mailto:iswc2026-research@easychair.org">iswc2026-research@easychair.org</ExternalLink></b></p>


              <ul className="ul-disc">
        <li><b>Manolis Koubarakis</b> — National and Kapodistrian University of Athens, Greece
</li>
        <li><b>Maria-Esther Vidal</b> —  Leibniz University Hannover & TIB-Leibniz Information Center of Science and Technology, Germany</li>
      </ul>






        </BaseContainer>
    );
}

export default Research;
