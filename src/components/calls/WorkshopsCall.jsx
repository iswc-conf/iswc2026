import React from "react";
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
export const Workshops = () => {
  return (
    <BaseContainer>
      <Header>Call for Workshops</Header>
      <br></br>

      <p>
        The International Semantic Web Conference (ISWC) serves as the premier
        venue for presenting groundbreaking research, innovative systems, and
        application results in areas such as the Semantic Web, Knowledge Graphs,
        and Linked Data. Each year, ISWC attracts high-quality submissions and
        participants from academia and industry, bringing together researchers
        from diverse fields including artificial intelligence, databases,
        natural language processing, machine learning, information systems,
        human-computer interaction, and web science. These experts explore and
        develop cutting-edge methods and technologies to enhance the way we
        access, interpret, and utilize information on the Web.
      </p>

      <p>
        {" "}
        Workshops at ISWC play a critical role in fostering focused, intensive
        scientific exchange on specific topics aligned with the conference’s
        overarching themes. They provide a unique venue for exploring emerging
        ideas, discussing novel perspectives on established research, and
        engaging with related research communities. We encourage proposals for
        workshops that will inspire meaningful dialogue and collaboration among
        ISWC attendees, providing a platform to advance research and innovation
        in this dynamic field.
      </p>

      <SubHeader>Important dates include</SubHeader>

      <p>
        <ul className="ul-disc">
          <li>
            Submission deadline: <b>February 10, 2026</b>{" "}
          </li>
          <li>
            Notification to proposers:<b> February 24, 2026</b>
          </li>
          <li>
            Workshop website and CfP available online: <b>March 20, 2026</b>
          </li>
          <li>
            Workshop program with list of accepted papers available online:{" "}
            <b>August 21, 2026</b>
          </li>
          <li>
            Workshop days:<b> October 25-26, 2026</b>
          </li>
        </ul>
      </p>

      <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>Workshop Topics</UnderlineHeader>

      <p>
        We invite proposals for three types of workshops, each designed to
        foster innovation and collaboration within the Semantic Web and
        Knowledge Graph community:
      </p>

      <p>
        <ul className="ul-disc">
          <li>
            <b>Novel:</b> Workshops focusing on emerging topics that are
            expected to gain importance in the Semantic Web and Knowledge Graph
            community in the coming years. Proposers should clearly articulate
            why the topic is becoming increasingly significant and demonstrate
            its potential to attract substantial submissions and participation.
            Proposals will be primarily evaluated based on the timeliness of the
            topic and its potential for future impact.
          </li>
          <li>
            <b>Cross-over:</b> Workshops exploring the interplay and convergence
            between ISWC and other research communities (e.g., “X meets Semantic
            Web/Knowledge Graphs”). Proposers, ideally including representatives
            from both communities, must explain the relevance of connecting the
            two fields, outline common challenges, and highlight the value of
            fostering collaboration between them. Proposals will be assessed on
            their ability to bridge scientific communities and the value of the
            envisioned cross-disciplinary collaboration.
          </li>
          <li>
            <b>Established:</b> Workshops focusing on specific aspects of
            Semantic Web and Knowledge Graph research that have already
            demonstrated the ability to attract a significant number of
            submissions and participants, contributing meaningfully to
            scientific progress. Such proposals should justify the continuation
            of the workshop series, highlight its focused scope, and demonstrate
            its ongoing impact. Proposals will be evaluated based on the
            arguments for continuation and evidence of past success.
          </li>
          <li>
            <b>Challenge:</b> Workshops promoting open competition on a problem
            of choice within the Semantic Web domain (e.g., see the <ExternalLink href="https://lm-kbc.github.io/ ">KBC-LM
            workshop series</ExternalLink>). Competitions are an
            effective way to advance the state of the art. Proposers should
            clearly specify the task to be addressed, provide an evaluation
            dataset, and define evaluation measures to compare the performance
            of participating systems. Proposals will be evaluated based on their
            relevance to the Semantic Web community, the potential number of
            interested participants, and the rigor and transparency of the task
            description and evaluation procedure.
          </li>
        </ul>
      </p>

      <p>
        Workshop proposals of all types are encouraged to promote the vitality
        and innovation of the Semantic Web and Knowledge Graph community.
      </p>

      <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>Review Criteria</UnderlineHeader>

      <p>
        Workshop proposals should focus on research topics and workshop formats
        that meet the following criteria:
      </p>
      <p>
        <ul className="ul-disc">
          <li>
            The topic aligns with the broader scope of ISWC 2026, emphasizing
            Semantic Web standards and technologies, knowledge representation,
            and graph data models as central elements.
          </li>
          <li>
            The proposal demonstrates a clear emphasis on a specific technology,
            challenge, or application area.
          </li>
          <li>
            The topic has the potential to engage a diverse and sufficiently
            broad audience, including participants beyond the typical ISWC
            community.
          </li>
          <li>
            The workshop format is dynamic, engaging, and well-suited for the
            intended audience. It incorporates interactive sessions beyond
            traditional paper presentations, such as roundtables, debates, Q&A
            sessions, roadmapping, or hackathons.
          </li>
        </ul>
      </p>

      <p>
        The decision to accept or reject a workshop proposal will be based on
        its overall quality, relevance, and potential to appeal to a substantial
        portion of the Semantic Web and Knowledge Graph community. Additional
        considerations, such as overlap with other workshop proposals, will also
        influence the final decision.
      </p>

      <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>Submission Guidelines</UnderlineHeader>
      <p>
        Workshop proposals should be submitted via EasyChair at this link:
        <ExternalLink href="https://easychair.org/conferences/?conf=iswc2026">
          EasyChair Workshop Submission Link
        </ExternalLink>.
        </p>
        <p>
        Submissions must be in English and formatted as a single PDF document no
        longer than 4 pages, adhering to the LNCS guidelines. Detailed
        formatting instructions are available in{" "}
        <ExternalLink href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
          Springer’s Author Instructions.
        </ExternalLink>
      </p>

      <SubHeader>
        All workshop proposals should include the following sections:
      </SubHeader>

      <p>
        <ul className="ul-disc">
          <li>
            <b>Workshop Title and Acronym</b>
          </li>
          <li>
            <b>Workshop Type:</b> Indicate whether the workshop is novel,
            cross-over, established, or challenge.
          </li>
          <li>
            <b>Proposed Length:</b> Specify whether the workshop will be
            half-day or full-day.
          </li>
          <li>
            <b>Abstract:</b> Provide a concise 200-word summary describing the
            purpose of the workshop.
          </li>
          <li>
            <b>Topics:</b> Specify the topics of interest that will be covered.
            Proposals should focus on a specific and selective theme, narrower
            than the main conference’s broader scope. Proposals with significant
            thematic overlap with others may be merged or rejected.
          </li>
          <li>
            <b>Chairs:</b> Provide the names, affiliations, email addresses,
            homepages, and short biographies of each chair. Highlight their
            expertise in the workshop topic and their experience organizing
            relevant events. Proposals should have multiple chairs (ideally from
            different institutions) to ensure diverse perspectives. A maximum of
            five organizers is recommended, with a balance of junior and senior
            researchers.
          </li>
          <li>
            <b>Organisational Requirements:</b> List any specific equipment
            needed beyond standard projectors (e.g., poster stands, boards,
            markers). Workshop proposers are encouraged to bring their own
            materials if necessary, as equipment availability will be confirmed
            with local organizers.
          </li>
        </ul>
      </p>

      <SubHeader>
        For novel, crossover, and established workshops, include:
      </SubHeader>

      <p>
        <ul className="ul-disc">
          <li>
            <b>Workshop Format:</b> Describe the structure and mix of events,
            such as paper presentations, invited talks, panels, demos, and
            discussions. Innovative formats are encouraged to foster rich
            interactions.
          </li>
          <li>
            <b>Review Policy:</b> Specify the review process for contributions
            (e.g., open review, double-anonymous, single-anonymous).
          </li>
          <li>
            <b>Publication Policy:</b> Outline plans for preserving workshop
            outcomes, such as publishing papers in an online repository like
            CEUR or inviting selected papers to a journal special issue.
          </li>
          <li>
            <b>Program Committee:</b> Include a list of potential Program
            Committee members with affiliations. At least 50% of PC members
            should be confirmed. Diversity in gender, location, and institution
            is strongly encouraged, as well as efforts to include
            underrepresented and underserved groups.
          </li>
        </ul>
      </p>

      <SubHeader>
        For novel, crossover, and challenge workshops, include:
      </SubHeader>

      <p>
        <ul className="ul-disc">
          <li>
            <b>Motivation:</b> Explain why the topic or challenge is timely and
            relevant to ISWC participants.
          </li>
          <li>
            <b>Audience and Community:</b> Identify the target audience and
            estimate the potential number of participants. Demonstrate the
            existence of an interested community, referencing recent papers on
            the workshop’s topic and explaining why it would attract
            submissions.
          </li>
        </ul>
      </p>

      <SubHeader>For established workshops, include:</SubHeader>

      <p>
        <ul className="ul-disc">
          <li>
            <b>Continuation:</b> Justify the continuation of the workshop.
            Highlight emerging topics, recent developments, or new challenges
            that make the workshop relevant.
          </li>
          <li>
            <b>Past Workshops:</b> Summarize the workshop series’ development
            over the past 3–5 years, including quantitative data on submissions,
            accepted papers, and attendance.
          </li>
        </ul>
      </p>

      <SubHeader>For challenge workshops, include:</SubHeader>

      <p>
        <ul className="ul-disc">
          <li>
            <b>Data Preparation:</b> Specify the process for selecting,
            acquiring, and preparing data for training and evaluation, with
            conditions of availability (if any). Describing data in relation to
            the FAIR principles is recommended.
          </li>
          <li>
            <b>Evaluation:</b> Specify the procedure for evaluating the
            performance of systems, including metrics and availability of
            evaluation software.
          </li>
          <li>
            <b>Dissemination:</b> Outline the plan for disseminating the
            challenge (targeted mailing lists, social media, etc.).
          </li>
        </ul>
      </p>

      <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>Requirements upon Acceptance</UnderlineHeader>
      <p>
        Accepted workshops will need to adhere to the following requirements:
      </p>
      <p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Workshop Web Page:</strong> Organizers must prepare a
            workshop web page with a detailed call for papers (where applicable)
            and information about the workshop's structure, format, and
            timelines.
          </li>
          <li>
            <strong>Timeline for Deadlines:</strong> Organizers should adhere to
            the indicative timeline for internal workshop deadlines provided by
            ISWC. Workshops can allow for a maximum deadline extension of one
            week. These strict deadlines are necessary to align with the overall
            conference organization.
          </li>
          <li>
            <strong>Organizational Responsibilities:</strong>
            <ul style={{ listStyleType: "circle" }} className="ml-8">
              <li>
                Workshop organizers for novel, crossover, and established, are
                responsible for:
                <ul style={{ listStyleType: "square" }} className="ml-8">
                  <li>
                    Conducting the reviewing process for submitted contributions (if applicable).
                  </li>
                  <li>
                    Publicizing their workshop to attract submissions and participation.
                  </li>
                  <li>
                    Publishing proceedings (e.g., electronically on CEUR-WS.org) for traditional workshop types.
                  </li>
                </ul>
              </li>
              <li>
                While ISWC workshops and local chairs will assist with local arrangements, organizers are expected to handle these responsibilities independently.
              </li>
            </ul>
          </li>

          <li>
            <strong>Participation Requirements:</strong>
             At least one workshop organizer must register for the conference by the early bird registration deadline and attend the workshop in person.
          </li>
          <li>
            <strong>Cancellation Policy:</strong>
            Workshops may be canceled at the discretion of the workshop and tutorial track chairs if:
             <ul style={{ listStyleType: "circle" }} className="ml-8">
              <li>
                The workshop receives an insufficient number of submissions.
              </li>
              <li>
                Organizers fail to register by the early registration deadline.
              </li>
            </ul>
          </li>
        </ul>
      </p>

      <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>Timeline Template for Workshop Organizers</UnderlineHeader>

      <p>All workshops will adhere to a common timeline as follows (<b>all deadlines are 23:59 AoE</b>):</p>

      <p><ul className="ul-disc">
        <li>Workshop website and CfP available online:<b> March 20, 2026</b></li>
        <li>Challenge workshops release datasets (incl. test solution if available): <b>April 3, 2026</b></li>
        <li>Challenge solution submission:<b> June 26, 2026</b></li>
        <li>Challenge results: <b>July 10, 2026</b></li>
        <li>Workshop paper submissions:<b> July 24, 2026</b></li>
        <li>Workshop paper acceptance notification and accepted papers published on website:<b> August 21, 2026</b></li>
        <li>Workshop days: October <b>25-26, 2026</b></li>
        
        </ul></p>

    <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>Workshop Chairs</UnderlineHeader>

      <ul className="ul-disc">
        <li><b>Andrei Ciortea</b> — University of St.Gallen (Switzerland) and Inria, Université Côte d’Azur, CNRS, I3S (France)</li>
        <li><b>Ilaria Tiddi</b> — Vrije Universiteit Amsterdam (The Netherlands)</li>
      </ul>

      {/*
            

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Workshop Chairs</h3>
                    <p>Blerina Spahiu - University of Milano-Bicocca, Italy</p>
                    <p>Juan Sequeda - data.world, USA</p>

                    <p>
                        Contact: <a href="mailto:iswc2025-ws@easychair.org" style={{ color: '#e94607' }}>iswc2025-ws@easychair.org</a>
                    </p>
                </div>
            </div>
            */}
      <br></br>
      <br></br>
    </BaseContainer>
  );
};

export default Workshops;
