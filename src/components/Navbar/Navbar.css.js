import { Padding } from "../../css";

const NavbarCSS = {
  root: {
    minHeight: "5rem",
    ...Padding,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0 0 2px 2px",
    boxShadow: "2px 2px 24px var(--accent)",

    backgroundColor: "var(--secondary)",
  },
  brand: {
    "& img": {
      width: "7.5rem",
    },
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
  mediaIcons: {
    width: "50vw",
    paddingTop: "2.5rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    "& svg": {
      height: "2rem",
      width: "2rem",
      color: "var(--accent)",
    },
  },
  mediaIcon: {
    height: "2rem",
    width: "2rem",
    padding: "0.2rem",
    borderRadius: "2rem",
    color: "var(--accent)",
    border: "1px solid var(--accent-hover)",
  },
  icon: {
    width: "2rem",
    height: "2rem",
    color: "var(--text-white)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    brand: {
      "& img": {
        width: "10rem",
      },
    },
    menu: {
      height: "5rem",
      position: "static",
      flexDirection: "row",
      justifyContent: "flex-end",
      opacity: "1",
    },
    mediaIcons: {
      display: "none",
    },
    navbarIcon: {
      display: "none",
    },
  },
};

export default NavbarCSS;
