/**
 * Content for the Tourism page.
 *
 * Photographs are pulled from Wikimedia Commons, which only hosts freely
 * licensed images (public domain or a free Creative Commons licence). They are
 * referenced through Commons' `Special:FilePath` endpoint, a stable redirect
 * that also serves a resized copy via the `width` parameter, so the originals
 * (often several MB) are never sent to visitors.
 *
 * Each image records its Commons source page; the page lists the author and the
 * exact licence, and the Tourism page links to it in a photo-credits section.
 *
 * To swap in a self-hosted photo, import it and set `src` (or a place's
 * `image`) to the import instead of `commonsImage(...)`.
 */

/** Build a resized image URL for a Wikimedia Commons file. */
export const commonsImage = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

/** The Commons file page (author + licence live here). */
export const commonsPage = (file) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`;

/** Named scene photos used directly on the page. */
export const SCENES = {
  bari: {
    file: "Bari - Panorama dal lungomare.jpg",
    alt: "Panorama of Bari from the seafront",
  },
  sanNicola: {
    file: "Bari - Basilica di San Nicola.jpg",
    alt: "The Basilica of Saint Nicholas in old Bari",
  },
  seafront: {
    file: "Lungomare Nazario Sauro - Bari.jpg",
    alt: "The Nazario Sauro seafront in Bari",
  },
  food: {
    file: "Orecchiette con cima di rapa.jpg",
    alt: "Orecchiette pasta with turnip tops, a Bari speciality",
  },
};

export const TOURISM_LINKS = {
  tenThings:
    "https://www.bariexperience.com/en/see-bari-days/10-things-to-see-bari-puglia-places-places-to-visit/",
  whereToEat:
    "https://www.bariexperience.com/en/visit-bari-puglia/where-what-to-eat-in-old-bari-typical-apulian-bari-dishes/",
  freeWalkingTour:
    "https://www.freewalkingtourbari.it/en/out-and-about/what-to-eat-in-bari/",
  slowActiveTours: "https://www.slowactivetours.com/en/",
  nearBari:
    "https://www.bariexperience.com/en/visit-places-in-puglia/see-visit-near-bari-and-surrounding-province-visit-puglia-holidays/",
  lonelyPlanet: "https://www.lonelyplanet.com/articles/guide-to-puglia",
};

/** Day trips from Bari, roughly north-to-south through the Itria Valley. */
export const dayTrips = [
  {
    name: "Polignano a Mare",
    file: "Polignano a mare -Lama Monachile.jpg",
    text: "Domenico Modugno's hometown and a true corner of poetry, standing on a spur overlooking the sea. It is home to natural caves carved by water erosion, with pure white houses on the cliff and a historic centre of narrow stone-paved streets, staircases and terraces with spectacular views.",
  },
  {
    name: "Alberobello",
    file: "Alberobello Trulli.jpg",
    text: "The city of Trulli, a UNESCO World Heritage Site. These round, dome-topped dry-stone houses date back to the 1400s. The Rione Monti district holds over 1,000 trulli among artisan shops and taverns, while the Aia Piccola district gathers 400 more.",
  },
  {
    name: "Ostuni",
    file: "Ostuni in Puglia.jpg",
    text: "The 'White City', its houses whitewashed with quicklime, set among olive trees sloping towards the sea. La Terra, its historic centre, is a tangle of alleys, squares and stairways, crowned by a beautiful sixteenth-century cathedral.",
  },
  {
    name: "Locorotondo",
    file: "Locorotondo, Via Porta Nuova - panoramio.jpg",
    text: "A white treasure of the Itria Valley on the Murgia plateau. Its name means 'round place', echoing the circular town plan. One of Italy's most beautiful villages, known for its cummerse: houses with sloping roofs of limestone slabs called chiancarelle.",
  },
];

/** Romanesque cathedral towns within reach of Bari. */
export const cathedrals = [
  {
    name: "Bitonto",
    file: "Bitonto Cattedrale4.jpg",
    text: "Home to the first national gallery of Puglia and the region's largest diocesan museum. Its cathedral is a key example of Apulian Romanesque architecture. Bitonto was recognised as a city of art in 2004.",
  },
  {
    name: "Trani",
    file: "Trani Cattedrale di San Nicola Pellegrino-2804.jpg",
    text: "A city of art with a rich artistic and architectural heritage, including its famous cathedral on the sea and its Swabian castle, alongside many churches, monasteries and historic buildings.",
  },
  {
    name: "Ruvo di Puglia",
    file: "Campanile Ruvo di Puglia.JPG",
    text: "A city of art in the Alta Murgia National Park. It hosts the Jatta National Archaeological Museum, home to Hellenistic finds including the prized Talos vase, and is known for its Holy Week.",
  },
  {
    name: "Castel del Monte",
    file: "Castel del Monte - Apulia.JPG",
    text: "A perfectly octagonal castle, its outer structure and inner courtyard both eight-sided, each side about 10 metres long. Blending Northern European, Islamic and classical elements, it joined the UNESCO World Heritage list in 1996.",
  },
];

// Give places a ready-to-use image URL and source link.
for (const place of [...dayTrips, ...cathedrals]) {
  place.image = commonsImage(place.file, 800);
  place.source = commonsPage(place.file);
}

/** Every photo on the page, for the credits section. */
export const photoCredits = [
  { label: "Bari", file: SCENES.bari.file },
  { label: "Basilica of Saint Nicholas", file: SCENES.sanNicola.file },
  { label: "Nazario Sauro seafront", file: SCENES.seafront.file },
  { label: "Orecchiette", file: SCENES.food.file },
  ...dayTrips.map((p) => ({ label: p.name, file: p.file })),
  ...cathedrals.map((p) => ({ label: p.name, file: p.file })),
].map((c) => ({ ...c, source: commonsPage(c.file) }));
