import { Mont16, Padding, TextCSS } from "../../css";

const FooterCSS = {
  root: {
    minHeight: "5rem",
    ...Padding,
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    ...Mont16,
    ...TextCSS,
    color: "var(--text-gray)",
    backgroundColor: "var(--secondary)",
  },

  creator: {
    color: "var(--text-white)",
    textDecoration: "none",
    transform: "all 0.4s",
    "&:hover": {
      color: "var(--accent-hover)",
      transform: "all 0.4s",
    },
  },
};

export default FooterCSS;
