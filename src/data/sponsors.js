/**
 * Conference sponsors, grouped by tier.
 *
 * Used by the homepage marquee and the Sponsors page, so both stay in sync
 * when a sponsor is added or moves tier.
 */
import SPS from "../components/sponsorship/assets/PLATINUM/SPS.png";
import METAPACT from "../components/sponsorship/assets/PLATINUM/METAPACT.png";
import TENTRIS from "../components/sponsorship/assets/PLATINUM/TENTRIS.png";
import GOOGLE from "../components/sponsorship/assets/GOLD/GOOGLE.png";
import DATATREEHOUSE from "../components/sponsorship/assets/GOLD/DATATREEHOUSE.svg";
import EBAY from "../components/sponsorship/assets/SILVER/EBAY.png";
import RELAI from "../components/sponsorship/assets/SILVER/RELAI.png";
import SIEMENS from "../components/sponsorship/assets/SILVER/SIEMENS.png";

export const sponsorsByTier = {
  Platinum: [
    { name: "SPS", logo: SPS },
    { name: "Metapact", logo: METAPACT },
    { name: "Tentris", logo: TENTRIS },
  ],
  Gold: [
    { name: "Google", logo: GOOGLE },
    { name: "Data Treehouse", logo: DATATREEHOUSE },
  ],
  Silver: [
    { name: "eBay", logo: EBAY },
    { name: "Relai", logo: RELAI },
    { name: "Siemens", logo: SIEMENS },
  ],
};

/** Flat list in tier order, for the homepage marquee. */
export const allSponsors = Object.values(sponsorsByTier).flat();

export default sponsorsByTier;
