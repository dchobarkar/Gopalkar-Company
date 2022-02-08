const AboutCSS = {
  root: {
    minHeight: "75vh",
    padding: "1rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    padding: "2rem",
    fontSize: "var(--mobView-2)",
    fontFamily: "Liber_Baskerville",
  },

  text: {
    paddingBottom: "2rem",
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  link: {
    width: "200px",
    height: "50px",
    padding: "0.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "var(--mobView-3)",
    textDecoration: "none",
    color: "var(--text-white)",
    backgroundColor: "var(--accent)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0 60px",
    },

    header: {
      fontSize: "var(--tabView-2)",
    },

    text: {
      maxWidth: "50vw",
      fontSize: "var(--tabView-4)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
    },

    header: {
      fontSize: "var(--desView-2)",
    },

    text: {
      maxWidth: "40vw",
      fontSize: "var(--desView-4)",
    },
  },
};

export default AboutCSS;
