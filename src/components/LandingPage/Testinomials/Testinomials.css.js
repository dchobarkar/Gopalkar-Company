import { Lib32, Mont16, Padding, SectionHeight } from "../../../css";

const TestinomialsCSS = {
  root: {
    ...SectionHeight,
    ...Padding,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--secondary)",
  },
  header: { ...Lib32 },
  container: {
    paddingTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    paddingBottom: "1rem",
    display: "flex",
  },
  image: {
    width: "3rem",
    height: "3rem",
  },
  testinomial: {
    padding: "0 0 1rem 1rem",
  },
  text: {
    paddingBottom: "0.5rem",
  },
  name: {
    textAlign: "right",
    ...Mont16,
    color: "var(--text-gray)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    card: {
      maxWidth: "350px",
      padding: "1rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    container: {
      width: "100%",
      justifyContent: "space-between",
    },
    card: {
      maxWidth: "350px",
      padding: "1rem",
    },
  },
};

export default TestinomialsCSS;
