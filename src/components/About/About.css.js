const AboutCSS = {
  root: {
    padding: "1rem 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    display: "none",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  header: {
    padding: "1rem 0",
    color: "var(--accent)",
    fontSize: "var(--mobView-3)",
    fontFamily: "Libre_Baskerville",
  },

  text: {
    paddingBottom: "2rem",
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  mapBox: {
    padding: "1rem 30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  information: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  map: {
    width: "100%",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 60px",
    },

    image: {
      width: "30%",
      display: "block",
    },

    container: {
      width: "70%",
    },

    header: {
      fontSize: "var(--tabView-3)",
    },

    text: {
      fontSize: "var(--tabView-4)",
    },

    mapBox: {
      padding: "1rem 60px",
    },

    information: {
      fontSize: "var(--tabView-4)",
    },

    map: {
      width: "100%",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 120px",
    },

    image: {
      width: "30%",
      display: "block",
    },

    container: {
      width: "70%",
      padding: "0 10%",
    },

    header: {
      fontSize: "var(--desView-3)",
    },

    text: {
      fontSize: "var(--desView-4)",
    },

    mapBox: {
      padding: "1rem 120px",
    },

    information: {
      fontSize: "var(--desView-4)",
    },

    map: {
      width: "100%",
    },
  },
};

export default AboutCSS;
