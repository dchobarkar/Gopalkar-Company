import React from "react";
import { makeStyles } from "@material-ui/styles";

import NotFoundCSS from "./NotFound.css";

// CSS
const useStyles = makeStyles({ ...NotFoundCSS });

// Driver component
function NotFound() {
  const classes = useStyles();

  return <div className={classes.root}>Not Found Page</div>;
}

export default NotFound;
