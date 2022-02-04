import React from "react";
import { makeStyles } from "@material-ui/styles";

import FooterCSS from "./Footer.css";

// CSS
const useStyles = makeStyles({ ...FooterCSS });

// Driver component
function Footer() {
  const classes = useStyles();

  return <div className={classes.root}>Footer</div>;
}

export default Footer;
