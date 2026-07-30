import React from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";
import Accent from "../general/Accent";
import VenueImage from "../../assets/promotional/nicolaus.png";
import {
  SCENES,
  TOURISM_LINKS,
  cathedrals,
  commonsImage,
  dayTrips,
  photoCredits,
} from "../../data/tourism";

/**
 * A photo, or a labelled placeholder while none is supplied. Pass a Commons
 * scene from SCENES to show a photo.
 *
 * @param {'wide'|'tall'|'row'} shape  Aspect ratio of the slot.
 */
const Photo = ({ scene, alt, caption, width = 1400, shape = "wide" }) => (
  <figure className={`iswc-figure iswc-photo iswc-photo--${shape}`}>
    {scene ? (
      <img src={commonsImage(scene.file, width)} alt={scene.alt} loading="lazy" />
    ) : (
      <div className="iswc-photo__slot" role="img" aria-label={`Photo placeholder: ${alt}`}>
        <span>{alt}</span>
      </div>
    )}
    {caption && <figcaption className="iswc-figure__caption">{caption}</figcaption>}
  </figure>
);

/** Grid of destination cards (day trips, cathedral towns). */
const PlaceGrid = ({ places }) => (
  <div className="iswc-place-grid">
    {places.map((place) => (
      <article className="iswc-place-card" key={place.name}>
        {place.image ? (
          <img className="iswc-place-card__image" src={place.image} alt={place.name} loading="lazy" />
        ) : (
          <div
            className="iswc-place-card__image iswc-place-card__image--empty"
            role="img"
            aria-label={`Photo placeholder: ${place.name}`}
          >
            <span>{place.name}</span>
          </div>
        )}
        <div className="iswc-place-card__body">
          <h3 className="iswc-place-card__name">{place.name}</h3>
          <p className="iswc-place-card__text">{place.text}</p>
        </div>
      </article>
    ))}
  </div>
);

