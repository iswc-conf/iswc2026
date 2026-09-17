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
import SPS from "./sponsors/PLATINUM/SPS.png";
import METAPACT from "./sponsors/PLATINUM/METAPACT.png";
import SAP from "./sponsors/PLATINUM/SAP.png";
import TENTRIS from "./sponsors/PLATINUM/TENTRIS.png";
import GOOGLE from "./sponsors/GOLD/GOOGLE.png";
import DATATREEHOUSE from "./sponsors/GOLD/DATATREEHOUSE.svg";
import ACCENTURE from "./sponsors/GOLD/accenture.png";
import EBAY from "./sponsors/SILVER/EBAY.png";
import RELAI from "./sponsors/SILVER/RELAI.png";
import SERVICE from "./sponsors/SILVER/SERVICE.png";
import SIEMENS from "./sponsors/SILVER/SIEMENS.png";
import GRAPHWISE from "./sponsors/SILVER/GRAPHWISE.png";
import LNCS from "./sponsors/BRONZE/LNCS.jpg";
import LORE from "./sponsors/SILVER/LORE_STAR.png";
import AIJ from "./sponsors/SILVER/AIJ.jpeg";
import ATOMIC from "./sponsors/PLATINUM/ATOMIC.png";
import JP from "./sponsors/GOLD/JP.png";
import SNOW from "./sponsors/PLATINUM/SNOW.png";

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
      { name: "SAP", logo: SAP, link: "https://sap.com", width: 600 },
      { name: "ATOMIC", logo: ATOMIC, link: "https://atomic.dev", width: 600 , dark:true},
       { name: "Snowflake", logo: SNOW, link: "https://www.snowflake.com/", width: 600 , },
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
      { name: "JPMC", logo: JP, link: "https://www.jpmorganchase.com", width: 600 , dark: true},
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
      { name: "Lore Star", logo: LORE, link: "https://lorestar.it", width: 600 },
       { name: "ServiceNow", logo: SERVICE, link: "https://www.servicenow.com", width: 600 },
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
