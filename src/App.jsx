import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { NavBar } from "./components/general/NavBar";
import { Footer } from "./components/general/Footer";
import MainPage from "./components/about/MainPage";

/**
 * Routes are code-split so a visitor only downloads the page they open.
 * The syntax-highlighting and committee pages in particular are heavy, and
 * previously shipped to everyone on first load.
 */

/* Basics */
const ImportantDates = lazy(() => import("./components/important_dates/ImportantDates"));

/* Calls */
const Research = lazy(() => import("./components/calls/Research"));
const ESWCResubmission = lazy(() => import("./components/calls/ESWCResubmission"));
const Resource = lazy(() => import("./components/calls/Resource"));
const InUse = lazy(() => import("./components/calls/InUse"));
const JournalTrack = lazy(() => import("./components/calls/JournalTrack"));
const Posters = lazy(() => import("./components/calls/Posters"));
const IndustryTrack = lazy(() => import("./components/calls/IndustryTrack"));
const DoctoralConsortium = lazy(() => import("./components/calls/DoctoralConsortium"));
const WorkshopsCall = lazy(() => import("./components/calls/WorkshopsCall"));
const Tutorials = lazy(() => import("./components/calls/Tutorials"));
const Dagstuhl = lazy(() => import("./components/calls/Dagstuhl"));
const SwsaDistinguishedDissertationAward = lazy(() =>
  import("./components/calls/SwsaDistinguishedDissertationAward").then((m) => ({
    default: m.SwsaDistinguishedDissertationAward,
  }))
);
const Visionary = lazy(() =>
  import("./components/calls/Visionary").then((m) => ({ default: m.Visionary }))
);

/* Guidelines */
const HTMLSubmissionGuide = lazy(() => import("./components/guidelines/HTMLSubmissionGuide"));
const PriorPublicationMultipleSubmission = lazy(() =>
  import("./components/guidelines/PriorPublicationMultipleSubmission")
);
const ReviewGuidelines = lazy(() => import("./components/guidelines/ReviewGuidelines"));
const SupplementalMaterials = lazy(() => import("./components/guidelines/SupplementalMaterials"));
const ResourcesAvailability = lazy(() => import("./components/guidelines/ResourcesAvailability"));
const OKBCSubmissionWorkflow = lazy(() => import("./components/guidelines/OKBCSubmissionWorkflow"));
const PolicyAI = lazy(() => import("./components/guidelines/PolicyAI"));

/* Program */
const AcceptedPapers = lazy(() => import("./components/program/AcceptedPapers"));
const KeynoteSpeakers = lazy(() => import("./components/program/KeynoteSpeakers"));
const Workshops = lazy(() => import("./components/program/Workshops"));
const ProgramDagstuhl = lazy(() => import("./components/program/Dagstuhl"));
const AcceptedTutorials = lazy(() => import("./components/program/Tutorials"));
const Panel = lazy(() => import("./components/program/Panel"));
const Awards = lazy(() => import("./components/program/Awards"));
const Schedule = lazy(() =>
  import("./components/program/Schedule").then((m) => ({ default: m.Schedule }))
);

/* Attending */
const Registration = lazy(() => import("./components/attending/Registration"));
const CodeOfConduct = lazy(() => import("./components/attending/CodeOfConduct"));
const VenueAndAccomodation = lazy(() =>
  import("./components/attending/Venue").then((m) => ({ default: m.VenueAndAccomodation }))
);
const Visa = lazy(() =>
  import("./components/attending/Visa").then((m) => ({ default: m.Visa }))
);
const StudentGrants = lazy(() =>
  import("./components/attending/StudentGrants").then((m) => ({ default: m.StudentGrants }))
);

/* Organization */
const Committees = lazy(() => import("./components/organization/organizing_committee"));
const ProgramCommitee = lazy(() => import("./components/organization/program_commitee"));

/* Sponsorship */
const WhySponsor = lazy(() => import("./components/sponsorship/WhySponsor"));
const SponsorshipPackages = lazy(() => import("./components/sponsorship/SponsorshipPackages"));
const Contact = lazy(() => import("./components/sponsorship/Contact"));
const Sponsors = lazy(() => import("./components/sponsorship/Sponsors"));

