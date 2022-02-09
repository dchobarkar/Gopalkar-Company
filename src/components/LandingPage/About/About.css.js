import { Lib32, Link, Padding, SectionHeight } from "../../../css";

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
  header: { ...Lib32 },
  text: { padding: "1rem" },
  link: { ...Link },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      justifyContent: "space-around",
    },
    text: {
      maxWidth: "80vw",
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
      maxWidth: "50vw",
    },
  },
};

export default AboutCSS;
