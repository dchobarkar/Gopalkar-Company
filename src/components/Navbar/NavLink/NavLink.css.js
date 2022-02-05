const NavLinkCSS = {
  tab: {
    padding: "1.5rem 0",
    fontSize: "var(--mobView-3)",
    listStyleType: "none",
  },
  active: {
    "& a:link,a:visited": {
      color: "var(--accent)",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    tab: {
      fontSize: "var(--tabView-3)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    tab: {
      padding: "0px 1rem",
      fontSize: "var(--desView-3)",
    },
  },
};

export default NavLinkCSS;
