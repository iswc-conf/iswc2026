/**
 * Content for the Tourism page.
 *
 * Every photo is just two links: `src` (the image itself) and `source` (the
 * page to credit it to). This works for any freely licensed source, not only
 * Wikimedia Commons — set both fields to whatever provider you use.
 *
 * The `commons()` helper below simply builds those two links for a Wikimedia
 * Commons file, using the `Special:FilePath` endpoint (a stable redirect that
 * also serves a resized copy, so multi-MB originals are never sent to
 * visitors). To use a different provider, write the object out directly, as the
 * Bari photo does with Pexels.
 */

/** { src, source } for a Wikimedia Commons file. */
export const commons = (file, width = 1000) => ({
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`,
  source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`,
});

/** Human-readable provider name for a credit link. */
export const providerName = (url = "") => {
  if (url.includes("wikimedia.org")) return "Wikimedia Commons";
  if (url.includes("pexels.com")) return "Pexels";
  if (url.includes("unsplash.com")) return "Unsplash";
  return "source";
};

/** Named scene photos used directly on the page. */
export const SCENES = {
  bari: {
    src: "https://images.pexels.com/photos/12464237/pexels-photo-12464237.jpeg?auto=compress&cs=tinysrgb&w=1600",
    source: "https://www.pexels.com/photo/12464237/",
    alt: "View of Bari, southern Italy",
  },
  sanNicola: {
    ...commons("Bari - Basilica di San Nicola.jpg", 1400),
    alt: "The Basilica of Saint Nicholas in old Bari",
  },
  seafront: {
    ...commons("Lungomare Nazario Sauro - Bari.jpg", 1400),
    alt: "The Nazario Sauro seafront in Bari",
  },
  food: {
    ...commons("Orecchiette con cima di rapa.jpg", 1000),
    alt: "Orecchiette pasta with turnip tops, a Bari speciality",
  },
};

/** External references, gathered into the "Useful Links" section at the top. */
export const usefulLinks = [
  {
    label: "Bari Experience: 10 things to see in Bari",
    href: "https://www.bariexperience.com/en/see-bari-days/10-things-to-see-bari-puglia-places-places-to-visit/",
  },
  {
    label: "Bari Experience: where and what to eat in old Bari",
    href: "https://www.bariexperience.com/en/visit-bari-puglia/where-what-to-eat-in-old-bari-typical-apulian-bari-dishes/",
  },
  {
    label: "Free Walking Tour Bari: what to eat in Bari",
    href: "https://www.freewalkingtourbari.it/en/out-and-about/what-to-eat-in-bari/",
  },
  {
    label: "Slow Active Tours",
    href: "https://www.slowactivetours.com/en/",
  },
  {
    label: "Bari Experience: places to visit near Bari and around Puglia",
    href: "https://www.bariexperience.com/en/visit-places-in-puglia/see-visit-near-bari-and-surrounding-province-visit-puglia-holidays/",
  },
  {
    label: "Lonely Planet: guide to Puglia",
    href: "https://www.lonelyplanet.com/articles/guide-to-puglia",
  },
];

/** Day trips from Bari, roughly north-to-south through the Itria Valley. */
export const dayTrips = [
  {
    name: "Polignano a Mare",
    ...commons("Polignano a mare -Lama Monachile.jpg", 800),
    text: "Domenico Modugno's hometown and a true corner of poetry, standing on a spur overlooking the sea. It is home to natural caves carved by water erosion, with pure white houses on the cliff and a historic centre of narrow stone-paved streets, staircases and terraces with spectacular views.",
  },
  {
    name: "Alberobello",
    ...commons("Alberobello Trulli.jpg", 800),
    text: "The city of Trulli, a UNESCO World Heritage Site. These round, dome-topped dry-stone houses date back to the 1400s. The Rione Monti district holds over 1,000 trulli among artisan shops and taverns, while the Aia Piccola district gathers 400 more.",
  },
  {
    name: "Ostuni",
    ...commons("Ostuni in Puglia.jpg", 800),
    text: "The 'White City', its houses whitewashed with quicklime, set among olive trees sloping towards the sea. La Terra, its historic centre, is a tangle of alleys, squares and stairways, crowned by a beautiful sixteenth-century cathedral.",
  },
  {
    name: "Locorotondo",
    ...commons("Locorotondo, Via Porta Nuova - panoramio.jpg", 800),
    text: "A white treasure of the Itria Valley on the Murgia plateau. Its name means 'round place', echoing the circular town plan. One of Italy's most beautiful villages, known for its cummerse: houses with sloping roofs of limestone slabs called chiancarelle.",
  },
];

/** Romanesque cathedral towns within reach of Bari. */
export const cathedrals = [
  {
    name: "Bitonto",
    ...commons("Bitonto Cattedrale4.jpg", 800),
    text: "Home to the first national gallery of Puglia and the region's largest diocesan museum. Its cathedral is a key example of Apulian Romanesque architecture. Bitonto was recognised as a city of art in 2004.",
  },
  {
    name: "Trani",
    ...commons("Trani Cattedrale di San Nicola Pellegrino-2804.jpg", 800),
    text: "A city of art with a rich artistic and architectural heritage, including its famous cathedral on the sea and its Swabian castle, alongside many churches, monasteries and historic buildings.",
  },
  {
    name: "Ruvo di Puglia",
    ...commons("Campanile Ruvo di Puglia.JPG", 800),
    text: "A city of art in the Alta Murgia National Park. It hosts the Jatta National Archaeological Museum, home to Hellenistic finds including the prized Talos vase, and is known for its Holy Week.",
  },
  {
    name: "Castel del Monte",
    ...commons("Castel del Monte - Apulia.JPG", 800),
    text: "A perfectly octagonal castle, its outer structure and inner courtyard both eight-sided, each side about 10 metres long. Blending Northern European, Islamic and classical elements, it joined the UNESCO World Heritage list in 1996.",
  },
];

/** Every photo on the page, for the credits section. */
export const photoCredits = [
  { label: "Bari", source: SCENES.bari.source },
  { label: "Basilica of Saint Nicholas", source: SCENES.sanNicola.source },
  { label: "Nazario Sauro seafront", source: SCENES.seafront.source },
  { label: "Orecchiette", source: SCENES.food.source },
  ...dayTrips.map((p) => ({ label: p.name, source: p.source })),
  ...cathedrals.map((p) => ({ label: p.name, source: p.source })),
].map((c) => ({ ...c, provider: providerName(c.source) }));
