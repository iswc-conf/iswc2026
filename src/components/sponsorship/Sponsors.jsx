import React from "react";

import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";

import { sponsorTiers } from "../../data/sponsors";

const SponsorCard = ({ name, logo, link, width = 300 }) => {
  const content = (
    <img
      src={logo}
      alt={`${name} Logo`}
      className="iswc-sponsor-logo"
      style={{ maxWidth: width }}
    />
  );

  return (
    <div className="iswc-sponsor-grid__item">
      <h3>{name}</h3>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export const Sponsors = () => (
  <BaseContainer>
    <Header>ISWC 2026 Sponsors</Header>

    {sponsorTiers.map((group) => (
      <div key={group.tier} className="iswc-sponsor-level">
        <h2
          className="iswc-sponsor-level__title"
          style={{ backgroundColor: group.color }}
        >
          {group.label}
        </h2>

        <div className="iswc-sponsor-grid">
          {group.sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
        </div>
      </div>
    ))}
  </BaseContainer>
);

export default Sponsors;
