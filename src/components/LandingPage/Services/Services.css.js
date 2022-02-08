const ServicesCSS = {
  root: {
    minHeight: "75vh",
    padding: "0 30px",
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

  serviceContainer: {
    paddingBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  serviceList: {
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  subHeader: {
    padding: "1rem 0 0.5rem 0",
    fontSize: "var(--mobView-3)",
    fontFamily: "Liber_Baskerville",
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

    serviceContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    serviceList: {
      fontSize: "var(--tabView-4)",
    },

    subHeader: {
      padding: "2rem 0 1rem 0",
      fontSize: "var(--tabView-3)",
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

    serviceContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    serviceList: {
      fontSize: "var(--desView-4)",
    },

    subHeader: {
      padding: "2rem 0 1rem 0",
      fontSize: "var(--desView-3)",
    },
  },
};

export default ServicesCSS;
