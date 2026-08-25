import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * TEMPORARY announcement banner pushing the early-registration deadline.
 *
 * Shown at the top of the homepage. To remove it once the deadline passes,
 * delete this file and its <RegistrationBanner /> usage in MainPage.jsx.
 * The date lives in one place below.
 */
const EARLY_DEADLINE = "31 August 2026";

export const RegistrationBanner = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="iswc-banner" role="region" aria-label="Registration deadline">
      <div className="iswc-banner__inner">
        <p className="iswc-banner__text">
          <strong>Early registration closes on {EARLY_DEADLINE}.</strong>{" "}
          Register now to secure the lower rate.
        </p>

        <Link className="iswc-banner__cta" to="/attending/registration">
          Register now
        </Link>

      </div>
    </div>
  );
};

export default RegistrationBanner;
