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

/** Continuously scrolling sponsor strip along the bottom of the hero. */
const SponsorMarquee = ({ sponsors }) => {
  // The track is duplicated so the -50% keyframe loops seamlessly.
  const track = [...sponsors, ...sponsors];

  return (
    <div className="iswc-marquee">
      <p className="iswc-marquee__label">Sponsors</p>
      <div className="iswc-marquee__track">
        {track.map((sponsor, index) => (
          <div className="iswc-marquee__item" key={`${sponsor.name}-${index}`}>
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              // The first copy carries the accessible name; the duplicate is
              // decorative, so screen readers don't announce every logo twice.
              aria-hidden={index >= sponsors.length}
            />
          </div>
        ))}
      </div>
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
