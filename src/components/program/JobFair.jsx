import React from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";

// TODO: point these at your logos folder and actual file names.
import graphwiseLogo from "../../data/sponsors/SILVER/GRAPHWISE.png";
import sapLogo from "../../data/sponsors/PLATINUM/SAP.png";

/**
 * Job openings posted by ISWC 2026 sponsors (a benefit of the sponsorship
 * packages). To add a new posting, append an entry to `jobPosts` — the page
 * renders one card per sponsor. `logo` is optional.
 *
 * Needs the `.iswc-job-card__logo` block from the components stylesheet.
 *
 * TODO: confirm both URLs below before publishing. The SAP link is the
 * careers-site search for "knowledge Graphs" Ontology Ontologies; the
 * Graphwise link should point to the Data Architect posting itself.
 */
const jobPosts = [
  {
    id: "graphwise",
    company: "Graphwise",
    logo: graphwiseLogo,
    description: [
      "Graphwise enables organizations to realize the full value of enterprise AI by delivering the most comprehensive and trusted industry solutions in the field of knowledge graphs and semantic AI technologies. We deliver the critical knowledge graph infrastructure to ensure enterprises are ready to realize the technology’s full potential.",
      "Graphwise, formed by the merger of two tech visionaries, Ontotext and Semantic Web Company, has over 200 employees worldwide and offices located across North America, Europe and the Asia-Pacific region. If you are interested in knowledge organization, AI technology and innovation, Graphwise is the right fit for you!",
    ],
    link: {
      label: "Data Architect position",
      href: "https://graphwise.ai/careers/", // TODO: replace with the posting URL
    },
  },
  {
    id: "sap",
    company: "SAP",
    logo: sapLogo,
    description: [
      "Check out these job openings at SAP in the area of Knowledge Graphs and Ontologies.",
    ],
    link: {
      label: "Knowledge Graph & Ontology jobs at SAP",
      href: "https://jobs.sap.com/search/?q=%22knowledge+Graphs%22+Ontology+Ontologies", // TODO: confirm
    },
  },
];

const JobCard = ({ post }) => (
  <article className="iswc-place-card" id={`job-${post.id}`}>
    {/* Logo is optional: a posting without one simply starts with the name. */}
    {post.logo && (
      <div className="iswc-job-card__logo">
        <img src={post.logo} alt={`${post.company} logo`} loading="lazy" />
      </div>
    )}

    <div className="iswc-place-card__body">
      <h3 className="iswc-place-card__name">{post.company}</h3>

      {post.description.map((paragraph) => (
        <p className="iswc-place-card__text" key={paragraph.slice(0, 40)}>
          {paragraph}
        </p>
      ))}

      {post.link && (
        <p className="iswc-place-card__text">
          <ExternalLink href={post.link.href}>{post.link.label}</ExternalLink>
        </p>
      )}
    </div>
  </article>
);

export const JobFair = () => {
  return (
    <BaseContainer>
      <Header>ISWC 2026 Job Fair</Header>
      <p className="iswc-subtitle">
        Career opportunities in knowledge graphs, ontologies and semantic AI
        from our sponsors.
      </p>

      <p>
        As part of their sponsorship packages, ISWC 2026 sponsors share job
        openings with the Semantic Web community. Whether you are a student
        approaching graduation, an early-career researcher or an experienced
        practitioner, take a look at the positions below and get in touch with
        the companies directly, or meet their representatives at the
        conference.
      </p>

      <UnderlineHeader>Open Positions</UnderlineHeader>

      <div className="iswc-place-grid">
        {jobPosts.map((post) => (
          <JobCard post={post} key={post.id} />
        ))}
      </div>

      <div className="iswc-callout">
        More job postings may be added as sponsors send them in, so check back
        during the conference. Applications are handled by each company.
      </div>
    </BaseContainer>
  );
};

export default JobFair;