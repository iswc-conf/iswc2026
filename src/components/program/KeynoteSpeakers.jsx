import React, { useRef } from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import ExternalLink from "../general/ExternalLink";
import { keynotes } from "../../data/keynotes";

/**
 * Jump links to each speaker. With four long biographies on one page, this
 * saves scrolling to find a given talk.
 *
 * These are buttons that scroll, not anchors. The site runs on HashRouter, so
 * the URL hash is the route — an `href="#speaker"` would overwrite
 * `#/program/keynotespeakers` and navigate away instead of scrolling.
 */
const SpeakerIndex = ({ speakers, onSelect }) => (
  <nav className="iswc-keynote-index" aria-label="Jump to a keynote speaker">
    {speakers.map((speaker) => (
      <button
        type="button"
        className="iswc-keynote-index__item"
        key={speaker.id}
        onClick={() => onSelect(speaker.id)}
      >
        <img src={speaker.photo} alt="" loading="lazy" />
        <span>{speaker.name}</span>
      </button>
    ))}
  </nav>
);

const Keynote = ({ speaker, innerRef }) => (
  <article className="iswc-keynote" id={speaker.id} ref={innerRef}>
    <p className="iswc-keynote__label">{speaker.label}</p>

    <div className="iswc-keynote__head">
      <img
        className="iswc-keynote__portrait"
        src={speaker.photo}
        alt={speaker.name}
        loading="lazy"
      />

      <div className="iswc-keynote__identity">
        <h2 className="iswc-keynote__name">{speaker.name}</h2>
        <p className="iswc-keynote__affiliation">{speaker.affiliation}</p>

        {speaker.link && (
          <p className="iswc-keynote__link">
            <ExternalLink href={speaker.link.href}>{speaker.link.label}</ExternalLink>
          </p>
        )}
      </div>
    </div>

    {speaker.abstract && (
      <section className="iswc-keynote__section">
        <h3 className="iswc-keynote__section-title">About the talk</h3>
        {speaker.abstract.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </section>
    )}

    <section className="iswc-keynote__section">
      <h3 className="iswc-keynote__section-title">About {speaker.name}</h3>
      {speaker.bio.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </section>
  </article>
);

export const KeynoteSpeakers = () => {
  const sections = useRef({});

  const scrollToSpeaker = (id) => {
    sections.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Page>
      <Header>Keynote Speakers</Header>

      <SpeakerIndex speakers={keynotes} onSelect={scrollToSpeaker} />

      {keynotes.map((speaker) => (
        <Keynote
          speaker={speaker}
          key={speaker.id}
          innerRef={(node) => {
            sections.current[speaker.id] = node;
          }}
        />
      ))}
    </Page>
  );
};

export default KeynoteSpeakers;
