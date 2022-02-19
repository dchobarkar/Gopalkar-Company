import { Lib32, Mont16, Padding, SectionHeight, TextCSS } from "../../css";

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
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h2": {
      ...Lib32,
      letterSpacing: "1px",
      textAlign: "center",
    },
    "& p": {
      paddingTop: "2rem",
      ...TextCSS,
    },
  },
  mediaIcons: {
    width: "100%",
    padding: "2rem 0 0 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
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
  form: {
    minHeight: "50vh",
    padding: "2rem 0 0.5rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    ...Mont16,
    ...TextCSS,
    "& input,input:focus,textarea": {
      width: "100%",
      margin: "0.5rem 0",
      padding: "0.2rem",
      outline: "none",
      border: "none",
      borderBottom: "1px solid var(--text-gray)",
    },
    "& label": {
      width: "100%",
      padding: "0.5rem 0",
    },
    "& div": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
  response: {
    display: "none",
    padding: "0.5rem",
    border: "1px solid #2DA64D",
    borderRadius: "0.5rem",
    fontSize: "0.8rem",
    textAlign: "center",
  },
  open: {
    display: "block",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "4rem",
      paddingBottom: "2rem",
    },
    text: {
      "& p": {
        width: "80%",
      },
    },
    mediaIcons: {
      width: "50%",
    },
    form: {
      width: "80%",
      padding: "4rem 0 1rem 0",
      "& input,input:focus,textarea": {
        margin: "1rem 0",
        padding: "0.4rem",
      },
      "& div": {
        justifyContent: "flex-end",
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "6rem",
      paddingBottom: "2rem",
    },
    text: {
      "& p": {
        width: "60%",
      },
    },
    mediaIcons: {
      width: "50%",
    },
    form: {
      width: "40%",
      padding: "6rem 0 1rem 0",
      "& input,input:focus,textarea": {
        margin: "1rem 0",
        padding: "0.4rem",
      },
      "& div": {
        justifyContent: "flex-end",
      },
    },
  },
};

export default ContactCSS;
