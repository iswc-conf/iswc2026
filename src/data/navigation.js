/**
 * Site navigation.
 *
 * Single source of truth for the navbar. Each entry is either a direct link
 * (`{ label, to }`) or a dropdown (`{ label, items }`). Inside a dropdown,
 * `{ type: "header", label }` renders a non-clickable group heading and
 * `badge` adds a pill to the right of a link.
 *
 * `to` values starting with "http" are treated as external links.
 *
 * To hide a route from the menu, comment out its entry here; the route itself
 * stays registered in App.jsx.
 */
export const navigation = [
  { label: "About", to: "/" },
  { label: "Important Dates", to: "/importantdates" },

  {
    label: "Calls",
    items: [
      { type: "header", label: "Available" },
      { label: "Research", to: "/calls/research" },
      {
        label: "Research — ESWC 2026 resubmissions",
        to: "/calls/eswcresubmission",
        badge: "NEW",
      },
      { label: "Resource", to: "/calls/resource" },
      { label: "In Use", to: "/calls/in-use" },
      { label: "Doctoral Consortium", to: "/calls/doctoral" },
      { label: "Posters and Demos", to: "/calls/posters" },
      { label: "Workshops", to: "/calls/workshops" },
      { label: "Tutorials", to: "/calls/tutorials" },
      { label: "Industry Track", to: "/calls/industry" },
      { label: "SWSA Distinguished Dissertation Award", to: "/calls/swsa" },
      { label: "Dagstuhl Workshops", to: "/calls/dagstuhl" },
      { label: "Journal Track", to: "/calls/journaltrack" },
      { label: "Visionary Ideas", to: "/calls/visionary" },
      // { label: "Challenges", to: "/calls/challenges" },
    ],
  },

  {
    label: "Program",
    items: [
      { type: "header", label: "Available" },
      { label: "Workshops", to: "/program/workshops" },
      { label: "Keynote Speakers", to: "/program/keynotespeakers" },
      { label: "Accepted Papers", to: "/program/acceptedpapers" },
      { label: "Tutorials", to: "/program/tutorials" },

      { type: "header", label: "To Be Announced" },
      { label: "Schedule", to: "/program/schedule" },
      { label: "Dagstuhl Workshops", to: "/program/dagstuhl" },
      { label: "Panel", to: "/program/panel" },
      { label: "Awards", to: "/program/awards" },
      // { label: "Challenges", to: "/program/challenges" },
    ],
  },

  {
    label: "Guidelines",
    items: [
      { type: "header", label: "Available" },
      { label: "HTML Submission Guide", to: "/guidelines/html-submission" },
      {
        label: "Prior Publications and Simultaneous Submissions",
        to: "/guidelines/prior-publications",
      },
      { label: "Review Guidelines", to: "/guidelines/review" },
      { label: "Supplemental Materials", to: "/guidelines/supplemental" },
      { label: "Resources Availability", to: "/guidelines/resources" },
      { label: "ORKG Submission Workflow", to: "/guidelines/okbcworkflow" },
      {
        label: "Policy on the use of Generative AI",
        to: "/guidelines/generative-ai-policy",
      },
    ],
  },

  {
    label: "SWSA Early Career Award",
    to: "https://swsa.semanticweb.org/content/swsa-early-career-award",
  },

  {
    label: "Sponsorship",
    items: [
      { type: "header", label: "Available" },
      { label: "Why Sponsor?", to: "/sponsorship/whysponsor" },
      { label: "Sponsorship Packages", to: "/sponsorship/sponsorshippackages" },
      { label: "Contacts", to: "/sponsorship/contacts" },
      { label: "Sponsors", to: "/sponsorship/sponsors" },
    ],
  },

  {
    label: "Attending",
    items: [
      { type: "header", label: "Available" },
      { label: "Registration", to: "/attending/registration" },
      { label: "Code of Conduct", to: "/attending/codeofconduct" },
      { label: "Venue and Accommodation", to: "/attending/venueandaccomodation" },
      { label: "VISA Information", to: "/attending/visa" },
      { label: "Student Grants", to: "/attending/studentgrants" },
      // { label: "Childcare", to: "/attending/childcare" },
    ],
  },

  {
    label: "Organization",
    items: [
      { type: "header", label: "Available" },
      { label: "Organizing Committee", to: "/organizing_committee" },
      { label: "Program Committee", to: "/organization/program_committee" },
    ],
  },

  // Blogs are kept out of the menu for 2026 but the routes still exist.
  // {
  //   label: "Blogs",
  //   items: [
  //     { label: "ISWC 2025 Host", to: "/blogs/host" },
  //     { label: "ISWC 2025 Nature Navigator", to: "/blogs/naturenavigator" },
  //     { label: "ISWC Community", to: "/blogs/community" },
  //     { label: "Presenting at ISWC", to: "/blogs/presentingatiswc" },
  //   ],
  // },
];

export default navigation;
