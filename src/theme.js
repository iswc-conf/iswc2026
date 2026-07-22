/**
 * JS mirror of the SCSS design tokens in src/styles/_tokens.scss.
 *
 * Prefer CSS classes over inline styles. This export exists for the few places
 * that genuinely need a colour value in JavaScript (timeline categories,
 * third-party components). If you change a value here, change it in
 * _tokens.scss too.
 */
export const theme = {
  colors: {
    primary: "#d97262",
    secondary: "#023558",
    accent: "#b15143",
    link: "#e94607",
    text: "#333333",
    background: "#ffffff",
    logo_black: "#242c37",
    gray: "#838383",
    surface_alt: "#f8f8f8",
  },

  /** Categories used to colour-code the Important Dates timeline. */
  timeline: {
    event: "#ce4646",
    submission: "#3d8cd1",
    notification: "#fb8c00",
    cameraready: "#922be5",
    other: "#242c37",
  },
};

export default theme;
