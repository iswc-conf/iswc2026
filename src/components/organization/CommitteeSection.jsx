import React from "react";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import PersonCard from "./PersonCard";

/**
 * Renders a committee: one titled group per role, each a responsive grid of
 * member cards.
 *
 * Replaces the old Sponsor/SponsorPC/SliderSponsor/SliderSponsorPC quartet,
 * which were four copies of the same component differing only in whether
 * photos were shown.
 *
 * @param {string} word       Page title.
 * @param {object} users      Map of role name to array of members.
 * @param {bool}   hideImage  Render names only, without portraits.
 */
export const CommitteeSection = ({ word, users, hideImage = false }) => (
  <section>
    {word && <Header>{word}</Header>}

    {Object.entries(users).map(([role, members]) => (
      <div key={role}>
        <UnderlineHeader>{role}</UnderlineHeader>

        <div className={`iswc-person-grid ${hideImage ? "iswc-person-grid--compact" : ""}`.trim()}>
          {members.map((user) => (
            <PersonCard
              key={`${role}-${user.name}`}
              img={user.img}
              name={user.name}
              detail={[user.institution, user.country].filter(Boolean).join(", ")}
              hideImage={hideImage}
            />
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default CommitteeSection;
