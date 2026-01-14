import React, { useState, useEffect } from "react";
import logo from "../../assets/logos/logo.png";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../../theme";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024; // use lg breakpoint
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (key) => {
    if (isMobile) return;
    setDropdownOpen({ [key]: true });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setDropdownOpen({});
  };

  const closeDropdown = () => setDropdownOpen({});

  const menuItems = [
    { label: "About", to: "/" },
    { label: "Important Dates", to: "/importantdates" },
    {
      label: "Calls",
      dropdown: [
        { label: "Research", to: "/calls/research" },
        { label: "Resource", to: "/calls/resource" },
        { label: "In Use", to: "/calls/in-use" },
        { label: "Posters and Demos", to: "/calls/posters" },
        //{ label: "Challenges", to: "/calls/challenges" },
        { label: "Industry Track", to: "/calls/industry" },
        { label: "Doctoral Consortium", to: "/calls/doctoral" },
        { label: "Workshops", to: "/calls/workshops" },
        { label: "Dagstuhl Workshops", to: "/calls/dagstuhl" },
        { label: "Tutorials", to: "/calls/tutorials" },
        { label: "SWSA Distinguished Dissertation Award", to: "/calls/swsa" },
        { label: "Journal track", to: "/calls/journaltrack" },
        { label: "Visionary Ideas", to: "/calls/visionary" },
      ],
    },
    {
      label: "Program",
      dropdown: [
        { label: "Schedule", to: "/program/schedule" },
        { label: "Accepted Papers", to: "/program/acceptedpapers" },
        { label: "Keynote Speakers", to: "/program/keynotespeakers" },
        { label: "Workshops", to: "/program/workshops" },
        { label: "Dagstuhl Workshops", to: "/program/dagstuhl" },
        { label: "Tutorials", to: "/program/tutorials" },
        //{ label: "Challenges", to: "/program/challenges" },
        { label: "Panel", to: "/program/panel" },
        { label: "Awards", to: "/program/awards" },
      ],
    },
    {
      label: "Guidelines",
      dropdown: [
        { label: "HTML Submission Guide", to: "/guidelines/html-submission" },
        { label: "Prior Publications and Simultaneous Submissions", to: "/guidelines/prior-publications" },
        { label: "Review Guidelines", to: "/guidelines/review" },
        { label: "Supplemental Materials", to: "/guidelines/supplemental" },
        { label: "Resources Availability", to: "/guidelines/resources" },
        { label: "OKBC Submission Workflow", to: "/guidelines/okbcworkflow" },

      ],
    },
    {
      label: "Sponsorship",
      dropdown: [
        { label: "Sponsorship Packages", to: "/sponsorship/sponsorshippackages" },
        //{ label: "Sponsors", to: "/sponsorship/sponsors" },
      ],
    },
    {
      label: "Attending",
      dropdown: [
        { label: "VISA Information", to: "/attending/visa" },
        { label: "Student Grants", to: "/attending/studentgrants" },
        { label: "Code of Conduct", to: "/attending/codeofconduct" },
        { label: "Venue and Accommodation", to: "/attending/venueandaccomodation" },
        //{ label: "Childcare", to: "/attending/childcare" },
        { label: "Registration", to: "/attending/registration" },
      ],
    },
    /*
    {
      
      label: "Blogs",
      dropdown: [
        { label: "ISWC 2025 Host", to: "/blogs/host" },
        { label: "ISWC 2025 Nature Navigator", to: "/blogs/naturenavigator" },
        { label: "ISWC Community", to: "/blogs/community" },
        { label: "Presenting at ISWC", to: "/blogs/presentingatiswc" },
      ],
    },
    */
    {
      label: "Organization",
      dropdown: [
        { label: "Organizing Committee", to: "organizing_committee" },
        { label: "Program Committee", to: "/organization/program_committee" },
      ],
    },
  ];



  return (
    <nav 
      className="absolute top-0 left-0 w-full bg-[#FEFFFE] text-[#000000] shadow-md z-50"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between flex-wrap p-2 lg:mr-4">
        <Link to="/">
          <img src={logo} className="w-[100px] mr-4 mb-2" alt="Logo" />
        </Link>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`h-4 w-4 fill-current ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`h-4 w-4 fill-current ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div
            className={`${
              isMobile
                ? "flex flex-col space-y-2"
                : "flex flex-row items-center space-x-4 text-md font-medium"
            }`}
          >
            {menuItems.map((item) =>
              !item.dropdown ? (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{color:theme.colors.secondary}}
                  className="block text-[#33358c] hover:text-[#000000] relative group px-2 py-1 font-bold"
                >
                  {item.label}
                 
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="relative group"
                  
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <span style={{color:theme.colors.secondary}} className="block cursor-pointer text-[#e94607] px-2 py-1">
                    {item.label}
                  </span>

                  {/* Dropdown */}
                  {isMobile ? (
                    <div className="flex flex-col bg-gray-50 rounded-md ml-4 mb-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          
                          className="block px-4 py-2 text-[#000000] hover:bg-[#c9c9c7] "
                          onClick={closeDropdown}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    dropdownOpen[item.label] && (
                      <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md z-50">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            className="block px-4 py-2 text-[#000000] hover:bg-[#c9c9c7]"
                            onClick={closeDropdown}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
