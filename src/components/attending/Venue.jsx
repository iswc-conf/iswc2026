import React from "react";
import "./attending.css";
import TransImage from "../../assets/promotional/trans_map.png";
import HotelImage from "../../assets/promotional/hotels.png";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import VenueImage from "../../assets/promotional/nicolaus.png";
import ExternalLink from "../general/ExternalLink";
import DeclareSoon from "../general/declareSoon";
import Accent from "../general/Accent";
import { theme } from "../../theme";
import SubHeader from "../general/SubHeader";

export const VenueAndAccomodation = () => {
  return (
    <BaseContainer>
      <Header>Venue and Accommodations</Header>
      <DeclareSoon></DeclareSoon>
      <br></br>
      <UnderlineHeader>Venue</UnderlineHeader>
      <br></br>
      <section className="venue-container">
        <img
          src={VenueImage}
          alt="Under construction"
          className="venue-image"
        />
        <div className="venue-text">
          <p>
            The conference will take place at the{" "}
            <ExternalLink href="https://www.thenicolaushotel.com/">
              Nicolaus Hotel
            </ExternalLink>{" "}
            one of the most important hotels and conference centers in Bari.
          </p>
          <br />
          <ul className="ul-disc lg:text-lg">
            <li>4-star hotel and conference center</li>
            <li>15 modular meeting rooms</li>
            <li>Wi-Fi in rooms and common areas</li>
            <li>5 different dining locations</li>
          </ul>
          <p>And for guests:</p>
          <br />
          <ul className="ul-disc lg:text-lg">
            <li>Wellness area</li>
            <li>Free bike sharing</li>
            <li>174 bedrooms</li>
          </ul>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <UnderlineHeader>
        International Connections & Transpostation
      </UnderlineHeader>
      <Accent>Bari Palese "Karol Wojtyła"</Accent> International Airport (BRI),
      the main airport in Puglia, situated 9km northwest fo the center of Bari.{" "}
      <ExternalLink href="https://bari.airports.aeroportidipuglia.it/en/">
        Airport Website
      </ExternalLink>
      . On here you can find all the updated infomation on how to go from the
      Airport to Bari and back{" "}
      <ExternalLink href="https://bari.airports.aeroportidipuglia.it/en/da-e-per-gli-aeroporti/type/bus/">
        {" "}
        From and To the Bari Airports
      </ExternalLink>
      , with either Bus, Taxi, Trains or Rental cars. This table will provide a
      brief overview:
      <br></br>
      <br></br>
      <center>
        <table className="custom-table">
          <thead style={{ backgroundColor: theme.colors.secondary }}>
            <tr>
              <th>Airport Transfer</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🚆Train</td>
              <td>20 mins</td>
              <td>5,40 EUR</td>
            </tr>
            <tr>
              <td>🚐 Shuttle Service</td>
              <td>30 mins</td>
              <td>5,00 EUR</td>
            </tr>
            <tr>
              <td>🚌 Bus n.16</td>
              <td>50 mins</td>
              <td>1,20 EUR</td>
            </tr>

            <tr>
              <td>🚕 Taxi or Car</td>
              <td>25 mins</td>
              <td>25 EUR</td>
            </tr>
          </tbody>
        </table>
      </center>
      <br></br>
      Bari is connected to the most important national and international
      destinations, as well as major European hubs. More than 100 daily routes
      are served by over 20 airlines, including low-cost carriers.
      <center>
        <img
          cl
          src={TransImage}
          alt="Under construction"
          className="venue-image mt-10"
        />
      </center>
      <br></br>
      <br></br>
      City is served by{" "}
      <Accent>Trenitalia (National Train Tranpostation)</Accent> connecting also
      Italy with other European Contries. The main train stop is{" "}
      <ExternalLink href="https://maps.app.goo.gl/MHtRHa3o888gmUES8">
        "Stazione Centrale di Bari" (Google Maps Link)
      </ExternalLink>
      , providing a central connection point to all other destinations in the
      city. Inside the city two main tranportation methods are available:
      <br></br>
      <br></br>
      <center>
        <table className="custom-table">
          <thead style={{ backgroundColor: theme.colors.secondary }}>
            <tr>
              <th>Transportation</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🚆Train (Trenitalia)</td>
              <td>
                Automatic machines, Local Vendor or{" "}
                <ExternalLink href="https://www.trenitalia.com/en.html">
                  Trenitalia Website
                </ExternalLink>
              </td>
            </tr>

            <tr>
              <td>🚌 Bus (AMTAB)</td>
              <td>
                Local vendors, card payments directly on the bus, and SMS
                payments are available. For more information, visit the{" "}
                <ExternalLink href="https://www.amtab.it/it/9-uncategorised/1038-biglietti">
                  AMTAB Website
                </ExternalLink>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      <br></br>
To reach the <Accent>Venue Location</Accent> from the{" "}
<Accent>City of Bari</Accent>, you can use the following methods of
transportation (more detailed information is available on the{" "}
<ExternalLink href="https://www.thenicolaushotel.com/location">
  Venue Official Website
</ExternalLink>). All options take around 20–25 minutes. Alternatively, the venue can be reached on
foot in approximately 40 minutes (2.7 km):<br></br>

      <center>
        <table className="custom-table">
          <thead style={{ backgroundColor: theme.colors.secondary }}>
            <tr>
              <th>Bus Number</th>
              <th>Stop </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AMTAB Line N 6</td>
              <td>Via Matarrese</td>
            </tr>

            <tr>
              <td>AMTAB Line N 10</td>
              <td>Via Matarrese</td>
            </tr>

            <tr>
              <td>AMTAB Line D</td>
              <td>Via Camillo Rosalba</td>
            </tr>
          </tbody>
        </table>
      </center>
      <br></br>
      Alternative tranporation methods are listed below:
      <br></br>
      <br></br>
      <center>
        <table className="custom-table">
          <thead style={{ backgroundColor: theme.colors.secondary }}>
            <tr>
              <th>Tranportation</th>
              <th>Description </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free Nicholaus Shuttle Service </td>
              <td>
                Free shuttle service from and to Bari Airport by Nicolaus, upon
                availability at scheduled times, to be booked at least 24 hours
                in advance
              </td>
            </tr>

            <tr>
              <td>Taxi </td>
              <td>
                Flat rates a) From the central railway station to the hotel:
                average price € 10,00; b) From the airport to the hotel: average
                price € 30,00
              </td>
            </tr>

            <tr>
              <td>By Car</td>
              <td>
                SS16 BIS to Brindisi, Exit 11 “Poggiofranco” of the bypass of
                Bari, then follow the road signs “THE NICOLAUS HOTEL”{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      <br></br>
      <br />
      <UnderlineHeader>Hotels</UnderlineHeader>
The <Accent>Conference Venue "The Nicolaus Hotel"</Accent> offers 174
rooms for attendees. Alternative accommodations within walking distance from the venue include:
Hi Hotel (88 rooms), Hotel Rondo (62 rooms), Villa Romanazzi Carducci (123 rooms), 
and a wide selection of B&Bs and 3-star hotels. The median hotel price is
€80.00 (based on data from 251 hotel prices collected in 2024).

      <center>
        <img
          cl
          src={HotelImage}
          alt="Under construction"
          className="venue-image mt-10"
        />
      </center>
    </BaseContainer>
  );
};
