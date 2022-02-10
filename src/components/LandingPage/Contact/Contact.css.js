import { Lib32, Padding, SectionHeight } from "../../../css";

const ContactCSS = {
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
    paddingTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  address: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "& div": {
      padding: "0.25rem 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& div": {
        marginBottom: "auto",
        padding: "0",
        height: "100%",
      },
    },
  },
  image: {
    height: "1.5rem",
    width: "1.5rem",
  },
  text: {
    paddingLeft: "0.5rem",
    lineHeight: "1.3rem",
  },
  mediaIcons: {
    padding: "1rem 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    "& img": {
      height: "2rem",
      width: "2rem",
    },
  },
  map: {
    height: "100%",
    width: "100%",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    container: {
      paddingTop: "2rem",
      height: "50vh",
      width: "100%",
      flexDirection: "row",
    },
    address: {
      minWidth: "40vw",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    container: {
      paddingTop: "2rem",
      height: "50vh",
      width: "60vw",
      flexDirection: "row",
    },
    address: {
      minWidth: "300px",
    },
  },
};

export default ContactCSS;
