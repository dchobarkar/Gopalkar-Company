import React from "react";
import { makeStyles } from "@material-ui/styles";

import ServicesCSS from "./Services.css";

// CSS
const useStyles = makeStyles({ ...ServicesCSS });

// Driver component
function Services() {
  const classes = useStyles();

  return <div className={classes.root}>Services</div>;
}

export default Services;
