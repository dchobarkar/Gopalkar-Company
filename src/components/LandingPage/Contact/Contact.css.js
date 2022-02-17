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
  icon: {
    height: "1.5rem",
    width: "1.5rem",
    color: "var(--accent)",
  },
  text: {
    paddingLeft: "0.5rem",
    lineHeight: "1.3rem",
  },
  mediaIcons: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& div": {
      width: "50%",
      padding: "1rem 0",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  mediaIcon: {
    height: "2rem",
    width: "2rem",
    padding: "0.2rem",
    borderRadius: "2rem",
    color: "var(--accent)",
    border: "1px solid var(--accent-hover)",
    transition: "all 0.4s",
    "&:hover": {
      border: "2px double var(--accent-hover)",
      opacity: "0.9",
      transform: "rotate(360deg)",
      boxShadow: "2px 2px 24px var(--accent)",
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