export const Tourism = () => (
  <Page width="wide">
    <Header>Tourism</Header>

    <Photo
      scene={SCENES.bari}
      shape="wide"
      caption="Bari, on the Adriatic coast of southern Italy."
    />

    <p className="iswc-page__lead">
      Bari, the capital of Apulia, sits on the Adriatic coast of southern Italy: a city
      of good food, sea and centuries of history. Increasingly appreciated around the
      world, it rewards even a single day on foot, immersing you in an atmosphere that
      recalls ancient times.
    </p>


    {/* --------------------------------------------------------- The city */}
    <UnderlineHeader>The City of Bari</UnderlineHeader>

    <p>
      As for the city, Bari is the capital city of the Metropolitan City of Bari and of
      the Apulia region, on the Adriatic Sea, southern Italy. It is the second most
      important economic center of mainland Southern Italy after Naples. It is a port,
      commercial and university city as well as the city of Saint Nicholas, characterized
      by long history and strong traditions. Among the main suggested places to visit
      there are: the cathedral, the basilica of Saint Nicolas, the Swabian Castle, the
      old town and the thousand-year history of Bari in the underground of the old city
      jointly with a lively and elegant shopping area having with Via Sparano as the most
      characteristic streets in the center of Bari.
    </p>

    <SubHeader>The San Nicola district</SubHeader>

    <section className="iswc-media-row iswc-media-row--reverse">
      <div className="iswc-media-row__image">
        <Photo scene={SCENES.sanNicola} shape="row" />
      </div>
      <div className="iswc-media-row__text">
        <p>
          The heart of Bari is the district of San Nicola, old Bari for the people of
          Bari, which extends between the two ports, the old one and the new one. It
          dates back to the Middle Ages and is dominated by the Norman Swabian castle,
          one of the symbols of Puglia and among the most important Romanesque style
          monuments in Italy. Right in front of the castle entrance, there is one of the
          most incredible places in Bari, its most authentic alley. A place where past
          and present mix to create a timeless atmosphere.
        </p>
        <p className="mb-0">
          After passing the Arco Basso, in fact, you enter the street of the same name,
          also called, and not by chance, Via delle Orecchiette, where you come across
          clothes hanging out, tables displaying fresh pasta and groups of ladies working
          it chatting with each other, as if time had never passed.
        </p>
      </div>
    </section>

    <SubHeader>Cathedral and seafront</SubHeader>

    <p>
      Among the most important historical buildings there is the Cathedral of San Nicola,
      an extraordinary prototype of Apulian Romanesque. Inside the Crypt, the relics of
      the city&rsquo;s patron saint, Saint Nicholas of Myra, are kept. Evocative and among
      the most beautiful in Italy, there is also the Nazario Sauro seafront, where you can
      admire a series of late Liberty style buildings and, at the same time, breathe in
      the atmosphere of Bari, among green parks and an incomparable panorama of the
      Adriatic. Bari is famous also because is the only city with 4 theatres.
    </p>

    <Photo
      scene={SCENES.seafront}
      shape="wide"
      caption="The Nazario Sauro seafront in Bari."
    />

    <p>
      Visiting Bari means being overwhelmed by its genuine and true essence, made up of
      good food, sea and historical monuments. More details can be found at{" "}
      <ExternalLink href={TOURISM_LINKS.tenThings}>Bari Experience</ExternalLink>,
      offering a detailed view of the city and information on the city tours.
    </p>

    {/* ------------------------------------------------------------- Food */}
    <UnderlineHeader>Food and Cuisine</UnderlineHeader>

    <section className="iswc-media-row">
      <div className="iswc-media-row__image">
        <Photo scene={SCENES.food} shape="row" />
      </div>
      <div className="iswc-media-row__text">
        <p className="mb-0">
          Bari is also well known for the wide offer of typical food, currently famous
          worldwide. Some examples: mozzarella, burrata, stracciatella, panzerotti,
          orecchiette pasta with turnip tops, bombette meat, brasciola meat, raw seafood
          and many others (additional details can be found at{" "}
          <ExternalLink href={TOURISM_LINKS.whereToEat}>Bari Experience</ExternalLink>,
          at{" "}
          <ExternalLink href={TOURISM_LINKS.freeWalkingTour}>
            Free Walking Tour Bari
          </ExternalLink>{" "}
          and the slow active tour reference guide{" "}
          <ExternalLink href={TOURISM_LINKS.slowActiveTours}>
            Slow Active Tours
          </ExternalLink>
          ).
        </p>
      </div>
    </section>

    {/* --------------------------------------------------------- Day trips */}
    <UnderlineHeader>Around Bari: Day Trips</UnderlineHeader>

    <p>
      Bari is the capital of Apulia region, a natural dock in the center of the
      mediterranean sea with a historical vocation for transitions between east and west.
      It therefore offers the ideal place for networking between experts, researchers,
      engineers, public authorities and operators in the sector, beyond its natural and
      cultural attractions. Near Bari there are a lot of typical Apulia cities. From north
      to south this land is full of suggestive places and attractions that will leave you
      breathless with their beauty and uniqueness. Many cities and town can be visited
      just a few kilometers from Bari. Some examples in the south are: Polignano, Monopoli,
      Alberobello, Locorotondo and Cisternino with their particular infrastructure, while
      some examples in the north are Giovinazzo, Trani, Altamura, Castel del Monte. Some
      of these destinations are described in the following.
    </p>

    <PlaceGrid places={dayTrips} />

    {/* ------------------------------------------------------ Cathedrals */}
    <UnderlineHeader>Romanesque Cathedrals</UnderlineHeader>

    <p>
      Romanesque cathedrals worth visiting include Bitonto, Trani, Ruvo di Puglia and
      Castel del Monte.
    </p>

    <PlaceGrid places={cathedrals} />

    <p>
      Obviously, those listed are by no means the only ones worth mentioning, however they
      are an excellent starting point to give an idea of how many beautiful places can be
      visited in the surroundings of Bari and beyond. For an insight it is suggested to
      have a look at the link{" "}
      <ExternalLink href={TOURISM_LINKS.nearBari}>Bari Experience</ExternalLink>, while
      this link offers a brief description of Apulia region from Lonely Planet&rsquo;s{" "}
      <ExternalLink href={TOURISM_LINKS.lonelyPlanet}>guide to Puglia</ExternalLink>.
    </p>

    {/* --------------------------------------------------- The region */}
    <UnderlineHeader>The Apulia Region</UnderlineHeader>

    <p className="iswc-callout">
      Importantly, in 2023 Apulia had the following important recognition: considered for
      the second time the most beautiful region in the world, Puglia once again boasts the
      award of <b>"Best Value Travel Destination in the world"</b> recognized by National
      Geographic, and also reconfirmed by Lonely Planet and the New York Times.
    </p>

    <p>
      Apulia region also hosted the G7 on June 2024 with the Leaders of the seven member
      States, as well as the President of the European Council and the President of the
      European Commission representing the European union.
    </p>

    {/* ----------------------------------------------------- Photo credits */}
    <UnderlineHeader>Photo Credits</UnderlineHeader>

    <p>
      Photographs on this page are from{" "}
      <ExternalLink href="https://commons.wikimedia.org/">Wikimedia Commons</ExternalLink>{" "}
      and are used under their respective free licences. Each link below leads to the
      source file, where the author and licence are listed.
    </p>

    <ul className="iswc-credits">
      {photoCredits.map((credit) => (
        <li key={credit.file}>
          {credit.label}:{" "}
          <ExternalLink href={credit.source}>Wikimedia Commons</ExternalLink>
        </li>
      ))}
    </ul>
  </Page>
);

export default Tourism;
