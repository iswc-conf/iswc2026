import React from "react";

/**
 * One committee member.
 *
 * @param {string} img      Portrait. Omit for a placeholder.
 * @param {string} name
 * @param {string} detail   Affiliation, shown under the name.
 * @param {bool}   hideImage  Name-only mode, used by the programme committee.
 */
export const PersonCard = ({ img, name, detail, hideImage = false }) => (
  <div className={`iswc-person-card ${hideImage ? "iswc-person-card--compact" : ""}`.trim()}>
    {!hideImage &&
      (img ? (
        <img className="iswc-person-card__avatar" src={img} alt={name} loading="lazy" />
      ) : (
        <div
          className="iswc-person-card__avatar iswc-person-card__avatar--empty"
          aria-hidden="true"
        >
          No photo
        </div>
      ))}

    <p className="iswc-person-card__name">{name}</p>
    {detail && <p className="iswc-person-card__detail">{detail}</p>}
  </div>
);

export default PersonCard;
