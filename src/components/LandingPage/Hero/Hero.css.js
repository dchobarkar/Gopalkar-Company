const HeroCSS = {
  root: {
    minHeight: "75vh",
    padding: "0 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    fontSize: "var(--mobView-1)",
    fontFamily: "Libre_Baskerville",
  },

  text: {
    padding: "1rem 0",
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0 60px",
      justifyContent: "flex-start",
    },

    hero: {
      flexDirection: "column",
      alignItems: "flex-start",
    },

    header: {
      fontSize: "var(--tabView-1)",
    },

    text: {
      fontSize: "var(--tabView-4)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0px 120px",
      justifyContent: "flex-start",
    },

    hero: {
      width: "40vw",
      flexDirection: "column",
      alignItems: "flex-start",
    },

    header: {
      fontSize: "var(--desView-1)",
    },

    text: {
      fontSize: "var(--desView-4)",
    },
  },
};

export default HeroCSS;
