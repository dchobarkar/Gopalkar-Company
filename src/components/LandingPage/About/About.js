import React from "react";
import { makeStyles } from "@material-ui/styles";

import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About() {
  const classes = useStyles();

  return <div className={classes.root}>About</div>;
}

export default About;
