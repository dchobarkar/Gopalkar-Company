import { Mont16, Padding } from "../../css";

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
    lineHeight: "1.3rem",
    ...Mont16,
    color: "var(--text-gray)",
    backgroundColor: "var(--secondary)",
  },

  creator: {
    color: "var(--text-white)",
    textDecoration: "none",
  },
};

export default FooterCSS;
