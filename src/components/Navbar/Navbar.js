import React from "react";
import { makeStyles } from "@material-ui/styles";

import NavbarCSS from "./Navbar.css";

// CSS
const useStyles = makeStyles({ ...NavbarCSS });

// Driver component
function Navbar() {
  const classes = useStyles();

  return <div className={classes.root}>Navbar</div>;
}

export default Navbar;
