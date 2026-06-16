import bg_image from "../../assets/logos/home_banner.jpeg"
import { theme } from "../../theme";
import "../../App.css"


import LOGO1 from "../sponsorship/assets/PLATINUM/SPS.png"
import LOGO2 from "../sponsorship/assets/PLATINUM/METAPACT.png"
import LOGO3 from "../sponsorship/assets/PLATINUM/TENTRIS.png"

import LOGO4 from "../sponsorship/assets/GOLD/GOOGLE.png"
import LOGO5 from "../sponsorship/assets/GOLD/DATATREEHOUSE.svg"

import LOGO6 from "../sponsorship/assets/SILVER/EBAY.png"
import LOGO7 from "../sponsorship/assets/SILVER/RELAI.pdf"
import LOGO8 from "../sponsorship/assets/SILVER/SIEMENS.png"

const sponsors = [
  {
    name: "SPS",
    logo: LOGO1,
  },
  {
    name: "METAPACT",
    logo: LOGO2,
  },
  {
    name: "TENTRIS",
    logo: LOGO3,
  },
  {
    name: "GOOGLE",
    logo: LOGO4,
  },
  {
    name: "DATATREE",
    logo: LOGO5,
  },
  {
    name: "EBAY",
    logo: LOGO6,
  },
  {
    name: "RELAI",
    logo: LOGO7,
  },
  {
    name: "SIEMENS",
    logo: LOGO8,
  },
];

export const Hero = () => {
  const repeatedSponsors = Array(8).fill(sponsors).flat();

  return (
    <div className="relative bg-gradient-to-r mt-10 from-purple-600 to-blue-600 min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bg_image}
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-[0.45]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center m-2 lg:m-0 px-4 pt-20 pb-44">
        <h1
          style={{ color: theme.colors.primary }}
          className="lg:text-7xl text-5xl font-bold tracking-wide lg:font-[800] leading-tight"
        >
          ISWC 2026
        </h1>

        <h1 className="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4 mt-6 pt-6">
          THE 25th INTERNATIONAL SEMANTIC WEB CONFERENCE
        </h1>

        <p className="text-2xl font-semibold mb-6">
          Date:&nbsp;&nbsp; 25 - 29 October,&nbsp;&nbsp;2026
        </p>

        <p className="text-2xl font-semibold mb-6">Bari,&nbsp;&nbsp;Italy</p>

        <p className="text-xl font-semibold mb-6 primary-color">
          Venue:&nbsp;&nbsp;The Nicolaus Hotel, Bari
        </p>
      </div>

      {/* Sponsors Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-md border-t border-white/20 py-4 pb-10 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.3em] font-semibold mb-3 text-white/85 pb-2">
          Sponsors
        </p>

        <div className="sponsor-marquee">
          <div className="sponsor-marquee-inner">
            {repeatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="sponsor-marquee-card"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-marquee-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};