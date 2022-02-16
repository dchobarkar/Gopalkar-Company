import { Lib40, Link, Padding, SectionHeight } from "../../../css";
import Image from "../../../assets/img/gopalkar-and-company-office.png";

const HeroCSS = {
  root: {
    ...SectionHeight,
    ...Padding,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    ...Lib40,
  },
  text: {
    padding: "3rem 0 2rem 0",
  },
  link: {
    ...Link,
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      justifyContent: "flex-start",
    },
    hero: {
      width: "75%",
      alignItems: "flex-start",
      "& div": {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      justifyContent: "flex-start",
    },
    hero: {
      width: "40vw",
      alignItems: "flex-start",
      "& div": {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      },
    },
  },
};

export default HeroCSS;
