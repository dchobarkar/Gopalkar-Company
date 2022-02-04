import React from "react";
import { makeStyles } from "@material-ui/styles";

import TestinomialsCSS from "./Testinomials.css";

// CSS
const useStyles = makeStyles({ ...TestinomialsCSS });

// Driver component
function Testinomials() {
  const classes = useStyles();

  return <div className={classes.root}>Testinomials</div>;
}

export default Testinomials;
