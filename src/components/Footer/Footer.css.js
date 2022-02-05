const FooterCSS = {
  root: {
    padding: "1rem 30px",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-3)",
    textAlign: "center",
    color: "var(--text-gray)",
    backgroundColor: "var(--secondary)",
  },

  creator: {
    color: "var(--text-white)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 60px",
      fontSize: "var(--tabView-3)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 120px",
      fontSize: "var(--desView-3)",
    },
  },
};

export default FooterCSS;
