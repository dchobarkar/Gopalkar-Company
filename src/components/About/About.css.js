import { Lib24, Padding, SectionHeight } from "../../css";
import Image from "../../assets/img/gopalkar-and-company-about.jpg";

const AboutCSS = {
  root: {
    ...SectionHeight,
    ...Padding,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "30%",
    height: "100vh",
    display: "none",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  header: {
    padding: "1rem 0",
    ...Lib24,
    color: "var(--accent)",
  },
  text: {
    paddingBottom: "2rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      alignItems: "flex-start",
    },
    image: {
      display: "block",
    },
    container: {
      width: "70%",
      paddingLeft: "2rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      alignItems: "flex-start",
    },
    image: {
      display: "block",
    },
    container: {
      width: "70%",
      padding: "0 10%",
    },
  },
};

export default AboutCSS;
