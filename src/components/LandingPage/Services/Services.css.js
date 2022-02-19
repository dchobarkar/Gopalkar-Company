import {
  Lib24,
  Lib32,
  Link,
  Padding,
  SectionHeight,
  TextCSS,
} from "../../../css";

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
  header: { ...Lib32, letterSpacing: "1px" },
  container: {
    padding: "1.5rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    textAlign: "center",
    "& h3": {
      padding: "1rem 0 0.5rem 0",
      ...Lib24,
      letterSpacing: "1px",
    },
    "& ul": {
      "& li": {
        ...TextCSS,
        listStyleType: "none",
      },
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
      flexWrap: "wrap",
      flexDirection: "row",
    },
    list: {
      minWidth: "300px",
      padding: "2rem",
    },
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
      flexWrap: "wrap",
      flexDirection: "row",
    },
    list: {
      minWidth: "300px",
      padding: "2rem",
    },
  },
};

export default ServicesCSS;
