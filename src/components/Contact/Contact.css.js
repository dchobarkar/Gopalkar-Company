import { Lib32, Mont16, Padding, SectionHeight } from "../../css";

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
    "& h2": { ...Lib32 },
    "& p": {
      paddingTop: "2rem",
    },
  },
  mediaIcons: {
    width: "100%",
    padding: "1rem 0 2rem 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    "& img": {
      height: "2rem",
      width: "2rem",
    },
  },
  form: {
    minHeight: "50vh",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    ...Mont16,
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
    form: {
      width: "80%",
      padding: "4rem 0",
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
    form: {
      width: "40%",
      padding: "6rem 0",
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
