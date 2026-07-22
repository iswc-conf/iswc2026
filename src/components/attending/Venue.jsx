import React from "react";
import Page from "../general/Page";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import SubHeader from "../general/SubHeader";
import ExternalLink from "../general/ExternalLink";
import Accent from "../general/Accent";

import VenueImage from "../../assets/promotional/nicolaus.png";
import TransImage from "../../assets/promotional/trans_map.png";
import HotelImage from "../../assets/promotional/hotels.png";

import {
  AIRPORT,
  VENUE,
  airportTransfers,
  busesToVenue,
  cityTransport,
  hotels,
  venueTransfers,
} from "../../data/venue";

const BARI_CENTRALE = "https://maps.app.goo.gl/MHtRHa3o888gmUES8";

/** Small wrapper so every table on this page scrolls the same way on mobile. */
const InfoTable = ({ caption, columns, children }) => (
  <div className="iswc-table-scroll">
    <table className="iswc-info-table">
      {caption && <caption className="iswc-info-table__caption">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((column) => (
            <th scope="col" key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

const Stars = ({ count }) => (
  <span aria-label={`${count} star`}>{"★".repeat(count)}</span>
);

export const VenueAndAccomodation = () => (
  <Page>
    <Header>Venue and Accommodation</Header>

    {/* ---------------------------------------------------------------- Venue */}
    <UnderlineHeader>Venue</UnderlineHeader>

    <section className="iswc-media-row">
      <img
        src={VenueImage}
        alt="The Nicolaus Hotel, the ISWC 2026 venue"
        className="iswc-media-row__image"
      />

      <div className="iswc-media-row__text">
        <p>
          The conference will take place at the{" "}
          <ExternalLink href={VENUE.website}>{VENUE.name}</ExternalLink>, one of the
          largest hotels and conference centres in Bari.
        </p>

        <ul>
          {VENUE.facilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="mb-1">For guests staying at the hotel:</p>
        <ul>
          {VENUE.guestFacilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* ------------------------------------------------------ Getting to Bari */}
    <UnderlineHeader>Getting to Bari</UnderlineHeader>

    <SubHeader>By air</SubHeader>

    <p>
      <Accent>{AIRPORT.name}</Accent> is the main airport in Puglia, 9 km north-west
      of the centre of Bari. Bari is connected to major national and international
      destinations, with more than 100 daily routes served by over 20 airlines,
      including low-cost carriers. See the{" "}
      <ExternalLink href={AIRPORT.website}>airport website</ExternalLink> for current
      information, and{" "}
      <ExternalLink href={AIRPORT.transfersPage}>
        travelling to and from the airport
      </ExternalLink>{" "}
      for bus, taxi, train and car hire options.
    </p>

    <InfoTable caption="Airport to the city centre" columns={["Transfer", "Time", "Price"]}>
      {airportTransfers.map((option) => (
        <tr key={option.mode}>
          <td>{option.mode}</td>
          <td>{option.time}</td>
          <td>{option.price}</td>
        </tr>
      ))}
    </InfoTable>

    <figure className="iswc-figure">
      <img
        src={TransImage}
        alt="Map of national and international flight routes serving Bari"
      />
      <figcaption className="iswc-figure__caption">
        Direct flight connections to Bari.
      </figcaption>
    </figure>

    <SubHeader>By train</SubHeader>

    <p>
      Bari is served by <Accent>Trenitalia</Accent>, the national rail operator,
      which also connects Italy with other European countries. The main stop is{" "}
      <ExternalLink href={BARI_CENTRALE}>Bari Centrale</ExternalLink>, a central
      connection point for the rest of the city.
    </p>

    <SubHeader>Getting around the city</SubHeader>

    <InfoTable columns={["Transport", "Tickets"]}>
      {cityTransport.map((option) => (
        <tr key={option.mode}>
          <td>{option.mode}</td>
          <td>
            {option.tickets}{" "}
            <ExternalLink href={option.link.href}>{option.link.label}</ExternalLink>
          </td>
        </tr>
      ))}
    </InfoTable>

    {/* ----------------------------------------------- Getting to the venue */}
    <UnderlineHeader>Getting to the Venue</UnderlineHeader>

    <p>
      From Bari Centrale railway station the venue is roughly 20–25 minutes by
      public transport, or about a 40 minute walk. Further detail is available on
      the <ExternalLink href={VENUE.website}>venue&rsquo;s website</ExternalLink>.
    </p>

    <InfoTable caption="Bus lines from Bari Centrale" columns={["Bus line", "Stop"]}>
      {busesToVenue.map((bus) => (
        <tr key={bus.line}>
          <td>{bus.line}</td>
          <td>{bus.stop}</td>
        </tr>
      ))}
    </InfoTable>

    <InfoTable caption="Other options" columns={["Transport", "Details"]}>
      {venueTransfers.map((option) => (
        <tr key={option.mode}>
          <td>{option.mode}</td>
          <td>{option.description}</td>
        </tr>
      ))}
    </InfoTable>

    {/* -------------------------------------------------------- Accommodation */}
    <UnderlineHeader>Accommodation</UnderlineHeader>

    <p>
      The conference venue, <Accent>The Nicolaus Hotel</Accent>, has 174 rooms for
      attendees. Other options within walking distance include Hi Hotel (88 rooms),
      Hotel Rondò (62 rooms) and Villa Romanazzi Carducci (123 rooms), alongside a
      wide selection of B&amp;Bs and three-star hotels. The median hotel price in
      Bari is around €80, based on 251 prices collected in 2024.
    </p>

    <figure className="iswc-figure">
      <img src={HotelImage} alt="Map of hotels near the ISWC 2026 venue in Bari" />
      <figcaption className="iswc-figure__caption">
        Hotels near the venue and in the city centre.
      </figcaption>
    </figure>

    <SubHeader>Hotels with a conference rate</SubHeader>

    <p className="iswc-callout">
      The rates below apply <b>only</b> when booking through the conference
      registration system, during or after registering for the conference. Please
      book in good time.
    </p>

    <InfoTable
      columns={["Hotel", "Category", "Location", "Distance from venue", "Rooms"]}
    >
      {hotels.map((hotel) => (
        <tr key={hotel.name}>
          <td>
            <ExternalLink href={hotel.website}>{hotel.name}</ExternalLink>
          </td>
          <td>
            <Stars count={hotel.stars} />
          </td>
          <td>{hotel.location}</td>
          <td>{hotel.distance}</td>
          <td>{hotel.rooms}</td>
        </tr>
      ))}
    </InfoTable>
  </Page>
);

export default VenueAndAccomodation;
