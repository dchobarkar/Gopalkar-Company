import { TextCSS } from "../../../css";

const NavLinkCSS = {
  tab: {
    padding: "1.5rem 0",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-3)",
    fontWeight: 400,
    listStyleType: "none",
    ...TextCSS,

    "& a:link,a:visited": {
      color: "var(--text-white)",
      textDecoration: "none",
    },

    /* Tablet view */
    "@media only screen and (min-width: 401px) and (max-width: 960px)": {
      fontSize: "var(--tabView-3)",
    },

    /* Desktop view */
    "@media only screen and (min-width: 961px)": {
      fontSize: "1.25rem",
    },
  },

  active: {
    "& a:link,a:visited": {
      color: "var(--accent)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    tab: {
      padding: "0px 1rem",
    },
  },
};

export default NavLinkCSS;