/**
 * HashRouter keeps the scroll position between routes, which lands you
 * mid-page after following a nav link. Reset it on every navigation.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Skip link for keyboard users.
 *
 * Under HashRouter the URL hash is the route, so following `#main-content`
 * would replace the current route and navigate home. Move focus manually
 * instead, which is what the link is for.
 */
const SkipLink = () => {
  const handleClick = (event) => {
    event.preventDefault();

    const main = document.getElementById("main-content");
    if (!main) return;

    main.setAttribute("tabindex", "-1");
    main.focus({ preventScroll: true });
    main.scrollIntoView({ block: "start" });
  };

  return (
    <a className="visually-hidden-focusable" href="#main-content" onClick={handleClick}>
      Skip to main content
    </a>
  );
};

const RouteFallback = () => (
  <div className="iswc-page" role="status" aria-live="polite">
    <div className="iswc-page__inner text-center">Loading&hellip;</div>
  </div>
);

export default function App() {
  return (
    <>
      <SkipLink />

      <NavBar />
      <ScrollToTop />

      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* Basics */}
          <Route path="/" element={<MainPage />} />
          <Route path="/importantdates" element={<ImportantDates />} />

          {/* Calls */}
          <Route path="/calls/research" element={<Research />} />
          <Route path="/calls/eswcresubmission" element={<ESWCResubmission />} />
          <Route path="/calls/resource" element={<Resource />} />
          <Route path="/calls/in-use" element={<InUse />} />
          <Route path="/calls/journaltrack" element={<JournalTrack />} />
          <Route path="/calls/posters" element={<Posters />} />
          <Route path="/calls/industry" element={<IndustryTrack />} />
          <Route path="/calls/doctoral" element={<DoctoralConsortium />} />
          <Route path="/calls/workshops" element={<WorkshopsCall />} />
          <Route path="/calls/tutorials" element={<Tutorials />} />
          <Route path="/calls/dagstuhl" element={<Dagstuhl />} />
          <Route path="/calls/swsa" element={<SwsaDistinguishedDissertationAward />} />
          <Route path="/calls/visionary" element={<Visionary />} />

          {/* Guidelines */}
          <Route path="/guidelines/html-submission" element={<HTMLSubmissionGuide />} />
          <Route path="/guidelines/review" element={<ReviewGuidelines />} />
          <Route path="/guidelines/supplemental" element={<SupplementalMaterials />} />
          <Route path="/guidelines/resources" element={<ResourcesAvailability />} />
          <Route
            path="/guidelines/prior-publications"
            element={<PriorPublicationMultipleSubmission />}
          />
          <Route path="/guidelines/okbcworkflow" element={<OKBCSubmissionWorkflow />} />
          <Route path="/guidelines/generative-ai-policy" element={<PolicyAI />} />

          {/* Program */}
          <Route path="/program/acceptedpapers" element={<AcceptedPapers />} />
          <Route path="/program/keynotespeakers" element={<KeynoteSpeakers />} />
          <Route path="/program/workshops" element={<Workshops />} />
          <Route path="/program/dagstuhl" element={<ProgramDagstuhl />} />
          <Route path="/program/tutorials" element={<AcceptedTutorials />} />
          <Route path="/program/panel" element={<Panel />} />
          <Route path="/program/awards" element={<Awards />} />
          <Route path="/program/schedule" element={<Schedule />} />

          {/* Attending */}
          <Route path="/attending/registration" element={<Registration />} />
          <Route path="/attending/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/attending/venueandaccomodation" element={<VenueAndAccomodation />} />
          <Route path="/attending/visa" element={<Visa />} />
          <Route path="/attending/studentgrants" element={<StudentGrants />} />

          {/* Organization */}
          <Route path="/organizing_committee" element={<Committees />} />
          <Route path="/organization/program_committee" element={<ProgramCommitee />} />

          {/* Sponsorship */}
          <Route path="/sponsorship/whysponsor" element={<WhySponsor />} />
          <Route path="/sponsorship/sponsorshippackages" element={<SponsorshipPackages />} />
          <Route path="/sponsorship/contacts" element={<Contact />} />
          <Route path="/sponsorship/sponsors" element={<Sponsors />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
