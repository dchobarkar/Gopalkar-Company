import { Lib32, Link, Padding, SectionHeight, TextCSS } from "../../../css";

const AboutCSS = {
  root: {
    ...SectionHeight,
    ...Padding,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: { ...Lib32, letterSpacing: "1px" },
  text: {
    padding: "2rem 0",
    ...TextCSS,
  },
  link: { ...Link },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      justifyContent: "space-around",
    },
    text: {
      maxWidth: "60vw",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      justifyContent: "space-around",
    },
    text: {
      maxWidth: "40vw",
    },
  },
};

export default AboutCSS;
