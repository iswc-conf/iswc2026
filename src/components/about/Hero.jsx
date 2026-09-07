import React from "react";
import bgImage from "../../assets/logos/home_banner.jpeg";
import { allSponsors } from "../../data/sponsors";

const CONFERENCE = {
  title: "ISWC 2026",
  subtitle: "The 25th International Semantic Web Conference",
  dates: "25 – 29 October 2026",
  city: "Bari, Italy",
  venue: "The Nicolaus Hotel, Bari",
};

/** One scrolling row. `direction` is "left" (default) or "right". */
const MarqueeRow = ({ sponsors, direction = "left" }) => {
  // Duplicated so the -50% keyframe loops seamlessly.
  const track = [...sponsors, ...sponsors];

  return (
    <div className={`iswc-marquee__track iswc-marquee__track--${direction}`}>
      {track.map((sponsor, index) => (
        <div className="iswc-marquee__item" key={`${sponsor.name}-${index}`}>
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            loading="lazy"
            aria-hidden={index >= sponsors.length}
            style={
              sponsor.dark
                ? {
                    backgroundColor: "#1a1a1a",
                    padding: "8px 12px",
                    borderRadius: "6px",
                  }
                : undefined
            }
          />
        </div>
      ))}
    </div>
  );
};

const SponsorMarquee = ({ sponsors }) => {
  // Split the list so each row carries different logos.
  const mid = Math.ceil(sponsors.length / 2);
  const topRow = sponsors.slice(0, mid);
  const bottomRow = sponsors.slice(mid);

  return (
    <div className="iswc-marquee">
      <p className="iswc-marquee__label">Sponsors</p>
      <MarqueeRow sponsors={topRow} direction="left" />
      <MarqueeRow sponsors={bottomRow} direction="right" />
    </div>
  );
};

export const Hero = () => (
  <section className="iswc-hero">
    <div className="iswc-hero__media">
      <img src={bgImage} alt="" fetchpriority="high" />
    </div>

    <div className="iswc-hero__content">
      <h1 className="iswc-hero__title">{CONFERENCE.title}</h1>
      <p className="iswc-hero__subtitle">{CONFERENCE.subtitle}</p>
      <p className="iswc-hero__meta">{CONFERENCE.dates}</p>
      <p className="iswc-hero__meta">{CONFERENCE.city}</p>
      <p className="iswc-hero__meta">Venue: {CONFERENCE.venue}</p>
    </div>

    <SponsorMarquee sponsors={allSponsors} />
  </section>
);

export default Hero;
