import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink"
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";
import SubHeader from "../general/SubHeader";

export const Resource = () => {
  return (
    <BaseContainer>

      <Header>Call for Resource Track Papers</Header>

      <p><b>Resources</b> are of paramount importance as they foster scientific advancement and the development of novel applications. Sharing resources is key to ensuring <b>reproducibility</b>, allowing other researchers to leverage FAIR principles for scientific data management to compare results and methods or to explore new lines of research, and supporting practitioners in reusing research outputs.</p>

      <p>The ISWC 2026 Resources Track aims to promote the sharing of resources that support, enable, or utilize semantic web research. We welcome descriptions of resources that leverage knowledge representation based on Semantic Web standards or other graph data models to improve the acquisition, processing, and sharing of data on the web.</p>

      <p>Resources include, but are not restricted to: datasets, knowledge graphs, ontologies/vocabularies, ontology design patterns, evaluation benchmarks or methods, software tools/services, APIs and software frameworks, workflows, crowdsourcing task designs, protocols, methodologies, and metrics, that have contributed or may contribute to the generation of novel scientific work and applications in the semantic web. In particular, we encourage the sharing of such resources following the best and well-established practices within the semantic web community. As such, this track calls for contributions that provide a concise and clear description of a resource and its usage. To encourage sustainability of our community’s research resources, we also welcome thorough reproducibility studies that leverage and significantly extend earlier published resources.</p>


      <SubHeader> Important Dates </SubHeader>

            <p>
                <ul className="list-disc list-inside">

                    <li>Abstract submission due<b>	2 May 2026</b></li>
                    <li>Full paper submission due <b>7 May 2026</b></li>
                    <li>Rebuttal<b> 11 June - 18 June 2026</b> </li>
                    <li>Notifications<b> 16 July 2026</b> </li>
                    <li>Camera-ready papers due<b>	6 August 2026</b></li>
                    <li>Conference:			<b>27 - 29 October 2026</b></li>

                </ul>
            </p>

      <p>All deadlines are<b> 23:59 AoE (anywhere on Earth)</b></p>


      <UnderlineHeader>Resources of Interest</UnderlineHeader>

      <p>A typical Resource Track paper has its focus set on reporting on resources that fall into one of the following categories.</p>

      <p>


        <ul className="list-disc list-inside">
          <li>Datasets produced
            <ul style={{ listStyleType: "circle" }} className="ml-16">
              <li> to support specific evaluation tasks (for instance, labeled ground truth data);</li>
              <li>to support novel research methods;</li>
              <li>by novel algorithms.</li>
            </ul>
          </li>
          <li>Knowledge graphs, represented using semantic web technologies or other graph models for web data, which can be reused in research or industry.</li>
          <li>Ontologies, vocabularies, and ontology design patterns, with a focus on describing the modelling process underlying their creation.</li>
          <li>Reusable software and services, e.g., prototypes /services supporting a given research hypothesis and enabling specific data processing and engineering tasks.</li>
          <li>Reusable software and services, e.g., prototypes supporting a given research hypothesis or services enabling specific data processing and engineering tasks.</li>
          <li>Community-shared software frameworks that can be extended or adapted to support scientific study and experimentation.</li>
          <li>Crowdsourcing task designs that have been used and can be (re)used for building resources such as gold standards and the like.</li>
          <li>Benchmarking activities focusing on datasets and algorithms for comprehensible and systematic evaluation of existing and future systems.</li>
          <li>Novel, systematic evaluation methodologies and metrics, and their demonstration in an experimental study.</li>
          <li>Protocols for conducting experiments and studies.</li>
          <li>Educational Material for and about semantic technologies and techniques

            <ul style={{ listStyleType: "circle" }} className="ml-16">
              <li> Curriculum pertaining to education about knowledge graphs, ontologies, or other semantic technologies (e.g., well-described tutorials)</li>
              <li>Semantic artifacts (e.g., knowledge graphs or ontologies) that can be used to enhance education</li>

            </ul>
          </li>
          <li>Thorough reproducibility studies that leverage and significantly extend earlier published resources falling in one of the above categories.</li>

        </ul>
      </p>


      <UnderlineHeader>Review Criteria </UnderlineHeader>


      <p>The program committee will consider the quality of both the resource and the paper in its review process. Therefore, authors <b>must ensure unfettered access to the resource</b> both during the review process and after, by citing the resource at a permanent location. For example, data available in a repository such as <ExternalLink href="https://figshare.com/">FigShare</ExternalLink>, <ExternalLink href="https://figshare.com/">Zenodo</ExternalLink>, or a domain-specific repository; or software code being available in a public code repository, such as <ExternalLink href="https://github.com/">GitHub</ExternalLink> or <ExternalLink href="https://bitbucket.org/">BitBucket</ExternalLink> or one’s institutional open data repository. Code releases should be properly deposited according to <b>community best practices</b>. In exceptional cases, when it is not possible to make the resource public, authors must provide anonymous access to the resource for the reviewers and briefly motivate why the resource cannot be made public. All resources should clearly disclose <b>their license.</b></p>

      <p>We welcome the submission of established resources, having a community using them (excluding the authors), and of new resources, which may not prove established reuse but have sufficient evidence and motivation for claiming potential adoption. Evidence of adoption of a resource is considered a positive factor in the evaluation. </p>

      <p>All resources will be evaluated along the following review criteria:</p>





      <SubHeader>Impact:</SubHeader>

      <p>
        <ul className="list-disc list-inside">
          <li>Does the resource break new ground?</li>
          <li>Does the resource fill an important gap?</li>
          <li>How does the resource advance the state of the art?</li>
          <li>Has the resource been compared to other existing resources (if any) of similar scope?</li>
          <li>Is the resource of interest to the semantic web community?</li>
          <li>Is the resource of interest to society in general?</li>
          <li>How will this resource support the adoption of semantic web technologies?</li>
          <li>What impact will this resource have (or currently has)? </li>

        </ul>
      </p>
      <SubHeader>Reusability& Reproducibility:</SubHeader>
      <p>
        <ul className="list-disc list-inside">
          <li>Is there evidence of usage by a wider community beyond the resource creators or their project? Alternatively (for new resources), what is the resource’s potential for being (re)used?</li>
          <li>Is the resource easy to (re)use? For example, does it have high-quality documentation? Are there tutorials available?</li>
          <li>Are reported evaluation results and metrics reproducible?</li>
          <li>Is the resource general enough to be applied in a wider set of scenarios, not just for the originally designed use? If it is specific, is there substantial demand?</li>
          <li>Is there potential for extensibility to meet future requirements?</li>
          <li>Does the resource include a clear explanation of how others use the data and software? Or (for new resources) how others are expected to use the data and software?</li>
          <li>Does the resource description clearly state what the resource can and cannot do, and the rationale for the exclusion of some functionality?</li>
        </ul>
      </p>
      <SubHeader>Design & Technical Quality:</SubHeader>
      <p>
        <ul className="list-disc list-inside">
          <li>Does the design of the resource follow resource-specific best practices?</li>
          <li>Did the authors perform an appropriate reuse or extension of suitable high-quality resources? For example, in the case of ontologies, authors might extend upper ontologies and/or reuse ontology design patterns.</li>
          <li>Is the resource suitable for solving the task at hand?</li>
          <li>Does the resource provide an appropriate description (both human- and machine-readable), thus encouraging the adoption of FAIR principles? If applicable: Is there a schema diagram? For datasets, is the description available in terms of VoID/DCAT/DublinCore or <ExternalLink href="https://github.com/mlcommons/croissant">Croissant metadata format</ExternalLink>?</li>
        </ul>
      </p>
      <SubHeader>Availability:</SubHeader>
      <p>
        <ul className="list-disc list-inside">
          <li>Is the resource publicly available? For example as API, Linked Open Data, Download, Open Code Repository.</li>
          <li>Is the resource publicly findable? Is it registered in (community) registries (e.g. Linked Open Vocabularies, BioPortal, or DataHub)? Is it registered in generic repositories such as FigShare, Zenodo or GitHub?</li>
          <li>Is there a sustainability plan specified for the resource? Is there a plan for the medium and long-term maintenance of the resource?</li>
          <li>Does the resource adopt open standards, when applicable? Alternatively, does it have a good reason not to adopt standards?</li>

        </ul>
      </p>

      <br></br>

      <p>

        In addition to the above criteria for evaluation, we stress that there are availability requirements to fulfill, as specified as follows: </p>
      <p>
        <ul className="list-disc list-inside ml-8">
          <li><b>Mandatory</b>: Is the resource (and related results) published at a persistent URI (PURL, DOI, w3id)?</li>
          <li><b>Mandatory</b>: Is there a canonical citation associated with the resource?</li>
          <li><b>Mandatory</b>: Does the resource provide a license specification? (See creativecommons.org, opensource.org for more information)</li>
        </ul>

      </p>

      <p>Guidelines for reviewers are available <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/review">here</ExternalLink>.</p>

<p>To ensure that reviewers and readers of published papers will easily find the mandatory availability information, please use the<ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/review"> Resource Availability Statement Guide</ExternalLink> and suggested wording.</p>



      <UnderlineHeader>Submission Details</UnderlineHeader>

      <p>


        <ul className="list-disc list-inside">

          <li>Pre-submission of abstracts is a strict requirement. All papers and abstracts have to be submitted electronically via <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">EasyChair</ExternalLink>.</li>
<li>Papers describing a resource must be in the range of <b>8 and 15 pages (excluding references and the "Declaration of use of Generative AI” section)</b>. Papers must describe the resource and focus on the sustainability and community surrounding the resource. Benchmark papers are expected to include evaluations and provide a detailed description of the experimental setting. <b>Papers that exceed the page limit will be rejected without review.</b></li>
<li>All submissions must be in English.</li>
<li>Submissions must be either in PDF or HTML, formatted in the style of the Springer Publications format for Lecture Notes in Computer Science (LNCS). For details on the LNCS style, see <ExternalLink href="http://www.springer.com/computer/lncs/lncs+authors?SGWID=0-40209-0-0-0">Springer’s Author Instructions</ExternalLink>. For <ExternalLink href=" https://iswc2026.semanticweb.org/#/guidelines/html-submission">HTML submission guidance, please see the HTML submission guide used for ISWC 2026.</ExternalLink> </li>
<li><b>ISWC 2026 submissions for the resources track are not anonymous</b>. We encourage embedding metadata in the PDF or HTML to provide a machine-readable link from the paper to the resource.</li>
<li>Authors of accepted papers will be required to provide semantic annotations for the abstract of their submission, which will be made available on the conference website. Details will be provided at the time of acceptance.</li>
<li>Accepted papers will be distributed to conference attendees. Accepted papers will be distributed to conference attendees and also published by Springer in the printed conference proceedings, as part of the Lecture Notes in Computer Science series.</li>
<li><b>At least one author of each accepted paper must register for the conference and present the paper.</b> As in previous years, students will be able to apply for registration or travel support to attend the conference. Preference will be given to students that are first authors of papers accepted to the main conference or the doctoral consortium, followed by those who are first authors of papers accepted to ISWC workshops and the Poster & Demo session.</li>
        </ul>
      </p>
      <UnderlineHeader>Differentiation From Other Tracks</UnderlineHeader>


      <p>We strongly recommend that prospective authors carefully check the calls of the other tracks of the conference in order to identify the optimal track for their submission (submission of the same work to multiple tracks is prohibited). Papers that propose new algorithms and architectures should be submitted to the Research track as usual. Papers focusing on new reusable resources themselves, such as datasets, ontologies, workflows, etc., should be submitted to the Resources Track. Papers that describe and/or assess the use or application of Semantic Web and Knowledge Graph technologies in practical settings should be submitted to the In-Use track. See “Exemplary In-Use Papers From Previous Editions of ISWC” (below) for additional details.</p>

 <p>We strongly recommend that prospective authors carefully check the calls of the other main tracks of the conference in order to identify the optimal track for their submission (submission of the same work to multiple tracks is prohibited). </p>

 <p>
<ul className="list-disc list-inside ml-8">
<li>Papers that propose new algorithms and architectures should be submitted to the regular research track;</li>
<li>Papers that reuse and apply state-of-the-art semantic technology or resources in practical settings should be submitted to the in-use track (i.e., the novelty falls into the in-use application of the semantic technology or resource);</li>
<li>Authors who want to present an interesting industry application but who do not want to submit a full paper should submit to the industry track;</li>
<li>Papers describing concrete resources (datasets, ontologies, vocabularies, annotated corpora, workflows, knowledge graphs, evaluation benchmarks, etc.) should be submitted to the resources track.</li>

</ul>

 </p>

 <p>Note that research, in-use and resource papers are published within the same proceedings by Springer’s Lecture Notes in Computer Science series.</p>

      <UnderlineHeader>Prior Publication and Multiple Submissions</UnderlineHeader>

      <p>ISWC 2026 will not accept resource papers that, at the time of submission, are under review for or have already been published or accepted for publication in a journal, another conference, or another ISWC track, following the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/prior-publications">ISWC Guidelines on Prior Publication and Simultaneous Submission</ExternalLink>. The conference organizers may share information on submissions with other venues to ensure that this rule is not violated.
</p>
      <UnderlineHeader>Policy on the use of Generative AI</UnderlineHeader>

 
             <p>All submissions must comply with the conference’s <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/generative-ai-policy">Generative AI policy</ExternalLink>. This includes use for writing or preparing the manuscript and for carrying out or reporting the research. Authors remain fully responsible for the work and must disclose any covered use as required; non-compliant submissions may be rejected or withdrawn.</p>
 
 <p>In case of any questions regarding this policy, please contact the track chairs.</p>
 
 <p>Each submission must include a section titled "Declaration of use of Generative AI” placed <b>immediately before the references</b>. Authors should briefly describe any Generative AI use and how they comply with the policy. This section <b>does not count toward the maximum paper length.</b></p>
      <UnderlineHeader>Research Metadata and Comparisons</UnderlineHeader>


      <p>To facilitate clearly stating novelty to readers and peer-reviewers alike, findability of the paper if accepted, and trying to use knowledge graphs ourselves, you may add to the paper a so-called “ORKG comparison” with the <ExternalLink href="https://orkg.org/">Open Research Knowledge Graph</ExternalLink> (ORKG). Such an ORKG Comparison is a characterization of a submission by juxtaposing it with related resources, if there are any, and therewith highlighting the key difference(s) of your resource with related ones. More information on the background and how to create an ORKG comparison can be found <ExternalLink href="https://www.orkg.org/orkg/help-center/article/38/Accompany_your_paper_submission_with_an_ORKG_comparison">here</ExternalLink> (including a how-to video). This can be done during the submission process – in which case a link to the comparison can be added to the submission for reviewers. <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/okbcworkflow">This workflow</ExternalLink> describes the steps involved in the creation of such a comparison.
This addition to an ISWC paper submission is experimental and optional. It may not be relevant to your resource, and the absence of such a comparison will not negatively affect the review of the paper.
</p>
      <UnderlineHeader>Positioning with respect to other fields</UnderlineHeader>

      <p>Contributions should be clearly related to the Semantic Web or have an impact in the field of semantics. The scope of the conference is semantic technologies and how they enable new research and applications. While semantic technologies are part of a broader interdisciplinary ecosystem, including aspects of Data Management and Artificial Intelligence, such as Machine Learning (ML) and Natural Language Processing (NLP), it remains a distinct scholarly field, with its own research methods, tools, and challenges. Therefore, contributions to other disciplines that have no direct impact on the landscape of semantic technologies are not relevant to the ISWC conference, and may be desk-rejected on this basis.
</p>
      <UnderlineHeader>Resource Track Chairs</UnderlineHeader>

              <ul className="ul-disc">
        <li><b>Axel Polleres</b> — Vienna University of Economics and Business (WU Wien), Austria
</li>
        <li><b>Marieke van Erp</b> —  KNAW Humanities Cluster, The Netherlands</li>
      </ul>
    </BaseContainer>
  );
}

export default Resource;
