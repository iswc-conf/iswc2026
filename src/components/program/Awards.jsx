import React from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";

// -----------------------------------------------------------------------------
// Sponsor logos
// -----------------------------------------------------------------------------
// Set a path to show the logo; leave null to show the sponsor's name instead.
const SPONSOR_LOGOS = {
  SWSA: null, // e.g. "/images/sponsors/swsa.png"
  Springer: null,
  "Journal of Web Semantics": null,
  ORKG: null,
};

// -----------------------------------------------------------------------------
// Award data
// -----------------------------------------------------------------------------
// Each winner:
//   work        - paper / demo / poster title (omit for person awards)
//   recipients  - authors or recipient, as a single display string
//   detail      - optional second line (affiliation, ...)
//   url         - optional link to the paper
//   mention     - optional ribbon, e.g. "Honourable mention"
// An award with an empty `winners` list shows "To be announced".
// -----------------------------------------------------------------------------
const AWARD_GROUPS = [
  {
    title: "SWSA Community Awards",
    awards: [
      {
        name: "SWSA Distinguished Dissertation Award",
        sponsors: ["SWSA"],
        winners: [{ recipients: "Tobias John" }],
      },
      {
        name: "SWSA Ten-Year Award",
        sponsors: ["SWSA"],
        winners: [
          {
            work: "RDF2Vec: RDF Graph Embeddings for Data Mining",
            recipients: "Petar Ristoski and Heiko Paulheim",
          },
        ],
      },
      {
        name: "SWSA Distinguished Service Award",
        sponsors: ["SWSA"],
        winners: [{ recipients: "Natasha Noy" }],
      },
      {
        name: "SWSA Early Career Award",
        sponsors: ["SWSA"],
        winners: [{ recipients: "Anastasia Dimou" }],
      },
    ],
  },
  {
    title: "Best Paper Awards",
    awards: [
      {
        name: "Best Research Paper",
        sponsors: ["SWSA", "Springer"],
        winners: [
          {
            work: "Tractable Query Answering under Epistemic Confidentiality Policies in Description Logic Ontologies",
            recipients: "Lorenzo Marconi, Daniela Rieti and Riccardo Rosati",
          },
        ],
      },
      {
        name: "Best Student Research Paper",
        sponsors: ["SWSA", "Journal of Web Semantics"],
        winners: [
          {
            work: "FITTER: Vocabulary-Agnostic Inference on Temporal Knowledge Graphs",
            recipients:
              "Jiaxin Pan, Mojtaba Nayyeri, Osama Mohammed, Daniel Hernández, Rongchuan Zhang, Cheng Cheng and Steffen Staab",
          },
        ],
      },
      {
        name: "Best Resource Paper",
        sponsors: ["SWSA"],
        winners: [
          {
            work: "Vibes Lore Core: the Aesthetics Knowledge Graph",
            recipients:
              "Silvia Cappa, Anna Sofia Lippolis, Anouk Flinkert, Ekaterina Krasnova, Shiho Nakamura, Andrea Giovanni Nuzzolese and Aldo Gangemi",
          },
        ],
      },
      {
        name: "Best In-Use Paper",
        sponsors: ["SWSA"],
        winners: [
          {
            work: "Evolving FedX: High-Performance SPARQL Federation in the Eclipse RDF4J Ecosystem",
            recipients: "Andreas Schwarte, Peter Haase and Katja Hose",
          },
        ],
      },
      {
        name: "ORKG Comparison Award",
        sponsors: ["SWSA", "ORKG"],
        winners: [],
      },
    ],
  },
  {
    title: "Posters & Demos",
    awards: [
      {
        name: "Best Demo",
        sponsors: ["SWSA"],
        winners: [
          {
            work: "AutoVKG: LLM-Driven Virtual Knowledge Graphs for Unified Access to Heterogeneous Data Sources",
            recipients: "Xander Poortvliet and Mel Chekol",
          },
        ],
      },
      {
        name: "Best Poster",
        sponsors: ["SWSA"],
        winners: [
          {
            work: "Reconstructing Wikidata Statement Lifecycles for Temporal Maintenance Analysis",
            recipients: "Nicolas Ferranti and Axel Polleres",
          },
        ],
      },
      {
        name: "Poster/Demo Audience Choice Award",
        sponsors: ["SWSA"],
        winners: [
          {
            work: "OOPS!+: Improving Ontology Pitfall Detection with Large Language Models",
            recipients:
              "Carlos Gaspar-Santiago, María Poveda-Villalón and Daniel Garijo",
          },
        ],
      },
    ],
  },
  {
    title: "Programme Committee Awards",
    awards: [
      {
        name: "Best Reviewer — Research Track",
        sponsors: ["SWSA"],
        winners: [
          { recipients: "Christophe Debruyne", detail: "Université de Liège" },
        ],
      },
      {
        name: "Best SPC Member — Research Track",
        sponsors: ["SWSA"],
        winners: [
          {
            recipients: "Maribel Acosta",
            detail: "Technical University of Munich",
          },
        ],
      },
      {
        name: "Best Reviewer — Resources Track",
        sponsors: ["SWSA"],
        winners: [
          { recipients: "Tabea Tietz", detail: "FIZ Karlsruhe" },
          { recipients: "David Corsar", detail: "Robert Gordon University" },
        ],
      },
      {
        name: "Best SPC Member — Resources Track",
        sponsors: ["SWSA"],
        winners: [
          { recipients: "Lionel Medini", detail: "CNRS" },
          { recipients: "Nathalie Aussenac-Gilles", detail: "IRIT CNRS" },
        ],
      },
      {
        name: "Best Reviewer — In-Use Track",
        sponsors: ["SWSA"],
        winners: [
          { recipients: "Booma Sowkarthiga Balasubramani" },
          { recipients: "Francisco Martin-Recuerda" },
        ],
      },
      {
        name: "Best SPC Member — In-Use Track",
        sponsors: ["SWSA"],
        winners: [
          { recipients: "Markus Krötzsch" },
          { recipients: "Jose Emilio Labra Gayo" },
        ],
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M17 4V2H7v2H3v3a4 4 0 0 0 4 4h.35A5 5 0 0 0 11 13.9V17H8v2h8v-2h-3v-3.1A5 5 0 0 0 16.65 11H17a4 4 0 0 0 4-4V4h-4ZM5 7V6h2v3a2 2 0 0 1-2-2Zm14 0a2 2 0 0 1-2 2V6h2v1ZM7 20h10v2H7z"
    />
  </svg>
);

const AwardWinner = ({ winner }) => {
  const { work, recipients, detail, url, mention } = winner;

  return (
    <div className="iswc-award__winner">
      {mention && <span className="iswc-award__mention">{mention}</span>}

      {work && (
        <p className="iswc-award__work">
          {url ? (
            <a
              className="iswc-external-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {work}
            </a>
          ) : (
            work
          )}
        </p>
      )}

      {recipients && (
        <p
          className={`iswc-award__recipients${
            work ? "" : " iswc-award__recipients--lead"
          }`}
        >
          {recipients}
        </p>
      )}
      {detail && <p className="iswc-award__detail">{detail}</p>}
    </div>
  );
};

const AwardSponsors = ({ sponsors }) => {
  if (!sponsors || sponsors.length === 0) return null;

  return (
    <footer className="iswc-award__sponsors">
      <span className="iswc-award__sponsors-label">Sponsored by</span>
      {sponsors.map((name) =>
        SPONSOR_LOGOS[name] ? (
          <img
            key={name}
            className="iswc-award__sponsor-logo"
            src={SPONSOR_LOGOS[name]}
            alt={name}
          />
        ) : (
          <span key={name} className="iswc-award__sponsor">
            {name}
          </span>
        )
      )}
    </footer>
  );
};

const AwardCard = ({ award }) => {
  const announced = award.winners && award.winners.length > 0;

  return (
    <article
      className={`iswc-award${announced ? " iswc-award--announced" : ""}`}
    >
      <header className="iswc-award__head">
        <span className="iswc-award__icon">
          <TrophyIcon />
        </span>
        <h3 className="iswc-award__name">{award.name}</h3>
      </header>

      <div className="iswc-award__body">
        {announced ? (
          award.winners.map((winner, i) => (
            <AwardWinner key={winner.work || winner.recipients || i} winner={winner} />
          ))
        ) : (
          <p className="iswc-award__tba">To be announced</p>
        )}
      </div>

      <AwardSponsors sponsors={award.sponsors} />
    </article>
  );
};

export const Awards = () => {
  return (
    <BaseContainer>
      <Header>ISWC 2026 Awards</Header>

      {AWARD_GROUPS.map((group) => (
        <section key={group.title} className="mb-5">
          <SubHeader>{group.title}</SubHeader>
          <div className="iswc-awards">
            {group.awards.map((award) => (
              <AwardCard key={award.name} award={award} />
            ))}
          </div>
        </section>
      ))}
    </BaseContainer>
  );
};

export default Awards;