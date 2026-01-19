import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import { theme } from "../../theme";
import ExternalLink from "../general/ExternalLink";
import UnderlineHeader from "../general/UnderlineHeader";
import ScrollLink from "../general/ScrollLink";
import Card from "../general/Card";
import SubHeader from "../general/SubHeader";

export const InUse = () => {
  return (
    <BaseContainer>
      <Header>Call for In-Use Track Papers</Header>

      <p>
        The ISWC In-Use track provides a forum to explore the benefits and
        challenges of applying Semantic Web and Knowledge Graph technologies in
        concrete, practical use cases, in contexts ranging from industry to
        government and society.
      </p>

      <p>
        The track aims to give a stage to applied works addressing real-world
        problems in which Semantic Web and Knowledge Graph technologies have
        been employed, possibly in combination with machine learning, deep
        learning, and other AI techniques.
      </p>

      <p>
        The In-Use track thus seeks submissions describing applied research as
        well as software tools, systems, or architectures that benefit from the
        use of Semantic Web and Knowledge Graph technologies (including, but not
        limited to, technologies based on the Semantic Web standards).
        Importantly, submitted papers should provide convincing evidence of the
        use of the proposed application or tool by the target user group,
        preferably outside the group that conducted the development and, more
        broadly, outside the Semantic Web and Knowledge Graph research
        communities.
      </p>

      <p>
        A primary focus of the submissions should be on the benefits of Semantic
        Web and Knowledge Graph technologies for the intended use case and (if
        relevant) the added challenges they introduce. In addition, papers that
        advance the understanding of issues related to applying and deploying
        solutions involving Semantic Web and Knowledge Graph technologies in
        practice are strongly encouraged.
      </p>

      <SubHeader>Important Dates</SubHeader>
      <p>
        <ul className="list-disc list-inside">
          <li>
            Abstract submission due <b>May 2nd, 2026</b>
          </li>
          <li>
            Full paper submission due<b> May 7th, 2026</b>
          </li>
          <li>
            Rebuttal <b>May 28th - June 3rd, 2026</b>
          </li>
          <li>
            Notifications <b>June 24th, 2026</b>
          </li>
          <li>
            Camera-ready papers due <b>July 8th, 2026</b>
          </li>
          <li>
            Conference: <b>27 - 29 October 2026</b>
          </li>
        </ul>
      </p>

      <p>
        All deadlines are<b> 23:59 AoE (anywhere on Earth)</b>
      </p>

      <p>
        Pre-submission of abstracts is a strict requirement. All papers and
        abstracts have to be submitted electronically via{" "}
        <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">
          EasyChair
        </ExternalLink>
        .
      </p>

      <UnderlineHeader>Topics of Interest </UnderlineHeader>

      <p>
        We welcome submissions that demonstrate the use of Semantic Web and
        Knowledge Graph technologies, possibly covering one or more of the
        following topics:
      </p>

      <p>
        <ul className="list-disc list-inside">
          <li>
            Applications in domain-specific areas (e.g., libraries, cultural
            heritage, healthcare, life sciences, engineering, smart
            manufacturing, smart cities, open government, legal tech, finance).
          </li>
          <li>
            Descriptions of how Semantic Web resources (ontologies, datasets,
            software, standards, etc.) are being used in practice.
          </li>
          <li>
            Assessment of the Semantic Web and Knowledge Graph technologies from
            diverse points of view, such as:
            <ul style={{ listStyleType: "circle" }} className="ml-16">
              <li>Usability and acceptance by stakeholder groups</li>
              <li>Uptake outside the proposing research communities</li>
              <li>Scalability of solutions and their large-scale deployment</li>
              <li>
                Costs and benefits of implementing, deploying, using, and
                managing Semantic Web and Knowledge Graph technologies
              </li>
              <li>
                Risks and opportunities of using Semantic Web and Knowledge
                Graph technologies in organizations for their businesses and
                customers.
              </li>
            </ul>
          </li>
          <li>
            Lessons learned and best practices from deploying and using an
            application or service based on Semantic Web and Knowledge Graph
            technologies.
          </li>
          <li>
            Comparison of Semantic Web and Knowledge Graph technologies with
            alternative approaches that use conventional or competing
            technologies (e.g., database management systems, model-driven
            engineering, other AI techniques).
          </li>
          <li>
            Application-oriented work that does not qualify as a research paper,
            where the use of rather than the development of Semantic Web and
            Knowledge Graph technologies has a demonstrated impact on more
            flexible, more efficient, or otherwise improved solutions.
          </li>
        </ul>
      </p>

      <UnderlineHeader>Differentiation From Other Tracks </UnderlineHeader>

      <p>
        We strongly recommend that prospective authors carefully check the calls
        of the other tracks of the conference in order to identify the optimal
        track for their submission (submission of the same work to multiple
        tracks is prohibited). Papers that propose new algorithms and
        architectures should be submitted to the Research track as usual. Papers
        focusing on new reusable resources themselves, such as datasets,
        ontologies, workflows, etc., should be submitted to the Resources Track.
        Papers that describe and/or assess the use or application of Semantic
        Web and Knowledge Graph technologies in practical settings should be
        submitted to the In-Use track. See “Exemplary In-Use Papers From
        Previous Editions of ISWC” (below) for additional details.
      </p>

      <p>
        {" "}
        We strongly recommend that prospective authors carefully check the calls
        of the other main tracks of the conference in order to identify the
        optimal track for their submission (submission of the same work to
        multiple tracks is prohibited).{" "}
      </p>

      <p>
        <ul className="list-disc list-inside ml-8">
          <li>
            Papers that propose new algorithms and architectures should be
            submitted to the regular research track;
          </li>
          <li>
            Papers that reuse and apply state-of-the-art semantic technology or
            resources in practical settings should be submitted to the in-use
            track (i.e., the novelty falls into the in-use application of the
            semantic technology or resource);
          </li>
          <li>
            Authors who want to present an interesting industry application but
            who do not want to submit a full paper should submit to the industry
            track;
          </li>
          <li>
            Papers describing concrete resources (datasets, ontologies,
            vocabularies, annotated corpora, workflows, knowledge graphs,
            evaluation benchmarks, etc.) should be submitted to the resources
            track.
          </li>
        </ul>
      </p>

      <p>
        Note that research, in-use and resource papers are published within the
        same proceedings by Springer’s Lecture Notes in Computer Science series.
      </p>
      <UnderlineHeader>Review Criteria </UnderlineHeader>
      <p>
        Reviews for the In-Use track will be single-blind. Submissions will be
        assessed in terms of novelty and significance (of the proposed use case
        or solution), uptake by the target user group, demonstrated or potential
        impact, as well as overall soundness and quality. Therefore, authors
        should clearly address these aspects in their submission.
      </p>

      <SubHeader>Novelty and significance</SubHeader>
      <p>
        Novelty and significance of the addressed problem or use case when
        applying Semantic Web and Knowledge Graph technologies. Novelty in the
        application or assessment of Semantic Web and Knowledge Graph
        technologies, which can be reflected in terms of, for example: (1) the
        role they play in the solution; (2) how they foster adoption; or (3)
        their combination/interplay with other technologies.
      </p>
      <SubHeader>Uptake</SubHeader>

      <p>
        Evidence of the adoption of the proposed solution by a relevant user
        base (domain practitioners, the general public, developers, etc.),
        preferably distinct from the proposer’s institutions and the Semantic
        Web and Knowledge Graph research communities. Proof or plan for
        large-scale deployment or adoption in the specific domain.
      </p>
      <SubHeader>Impact</SubHeader>

      <p>
        Technological, business, and social impact of the proposed solution,
        especially in contrast to alternative approaches. Validity and
        applicability of the proposed approach in a different domain.
        Applicability of the lessons learned from the adoption of Semantic Web
        and Knowledge Graph technologies, both from a technical and
        non-technical perspective.
      </p>
      <SubHeader>Soundness and Quality</SubHeader>

      <p>
        Methodological correctness of the performed evaluation in terms of
        quantitative and/or qualitative metrics to assess the pros and cons of
        the proposed solution. Quality of the discussion of the benefits and
        challenges of adopting Semantic Web and Knowledge Graph technologies for
        solving the addressed problem and/or with respect to alternative
        approaches. Overall clarity and quality of the submission. Guidelines
        for reviewers are available here.
      </p>

      <UnderlineHeader>Rebuttal Phase </UnderlineHeader>

      <p>
        In order to reduce workload on authors and reviewers, the rebuttal
        should only be used in two cases:
      </p>

      <p>
        <ul className="list-disc list-inside ml-8">
          <li>
            In order to highlight clear factual errors in reviews regarding the
            content of the submission.
          </li>
          <li>In order to respond to explicit questions from reviewers.</li>
        </ul>
      </p>
      <UnderlineHeader>Policy on the use of Generative AI</UnderlineHeader>

      <p>
        All submissions must comply with the conference’s{" "}
        <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/generative-ai-policy">
          Generative AI policy
        </ExternalLink>
        . This includes use for writing or preparing the manuscript and for
        carrying out or reporting the research. Authors remain fully responsible
        for the work and must disclose any covered use as required;
        non-compliant submissions may be rejected or withdrawn.
      </p>

      <p>
        In case of any questions regarding this policy, please contact the track
        chairs.
      </p>

      <p>
        Each submission must include a section titled "Declaration of use of
        Generative AI” placed <b>immediately before the references</b>. Authors
        should briefly describe any Generative AI use and how they comply with
        the policy. This section{" "}
        <b>does not count toward the maximum paper length.</b>
      </p>

      <UnderlineHeader>Supplemental Material Statement </UnderlineHeader>

      <p>
        We recommend that authors add a statement at the end of their submission
        that clarifies the availability of supplemental material (see
        Supplemental Material Statement Guide for more details). Such material
        may include datasets, ontologies, queries, code, configuration details,
        etc., depending on the contributions of the paper. The statement should
        cover all of the material necessary to assess claims in the paper.
        Unless otherwise justified, it is expected that access to resources is
        provided from the submitted paper since these resources often play an
        important role in the review process and are relevant to the prospective
        readership. In case certain resources cannot be made available (e.g.,
        due to privacy, ethical, or financial concerns), the statement should
        include a justification of why this is the case. In case the paper is
        fully self-contained and does not have supplemental material associated,
        a short statement can be provided arguing that the paper is
        self-contained. Please see the{" "}
        <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/supplemental">
          Supplemental Material Statement Guidelines
        </ExternalLink>{" "}
        for more details
      </p>

      <UnderlineHeader>Submission Details </UnderlineHeader>

      <p>
        <ul className="list-disc list-inside">
          <li>
            Pre-submission of abstracts is a strict requirement. All papers and
            abstracts have to be submitted electronically via EasyChair.
          </li>
          <li>
            All research submissions must be in English and no longer than 15
            pages (excluding references and the "Declaration of use of
            Generative AI” section). <b>
              Papers that exceed this limit will be
              rejected without review.
            </b>
          </li>
          <li>
            Submissions must be either in PDF or HTML, formatted in the style of
            the Springer Publications format for Lecture Notes in Computer
            Science (LNCS). For details on the LNCS style, see <ExternalLink href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Springer’s Author
            Instructions</ExternalLink>. For HTML submission guidance, please see the ​HTML
            submission guide.
          </li>
          <li>
            <b>Submissions to the ISWC 2026 In-Use track are not anonymous.</b> We
            encourage embedding metadata in the PDF or HTML to provide a
            machine-readable link from the paper to the resource.
          </li>
          <li>
            Authors of accepted papers will be required to provide semantic
            annotations for the abstract of their submission, which will be made
            available on the conference website. Details will be provided at the
            time of acceptance.
          </li>
          <li>
            Accepted papers will be distributed to conference attendees and also
            published by Springer in the conference proceedings, as part of the
            Lecture Notes in Computer Science series.
          </li>
          <li>
            <b>
              At least one author of each accepted paper must register for the
              conference and present the paper
            </b>. As in previous years, students
            will be able to apply for travel/registration support to attend the
            conference. Preference will be given to students who are the first
            authors of papers accepted to the main conference or the doctoral
            consortium, followed by those who are the first authors of papers
            accepted to ISWC workshops and the Poster & Demo session.
          </li>
        </ul>
      </p>

      <UnderlineHeader>
        Prior Publication And Multiple Submissions
      </UnderlineHeader>

      <p>

      ISWC 2026 will not accept papers that, at the time of submission, are under review for or have already been published or accepted for publication in a journal, another conference, or another ISWC track. The conference organizers may share information on submissions with other venues to ensure that this rule is not violated. Please refer to the <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/prior-publications">Prior Publications and Simultaneous Submissions guide</ExternalLink> for further information.
</p>




      <UnderlineHeader>Research Metadata and Comparisons</UnderlineHeader>
      <p>To facilitate clearly stating novelty to readers and peer-reviewers alike, findability of the paper if accepted, and trying to use knowledge graphs ourselves, you may add to the paper a so-called “ORKG comparison” with the<ExternalLink href="https://orkg.org/">Open Research Knowledge Graph (ORKG)</ExternalLink>. Such an ORKG Comparison is a characterization of a submission by juxtaposing it with related resources, if there are any, and thereby highlighting the key difference(s) of your resource with related ones. More information on the background and how to create an ORKG comparison can be found <ExternalLink href="https://www.orkg.org/orkg/help-center/article/38/Accompany_your_paper_submission_with_an_ORKG_comparison">here</ExternalLink> (including a how-to video). This can be done during the submission process, in which case a link to the comparison can be added to the submission for reviewers. <ExternalLink href="https://iswc2026.semanticweb.org/#/guidelines/okbcworkflow">This workflow</ExternalLink> describes the steps involved in the creation of such a comparison.
This addition to an ISWC paper submission is experimental and optional. It may not be relevant to your resource, and the absence of such a comparison will not negatively affect the review of the paper.
</p>




      <UnderlineHeader>
        Positioning with respect to other fields
      </UnderlineHeader>

      <p>Contributions should be clearly related to the Semantic Web or have an impact in the field of semantics. The scope of the conference is semantic technologies and how they enable new research and applications. While semantic technologies are part of a broader interdisciplinary ecosystem, including aspects of Data Management and Artificial Intelligence, such as Machine Learning (ML) and Natural Language Processing (NLP), it remains a distinct scholarly field, with its own research methods, tools, and challenges. Therefore, contributions to other disciplines that have no direct impact on the landscape of semantic technologies are not relevant to the ISWC conference, and may be desk-rejected on this basis.</p>
      <UnderlineHeader>
        Exemplary In-Use Papers from Previous Editions of ISWC
      </UnderlineHeader>

      <Card>Luggen, Michael, et al (2025). "Open Government Data as Multi-dimensional 5 Star Data: cube. link." International Semantic Web Conference. Cham: Springer Nature Switzerland, 2025.
      <ExternalLink href="https://doi.org/10.1007/978-3-032-09530-5">DOI</ExternalLink> </Card>
      <br></br>

      <Card>Scrocca, M. et al. (2024) Intelligent Urban Traffic Management via Semantic Interoperability Across Multiple Heterogeneous Mobility Data Sources. ISWC 2024. LNCS, vol. 15233. Springer, pp. 218–235.
      <ExternalLink href="https://doi.org/10.1007/978-3-031-77847-6_12">DOI</ExternalLink> </Card>
<br></br>
            <Card>Cuddihy, P. et al. (2023) Aviation Certification Powered by the Semantic Web Stack. ISWC 2023. LNCS, vol. 14266. Springer, pp. 345–361.
      <ExternalLink href="https://doi.org/10.1007/978-3-031-47243-5_19">DOI</ExternalLink> </Card>
<br></br>
            <Card>Angioni, S. et al. (2022) Leveraging Knowledge Graph Technologies to Assess Journals and Conferences at Springer Nature. ISWC 2022. LNCS, vol 13489. Springer, pp. 735-752.
      <ExternalLink href="https://doi.org/10.1007/978-3-031-19433-7_42">DOI</ExternalLink> </Card>
<br></br>
            <Card>Rojas J.A. et al. (2021) Leveraging Semantic Technologies for Digital Interoperability in the European Railway Domain. ISWC 2021. LNCS, vol 12922. Springer, pp. 648-664.
      <ExternalLink href="https://doi.org/10.1007/978-3-030-88361-4_38">DOI</ExternalLink> </Card>
<br></br>
            <Card>Ibáñez LD., Millard I., Glaser H., Simperl E. (2019) An Assessment of Adoption and Quality of Linked Data in European Open Government Data. ISWC 2019. LNCS, vol 11779. Springer, pp. 436-453.
      <ExternalLink href="https://doi.org/10.1007/978-3-030-30796-7_27">DOI</ExternalLink> </Card>
<br></br>

            <Card>Thanapalasingam T., Osborne F., Birukou A., Motta E. (2018) Ontology-Based Recommendation of Editorial Products. ISWC 2018. LNCS, vol 11137. Springer, pp. 341-358.
      <ExternalLink href="https://doi.org/10.1007/978-3-030-00668-6_21">DOI</ExternalLink> </Card>
<br></br>
            <Card>Mehdi G. et al. (2017) Semantic Rule-Based Equipment Diagnostics. ISWC 2017. LNCS, vol 10588. Springer, pp. 314-333.
      <ExternalLink href="https://doi.org/10.1007/978-3-319-68204-4_29">DOI</ExternalLink> </Card>
<br></br>
            <Card>Piro R. et al. (2016) Semantic Technologies for Data Analysis in Health Care. ISWC 2016.LNCS, vol 9982. Springer, pp. 400-417.
      <ExternalLink href="https://doi.org/10.1007/978-3-319-46547-0_34">DOI</ExternalLink> </Card>

      

      <UnderlineHeader>In-Use Track Chairs</UnderlineHeader>

      <p>
        <b>
          Contact:{" "}
          <ExternalLink href="mailto:iswc2026-in-use@easychair.org">
            iswc2026-in-use@easychair.org
          </ExternalLink>
        </b>
      </p>

      <ul className="ul-disc">
        <li>
          <b>Ernesto Jimenez-Ruiz</b> — City St George’s, University of London,
          UK
        </li>
        <li>
          <b>Oshani Seneviratne</b> — Rensselaer Polytechnic Institute, USA
        </li>
      </ul>
    </BaseContainer>
  );
};

export default InUse;
