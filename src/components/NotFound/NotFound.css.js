import { Lib24, Link, Padding, TextCSS } from "../../css";

const NotFoundCSS = {
  root: {
    minHeight: "85vh",
    ...Padding,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    maxHeight: "400px",
    maxWidth: "400px",
  },
  header: { ...Lib24, letterSpacing: "1px" },
  text: {
    padding: "2rem 0",
    ...TextCSS,
    textAlign: "center",
  },
  link: { ...Link },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingBottom: "2rem",
    },
    text: {
      width: "80%",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingBottom: "2rem",
    },
    text: {
      width: "60%",
    },
  },
};

export default NotFoundCSS;
