import bg_image from "../../assets/logos/home_banner.jpeg"
import { theme } from "../../theme";
import "../../App.css"

export const Hero = () => {
  return (
    <div class="relative bg-gradient-to-r mt-10 from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src={bg_image} alt="Background" class="object-cover object-center w-full h-full"  />
        <div class="absolute inset-0 bg-black opacity-[0.45]"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center m-2 lg:m-0">
        <h1 style={{color: theme.colors.primary}}class="lg:text-7xl text-5xl font-bold tracking-wide lg:font-[800] leading-tight ">ISWC 2026</h1>
        <h1 class="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4 mt-6 pt-6">THE 25th INTERNATIONAL SEMANTIC WEB CONFERENCE</h1>
        <p class="text-2xl font-semibold mb-6">Date:&nbsp;&nbsp; 25 - 29 October,&nbsp;&nbsp;2026</p>
        <p class="text-2xl font-semibold mb-6">Bari,&nbsp;&nbsp;Italy</p>
        <p class=" text-xl font-semibold  mb-6 primary-color">Venue:&nbsp;&nbsp;The Nicolaus Hotel, Bari</p>
      </div>
    </div>
  );
}