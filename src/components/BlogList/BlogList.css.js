const BlogListCSS = {
  root: {
    minHeight: "90vh",
    padding: "1rem 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottom: "1px solid var(--text-black)",
  },

  header: {
    fontSize: "var(--mobView-1)",
    fontFamily: "Libre_Baskerville",
  },

  info: {
    padding: "0.5rem 0",
    fontSize: "var(--mobView-4)",
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "300",
  },

  text: {
    fontSize: "var(--mobView-4)",
    fontFamily: "Lato,sans-serif",
  },

  link: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
    color: "var(--accent)",
    fontSize: "var(--mobView-3)",
    fontFamily: "Montserrat,sans-serif",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 60px",
    },

    container: {
      padding: "1rem 10%",
    },

    header: {
      fontSize: "var(--tabView-1)",
    },

    info: {
      fontSize: "var(--tabView-4)",
    },

    text: {
      fontSize: "var(--tabView-4)",
    },

    link: {
      fontSize: "var(--tabView-3)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 120px",
    },

    container: {
      padding: "1rem 15%",
    },

    header: {
      fontSize: "var(--desView-1)",
    },

    info: {
      fontSize: "var(--desView-4)",
    },

    text: {
      fontSize: "var(--desView-4)",
    },

    link: {
      fontSize: "var(--desView-3)",
    },
  },
};

export default BlogListCSS;
