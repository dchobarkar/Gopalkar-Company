import React from "react";
import { makeStyles } from "@material-ui/styles";

import SpinnerCSS from "./Spinner.css";

// CSS
const useStyles = makeStyles({ ...SpinnerCSS });

// Driver component
function Spinner() {
  const classes = useStyles();

  return <div className={classes.root}>Spinner</div>;
}

export default Spinner;
