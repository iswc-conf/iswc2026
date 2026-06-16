import React from "react";

import './sponsorship.css';
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";


import DeclareSoon from "../general/declareSoon";

/* PLATINUM */
import SPS from "./assets/PLATINUM/SPS.png"
import METAPACT from "./assets/PLATINUM/METAPACT.png"
import TENTRIS from "./assets/PLATINUM/TENTRIS.png"

/* GOLD */
import GOOGLE from "./assets/GOLD/GOOGLE.png"
import DATATREE from "./assets/GOLD/DATATREEHOUSE.svg"

/* SILVER */
import EBAY from "./assets/SILVER/EBAY.png"
import RELAI from "./assets/SILVER/RELAI.png"
import SIEMENS from "./assets/SILVER/SIEMENS.png"




export const Sponsors = () => {

const sponsors = [
    {
    level: "Platinum Sponsors",
    color: "#6c7a89",
    items: [
      {
        name: "TENTRIS",
        image: TENTRIS,
        link: "https://tentris.io",
        width: 1000,
      },
      {
        name: "S&P Global",
        image: SPS,
        link: "https://www.spglobal.com/en",
        width: 600,
      },
      {
        name: "Metaphacts / Digital Science",
        image: METAPACT,
        link: "https://metaphacts.com",
        width: 600,
      },
    ],
  },
  {
    level: "Gold Sponsors",
    color: "#d4af37",
    items: [
      {
        name: "Google",
        image: GOOGLE,
        link: "https://google.com",
        width: 800,
      },
      {
        name: "Data Treehouse",
        image: DATATREE,
        link: "https://www.data-treehouse.com",
        width: 600,
      }
    ],
  },
    {
    level: "Silver Sponsors",
    color: "#c0c0c0",
    items: [
      {
        name: "Siemens",
        image: SIEMENS,
        link: "https://www.siemens.com/it-it/",
        width: 800,
      },
      {
        name: "Relational-AI",
        image: RELAI,
        link: "https://www.relational.ai",
        width: 600,
      },
      {
        name: "EBAY",
        image: EBAY,
        link: "https://www.ebay.com",
        width: 600,
      }
    ],
  },


]
/*
const sponsors_2025 = [
  {
    level: "Platinum",
    color: "#6c7a89",
    items: [
      {
        name: "metaphacts",
        image: metaphacts,
        link: "https://metaphacts.com/",
        width: 300,
      },
    ],
  },
  {
    level: "Gold",
    color: "#d4af37",
    items: [

      {
        name: "Google",
        image: google_logo,
        link: "https://www.google.com",
      },
    ],
  },
  {
    level: "Silver",
    color: "#c0c0c0",
    items: [
      {
        name: "Lore Star",
        image: lore_star_logo,
        link: "https://lorestar.it/",
      },
      {
        name: "IIJ - Internet Initiative Japan",
        image: iij_logo,
        link: "https://www.iij.ad.jp/en/",
        width: 250,
      },
    ],
  },
  {
    level: "Student Support",
    items: [
      {
        name: "Artificial Intelligence Journal",
        image:
          "https://aij.ijcai.org/wp-content/uploads/2021/07/ARTINT_Logo2_c_web_more.jpg",
      },
      {
        name: "Semantic Web Science Association (SWSA)",
        image: swsa_logo,
      },
    ],
  },
  {
    level: "Satellite-event sponsor",
    items: [
      {
        name: "Digital Science",
        image: digital_science_logo,
        link: "https://www.digital-science.com/",
      },
    ],
  },
  {
    level: "Best Paper Award",
    items: [
      {
        name: "Springer",
        image: "https://www.springer.com/public/images/springer-logo.svg",
      },
    ],
  },
  {
    level: "Best Student Paper Award",
    items: [
      {
        name: "Journal of Web Semantics",
        image: "https://ars.els-cdn.com/content/image/X15708268.jpg",
      },
    ],
  },
  {
    level: "Best Resource Paper Award",
    items: [
      {
        name: "River Publishers",
        image: river_publisher_logo,
        link: "https://journals.riverpublishers.com/index.php/JWE/index",
      },
    ],
  },
  {
    level: "Contributors",
    items: [
      {
        name: "Videolectures",
        image: videolectures_logo,
        link: "https://videolectures.net/",
      },
    ],
  },
];
*/


const SponsorCard = ({ name, image, link, width = 300 }) => {
  const content = (
    <img
      src={image}
      alt={`${name} Logo`}
      className="sponsor-logo"
      style={{ maxWidth: width }}
    />
  );

  return (
    <div className="sponsor-card">
      <h3>{name}</h3>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};



    return (

<BaseContainer>

  <Header>ISWC 2026 Sponsors</Header>
  <br></br>
  <br></br>
  {sponsors.map((group) => (
    <div key={group.level} className="sponsor-level">
      <h2 className="level-title mb-6" style={{backgroundColor:group.color}}>{group.level}</h2>

      <div className="sponsor-grid">
        {group.items.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </div>
  ))}
</BaseContainer>
    );
};

export default Sponsors;