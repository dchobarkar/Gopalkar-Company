import { Padding } from "../../css";

const NavbarCSS = {
  root: {
    height: "5rem",
    ...Padding,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0 0 2px 2px",
    boxShadow: "0px 1px 10px var(--accent)",
    backgroundColor: "var(--secondary)",
  },
  brand: {},
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

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
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
