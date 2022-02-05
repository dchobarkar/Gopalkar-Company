const NavbarCSS = {
  root: {
    height: "5rem",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "var(--secondary)",

    "& a:link,a:visited": {
      color: "var(--text-white)",
      textDecoration: "none",
    },
  },
  brand: {
    fontSize: "var(--mobView-2)",
  },
  menu: {
    width: "100%",
    height: "75vh",
    position: "absolute",
    top: "-100%",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
    transition: "all 0.7s ease",
  },
  open: {
    zIndex: "1",
    top: "5rem",
    backgroundColor: "var(--secondary)",
    opacity: "1",
    transition: "top 0.7s ease",
  },
  navbarIcon: {
    display: "block",
  },
  icon: {
    width: "2rem",
    height: "2rem",
    color: "var(--text-white)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "0px 60px",
    },
    brand: {
      fontSize: "var(--tabView-2)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      height: "5rem",
      padding: "0px 120px",
    },
    brand: {
      fontSize: "var(--desView-2)",
    },
    menu: {
      height: "5rem",
      position: "static",
      flexDirection: "row",
      justifyContent: "flex-end",
      opacity: "1",
    },
    navbarIcon: {
      display: "none",
    },
  },
};

export default NavbarCSS;
