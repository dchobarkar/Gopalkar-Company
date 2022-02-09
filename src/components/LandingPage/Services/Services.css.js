import { Lib24, Lib32, Link, Padding, SectionHeight } from "../../../css";

const ServicesCSS = {
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
  container: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    "& h3": {
      padding: "1rem 0 0.5rem 0",
      ...Lib24,
    },
  },
  link: { ...Link },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      justifyContent: "space-around",
    },
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    list: {},
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      justifyContent: "space-around",
    },
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    list: {},
  },
};

export default ServicesCSS;
