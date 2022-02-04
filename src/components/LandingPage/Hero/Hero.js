import React from "react";
import { makeStyles } from "@material-ui/styles";

import HeroCSS from "./Hero.css";

// CSS
const useStyles = makeStyles({ ...HeroCSS });

// Driver component
function Hero() {
  const classes = useStyles();

  return <div className={classes.root}>Hero Section</div>;
}

export default Hero;
