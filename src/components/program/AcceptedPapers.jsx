import React, { useRef } from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import PaperTable from "../general/PaperTable";

import { doctoralConsortium } from "./data/accepted/docoralConsortium";
import { researchTrack } from "./data/accepted/researchTrack";
import { resourceTrack } from "./data/accepted/resourceTrack";
import { inuseTrack } from "./data/accepted/inuseTrack";
import { industryTrack } from "./data/accepted/industryTrack";
import { posters } from "./data/accepted/posters";
import { demos } from "./data/accepted/demos";
import LNCS_LOGO from "../../assets/logos/springer_lncs.png";
import SubHeader from "../general/SubHeader";

const PREVIOUS_PROCEEDINGS = "https://link.springer.com/conference/semweb";

/**
 * Accepted papers, one section per track.
 *
 * A track is `available` once its list has been published; until then the
 * section shows a short "to be announced" note. Set `available: true` when the
 * data is ready — the jump index and the sections both read from this list.
 */
const TRACKS = [
  { id: "doctoral-consortium", label: "Doctoral Consortium", data: doctoralConsortium, available: true },
  { id: "research", label: "Research Track", data: researchTrack, available: false },
  { id: "resource", label: "Resource Track", data: resourceTrack, available: false },
  { id: "in-use", label: "In Use Track", data: inuseTrack, available: false },
  { id: "industry", label: "Industry Track", data: industryTrack, available: false },
  { id: "posters", label: "Posters", data: posters, available: false },
  { id: "demos", label: "Demos", data: demos, available: false },
];

/**
 * Jump links to each track. Buttons that scroll, not anchors: the site runs on
 * HashRouter, so an `href="#research"` would overwrite the route hash and
 * navigate away instead of scrolling.
 */
const TrackIndex = ({ tracks, onSelect }) => (
  <nav className="iswc-track-index" aria-label="Jump to a track">
    {tracks.map((track) => (
      <button
        type="button"
        className="iswc-track-index__item"
        key={track.id}
        onClick={() => onSelect(track.id)}
      >
        {track.label}
        {track.available ? (
          <span className="iswc-track-index__count">{track.data.length}</span>
        ) : (
          <span className="iswc-track-index__count iswc-track-index__count--tba">TBA</span>
        )}
      </button>
    ))}
  </nav>
);

export const AcceptedPapers = () => {
  const sections = useRef({});

  const scrollToTrack = (id) => {
    sections.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BaseContainer width="wide">
      <Header>Accepted Papers</Header>

      

      <section className="iswc-proceedings">
        
        <img
          className="iswc-proceedings__logo"
          src={LNCS_LOGO}
          alt="Springer Lecture Notes in Computer Science"
          loading="lazy"
        />

        <div className="iswc-proceedings__text">
       
          <p>
            The proceedings of ISWC 2026 will be published by Springer in the{" "}
            <b>Lecture Notes in Computer Science (LNCS)</b> series.
          </p>
          <p className="mb-0">
            Proceedings from previous editions of ISWC are available on{" "}
            <ExternalLink href={PREVIOUS_PROCEEDINGS}>SpringerLink</ExternalLink>.
          </p>
        </div>
      </section>

      <TrackIndex tracks={TRACKS} onSelect={scrollToTrack} />

      {TRACKS.map((track) => (
        <section
          key={track.id}
          id={track.id}
          className="iswc-track"
          ref={(node) => {
            sections.current[track.id] = node;
          }}
        >
          <UnderlineHeader>{track.label}</UnderlineHeader>

          {track.available ? (
            <PaperTable data={track.data} />
          ) : (
            <p className="iswc-track__tba">
              The accepted {track.label.toLowerCase()} papers will be announced here soon.
            </p>
          )}
        </section>
      ))}
    </BaseContainer>
  );
};

export default AcceptedPapers;
