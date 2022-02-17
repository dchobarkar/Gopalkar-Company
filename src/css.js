// Montserrat fonts
export const Mont16 = {
  fontFamily: "Montserrat,sans-serif",
  fontSize: "var(--mobView-4)",
  fontWeight: 300,

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-4)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-4)",
  },
};
export const Mont24 = {
  fontFamily: "Montserrat,sans-serif",
  fontSize: "var(--mobView-3)",
  fontWeight: 400,

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-3)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-3)",
  },
};
export const Mont32 = {
  fontFamily: "Montserrat,sans-serif",
  fontSize: "var(--mobView-2)",
  fontWeight: 600,

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-2)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-2)",
  },
};

// Libre_Baskerville fonts
export const Lib24 = {
  fontFamily: "Libre_Baskerville",
  fontSize: "var(--mobView-3)",
  fontWeight: 400,

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-3)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-3)",
  },
};
export const Lib32 = {
  fontFamily: "Libre_Baskerville",
  fontSize: "var(--mobView-2)",
  fontWeight: 700,

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-2)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-2)",
  },
};
export const Lib40 = {
  fontFamily: "Libre_Baskerville",
  fontSize: "var(--mobView-1)",
  fontWeight: 700,

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-1)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-1)",
  },
};

// Lato fonts
export const Lato24 = {
  fontSize: "var(--mobView-3)",

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    fontSize: "var(--tabView-3)",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    fontSize: "var(--desView-3)",
  },
};

export const Padding = {
  padding: "0 30px",

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    padding: "0 60px",
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    padding: "0 120px",
  },
};

export const SectionHeight = {
  minHeight: "85vh",
};

export const Link = {
  width: "200px",
  height: "50px",
  padding: "0.4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.5rem",
  textDecoration: "none",
  color: "var(--text-white)",
  backgroundColor: "var(--accent)",
  ...Mont24,

  "&:hover": {
    backgroundColor: "var(--accent-hover)",
  },
  "&:active": {
    backgroundColor: "var(--accent-active)",
  },
};
