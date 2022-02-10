import { Lib24, Lib32, Lib40, Link, Padding, SectionHeight } from "../../css";

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
  header: {
    width: "100%",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid var(--text-black)",
    "& h1": {
      padding: "2rem 0",
      textAlign: "center",
      ...Lib40,
    },
    "& a": { ...Link },
  },
  container: {
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid var(--text-black)",
    "& h2": {
      padding: "1rem",
      ...Lib32,
    },
    "& h3": {
      padding: "1rem 0 0.5rem 0",
      ...Lib24,
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    header: {
      padding: "3rem 0 2rem 0",
    },
    container: {
      padding: "2rem 0 1rem 0",
      "& div div div": {
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& div": {
          width: "50%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& h3": {
            width: "100%",
          },
        },
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    header: {
      padding: "3rem 0 2rem 0",
      alignItems: "flex-end",
      "& h1": {
        width: "100%",
        textAlign: "left",
      },
    },
    container: {
      padding: "2rem 0 1rem 0",
      flexDirection: "row",
      alignItems: "flex-start",
      "& h2": {
        width: "35%",
        paddingTop: "0px",
      },
      "& div": {
        width: "65%",
        "& div": {
          width: "100%",
          "& div": {
            width: "100%",
            padding: "1rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& div": {
              width: "50%",
              padding: "1rem 1rem 1rem 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "& h3": {
                width: "100%",
              },
            },
          },
        },
      },
    },
  },
};

export default ServicesCSS;
