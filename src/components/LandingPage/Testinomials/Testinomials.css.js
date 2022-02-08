const TestinomialsCSS = {
  root: {
    minHeight: "75vh",
    padding: "1rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--secondary)",
  },

  header: {
    padding: "2rem",
    fontSize: "var(--mobView-2)",
    fontFamily: "Liber_Baskerville",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  image: {},

  testinomial: {
    padding: "0 1rem 1rem 1rem",
  },

  text: {
    paddingBottom: "0.5rem",
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  name: {
    textAlign: "right",
    fontSize: "var(--mobView-4)",
    fontFamily: "Montserrat,sans-serif",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0 60px",
    },
    header: {
      fontSize: "var(--tabView-2)",
    },

    container: {
      padding: "1rem",
    },

    card: {
      maxWidth: "350px",
      padding: "1rem",
    },

    image: {},

    testinomial: {},

    text: {
      fontSize: "var(--tabView-4)",
    },

    name: {
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

    container: {
      width: "100%",
      padding: "1rem",
      justifyContent: "space-between",
    },

    card: {
      maxWidth: "350px",
      padding: "1rem",
    },

    image: {},

    testinomial: {},

    text: {
      fontSize: "var(--desView-4)",
    },

    name: {
      fontSize: "var(--desView-4)",
    },
  },
};

export default TestinomialsCSS;
