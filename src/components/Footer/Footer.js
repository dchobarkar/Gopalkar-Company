import React from "react";
import { makeStyles } from "@material-ui/styles";

import FooterCSS from "./Footer.css";

// CSS
const useStyles = makeStyles({ ...FooterCSS });

// Driver component
function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <p>
        © Copyright 2022 All Rights Reserved | Website Designed By{" "}
        <a
          className={classes.creator}
          href="https://www.linkedin.com/in/dchobarkar/"
          target="_blank"
          rel="noreferrer"
        >
          Darshan Chobarkar
        </a>
      </p>
    </footer>
  );
}

export default Footer;
