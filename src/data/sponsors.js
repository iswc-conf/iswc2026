/**
 * Conference sponsors — the single source of truth.
 *
 * Consumed by both the homepage hero marquee (via `allSponsors`) and the
 * Sponsors page (via `sponsorTiers`), so adding a sponsor or moving one
 * between tiers happens in exactly one place.
 *
 * Each sponsor carries everything either view needs: display `name`, `logo`,
 * an optional outbound `link`, and a `width` cap (px) for the logo on the
 * Sponsors page. Each tier carries its display `label` and heading `color`.
 */
import SPS from "../components/sponsorship/assets/PLATINUM/SPS.png";
import METAPACT from "../components/sponsorship/assets/PLATINUM/METAPACT.png";
import SAP from "../components/sponsorship/assets/PLATINUM/SAP.png";
import TENTRIS from "../components/sponsorship/assets/PLATINUM/TENTRIS.png";
import GOOGLE from "../components/sponsorship/assets/GOLD/GOOGLE.png";
import DATATREEHOUSE from "../components/sponsorship/assets/GOLD/DATATREEHOUSE.svg";
import ACCENTURE from "../components/sponsorship/assets/GOLD/accenture.png";
import EBAY from "../components/sponsorship/assets/SILVER/EBAY.png";
import RELAI from "../components/sponsorship/assets/SILVER/RELAI.png";
import SIEMENS from "../components/sponsorship/assets/SILVER/SIEMENS.png";
import GRAPHWISE from "../components/sponsorship/assets/SILVER/GRAPHWISE.png";
import LNCS from "../components/sponsorship/assets/BRONZE/LNCS.jpg";
import LORE from "../components/sponsorship/assets/SILVER/LORE_STAR.png";
import AIJ from "../components/sponsorship/assets/SILVER/AIJ.jpeg";

/** Ordered list of tiers, each with its sponsors. Drives every sponsor view. */
export const sponsorTiers = [
  {
    tier: "Platinum",
    label: "Platinum Sponsors",
    color: "#6c7a89",
    sponsors: [
      { name: "Tentris", logo: TENTRIS, link: "https://tentris.io", width: 1000 },
      { name: "S&P Global", logo: SPS, link: "https://www.spglobal.com/en", width: 600 },
      { name: "Metaphacts / Digital Science", logo: METAPACT, link: "https://metaphacts.com", width: 600 },
      { name: "SAP", logo: SAP, link: "https://sap.com", width: 600 }
    ],
  },
  {
    tier: "Gold",
    label: "Gold Sponsors",
    color: "#d4af37",
    sponsors: [
      { name: "Google", logo: GOOGLE, link: "https://google.com", width: 800 },
      { name: "Data Treehouse", logo: DATATREEHOUSE, link: "https://www.data-treehouse.com", width: 600 },
      { name: "Accenture", logo: ACCENTURE, link: "https://www.accenture.com", width: 600 },
    ],
  },
  {
    tier: "Silver",
    label: "Silver Sponsors",
    color: "#c0c0c0",
    sponsors: [
      { name: "Siemens", logo: SIEMENS, link: "https://www.siemens.com/it-it/", width: 800 },
      { name: "Relational-AI", logo: RELAI, link: "https://www.relational.ai", width: 600 },
      { name: "eBay", logo: EBAY, link: "https://www.ebay.com", width: 600 },
      { name: "Graphwise", logo: GRAPHWISE, link: "https://graphwise.ai", width: 600 },
      { name: "Artificial Intelligence Journal", logo: AIJ, link: "https://www.elsevier.com/locate/artint", width: 600 },
      { name: "Lore Star", logo: LORE, link: "https://graphwise.ai", width: 600 },
    ],
  },
  {
    tier: "Bronze",
    label: "Bronze",
    color: "#cd7f32",
    sponsors: [
      { name: "LNCS", logo: LNCS, link: "https://link.springer.com/series/558", width: 800 },
    ],
  },
];

/** Tier name -> sponsors, kept for any consumer that indexes by tier. */
export const sponsorsByTier = Object.fromEntries(
  sponsorTiers.map((tier) => [tier.tier, tier.sponsors])
);

/** Flat list in tier order, for the homepage marquee. */
export const allSponsors = sponsorTiers.flatMap((tier) => tier.sponsors);

export default sponsorsByTier;
