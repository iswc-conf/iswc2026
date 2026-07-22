import React from "react";
import SubHeader from "./SubHeader";

/**
 * Portrait beside a biography, used for keynote speakers and panellists.
 *
 * The portrait is a fixed size so every speaker on a page lines up, regardless
 * of the source image's dimensions. It drops below the text on phones.
 *
 * @param {string} name
 * @param {string} photo
 * @param {node}   children  The biography, as one or more <p> elements.
 */
export const SpeakerProfile = ({ name, photo, children }) => (
  <section>
    <SubHeader>About {name}</SubHeader>

    <div className="iswc-speaker">
      {photo && (
        <img className="iswc-speaker__portrait" src={photo} alt={name} loading="lazy" />
      )}
      <div className="iswc-speaker__bio">{children}</div>
    </div>
  </section>
);

export default SpeakerProfile;
