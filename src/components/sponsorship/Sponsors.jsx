import React from "react";
import google_logo from "./assets/google_logo.png"
import lore_star_logo from "./assets/lore_star_logo.png"
import iij_logo from "./assets/IIJ_logo.jpg"
import metaphacts from "./assets/metaphacts-logo-standard.png"
import river_publisher_logo from "./assets/JWE_River_Logo.jpg"
import swsa_logo from "./assets/swsa_logo.png"
import videolectures_logo from "./assets/Videolectures_logo.png"
import digital_science_logo from "./assets/digital_science_logo.png"
import './sponsorship.css';
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
export const Sponsors = () => {

const sponsors = [

]

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

const SponsorCard = ({ name, image, link, width }) => {
  const content = (
    <img
      src={image}
      alt={`${name} Logo`}
      className="sponsor-logo"
      style={{ width: width || 200 }}
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
  <Header>Sponsors</Header>
  <DeclareSoon></DeclareSoon>

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