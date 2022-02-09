const ContactCSS = {
  root: {},
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

export default ContactCSS;
