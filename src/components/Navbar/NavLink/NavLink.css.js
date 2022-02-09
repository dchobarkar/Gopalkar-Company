import { Mont24 } from "../../../css";

const NavLinkCSS = {
  tab: {
    padding: "1.5rem 0",
    ...Mont24,
    listStyleType: "none",

    "& a:link,a:visited": {
      color: "var(--text-white)",
      textDecoration: "none",
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
