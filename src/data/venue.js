/**
 * Venue, travel and accommodation details for ISWC 2026.
 *
 * Kept as data so the tables on the Venue and Accommodation page stay
 * consistent and can be corrected in one place — several of these figures
 * (fares, distances, room counts) will need updating closer to the conference.
 */

export const VENUE = {
  name: "The Nicolaus Hotel",
  website: "https://www.thenicolaushotel.com/",
  facilities: [
    "4-star hotel and conference centre",
    "15 modular meeting rooms",
    "Wi-Fi in rooms and common areas",
    "5 different dining locations",
  ],
  guestFacilities: ["Wellness area", "Free bike sharing", "174 bedrooms"],
};

export const AIRPORT = {
  name: 'Bari Palese "Karol Wojtyła" International Airport (BRI)',
  description:
    "The main airport in Puglia, 9 km north-west of the centre of Bari.",
  website: "https://bari.airports.aeroportidipuglia.it/en/",
  transfersPage:
    "https://bari.airports.aeroportidipuglia.it/en/da-e-per-gli-aeroporti/type/bus/",
};

/** Airport to city centre. */
export const airportTransfers = [
  { mode: "Train", time: "20 min", price: "€5.40" },
  { mode: "Shuttle service", time: "30 min", price: "€5.00" },
  { mode: "Bus no. 16", time: "50 min", price: "€1.20" },
  { mode: "Taxi or car", time: "25 min", price: "€25.00" },
];

/** Getting around the city. */
export const cityTransport = [
  {
    mode: "Train (Trenitalia)",
    tickets: "Automatic machines, local vendors, or the Trenitalia website.",
    link: { href: "https://www.trenitalia.com/en.html", label: "Trenitalia" },
  },
  {
    mode: "Bus (AMTAB)",
    tickets:
      "Local vendors, card payment on board, and SMS payment. Full details on the AMTAB website.",
    link: {
      href: "https://www.amtab.it/it/9-uncategorised/1038-biglietti",
      label: "AMTAB",
    },
  },
];

/** Bus lines from Bari Centrale to the venue. */
export const busesToVenue = [
  { line: "AMTAB line 6", stop: "Via Matarrese" },
  { line: "AMTAB line 10", stop: "Via Matarrese" },
  { line: "AMTAB line D", stop: "Via Camillo Rosalba" },
];

/** Other ways to reach the venue. */
export const venueTransfers = [
  {
    mode: "Nicolaus shuttle",
    description:
      "Free shuttle to and from Bari Airport, subject to availability at scheduled times. Book at least 24 hours in advance.",
  },
  {
    mode: "Taxi",
    description:
      "Flat rates: about €10 from the central railway station, about €30 from the airport.",
  },
  {
    mode: "By car",
    description:
      "SS16 BIS towards Brindisi, exit 11 “Poggiofranco” on the Bari bypass, then follow signs for “The Nicolaus Hotel”.",
  },
];

/**
 * Hotels with a negotiated conference rate.
 *
 * The rate only applies when booking through the conference registration
 * system — see the note on the page.
 */
export const hotels = [
  {
    name: "The Nicolaus Hotel",
    stars: 4,
    location: "Conference venue",
    distance: "—",
    rooms: 150,
    website: "https://www.thenicolaushotel.com/",
  },
  {
    name: "Hi Hotel",
    stars: 4,
    location: "10 min walk",
    distance: "950 m",
    rooms: 50,
    website: "https://www.hihotelbari.com/",
  },
  {
    name: "Hotel Excelsior",
    stars: 4,
    location: "City centre",
    distance: "2.5 km",
    rooms: 20,
    website: "https://excelsiorbari.it/",
  },
  {
    name: "Leon D’Oro",
    stars: 4,
    location: "City centre",
    distance: "2.9 km",
    rooms: 25,
    website: "https://leonbari.it/",
  },
  {
    name: "Adria Hotel",
    stars: 3,
    location: "City centre",
    distance: "3.2 km",
    rooms: 5,
    website: "https://www.adriahotelbari.com",
  },
  {
    name: "Mövenpick Hotel",
    stars: 4,
    location: "City centre",
    distance: "3.7 km",
    rooms: 40,
    website: "https://movenpickhotelbari.it/",
  },
  {
    name: "Hotel Victor",
    stars: 4,
    location: "City centre",
    distance: "3.9 km",
    rooms: 30,
    website: "https://www.victorhotelbari.it/",
  },
  {
    name: "Hotel Boston",
    stars: 4,
    location: "City centre",
    distance: "4.3 km",
    rooms: 15,
    website: "https://www.bostonbari.it/",
  },
];
