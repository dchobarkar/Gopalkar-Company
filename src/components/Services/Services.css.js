const ServicesCSS = {
  root: {
    minHeight: "75vh",
    padding: "1rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "100%",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid var(--text-black)",

    "& h1": {
      padding: "2rem 0",
      textAlign: "center",
      fontSize: "var(--mobView-1)",
      fontFamily: "Libre_Baskerville",
    },

    "& a": {
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
  },

  container: {
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid var(--text-black)",

    "& h2": {
      padding: "1rem",
      fontSize: "var(--mobView-2)",
      fontFamily: "Libre_Baskerville",
    },

    "& h3": {
      padding: "1rem 0 0.5rem 0",
      fontSize: "var(--mobView-3)",
      fontFamily: "Libre_Baskerville",
    },

    "& p": {
      fontSize: "var(--mobView-4)",
      fontFamily: "Lato,sans-serif",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 60px",
    },

    header: {
      padding: "3rem 0 2rem 0",

      "& h1": {
        fontSize: "var(--tabView-1)",
      },

      "& a": {
        fontSize: "var(--tabView-3)",
      },
    },

    container: {
      padding: "2rem 0 1rem 0",

      "& h2": {
        fontSize: "var(--tabView-2)",
      },

      "& h3": {
        fontSize: "var(--tabView-3)",
      },

      "& p": {
        fontSize: "var(--tabView-4)",
      },

      "& div div div": {
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& div": {
          width: "50%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          "& h3": {
            width: "100%",
          },
        },
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 120px",
    },

    header: {
      padding: "3rem 0 2rem 0",
      alignItems: "flex-end",

      "& h1": {
        width: "100%",
        textAlign: "left",
        fontSize: "var(--desView-1)",
      },

      "& a": {
        fontSize: "var(--desView-3)",
      },
    },

    container: {
      padding: "2rem 0 1rem 0",
      flexDirection: "row",
      alignItems: "flex-start",

      "& h2": {
        width: "35%",
        paddingTop: "0px",
        fontSize: "var(--desView-2)",
      },

      "& h3": {
        fontSize: "var(--desView-3)",
      },

      "& p": {
        fontSize: "var(--desView-4)",
      },

      "& div": {
        width: "65%",

        "& div": {
          width: "100%",

          "& div": {
            width: "100%",
            padding: "1rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& div": {
              width: "50%",
              padding: "1rem 1rem 1rem 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              "& h3": {
                width: "100%",
              },
            },
          },
        },
      },
    },
  },
};

export default ServicesCSS;
