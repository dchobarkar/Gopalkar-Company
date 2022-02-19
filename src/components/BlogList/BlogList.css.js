import { Lib32, Mont16, Padding, SectionHeight, TextCSS } from "../../css";

const BlogListCSS = {
  root: {
    ...SectionHeight,
    ...Padding,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottom: "1px solid var(--text-black)",
  },
  header: { ...Lib32, letterSpacing: "1px" },
  info: {
    padding: "0.5rem 0",
    display: "flex",
    alignItems: "center",
    ...Mont16,
    ...TextCSS,
    color: "var(--text-gray)",
    "& p": {
      paddingLeft: "1rem",
    },
  },
  image: {
    height: "2rem",
    width: "2rem",
  },
  link: {
    width: "100%",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
    color: "var(--accent)",
    ...Mont16,

    "&:hover": {
      color: "var(--accent-hover)",
    },
    "&:active": {
      color: "var(--accent-active)",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    container: {
      padding: "2rem 10%",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    container: {
      padding: "4rem 15%",
    },
  },
};

export default BlogListCSS;
