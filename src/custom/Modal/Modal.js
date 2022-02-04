import React from "react";
import { makeStyles } from "@material-ui/styles";

import ModalCSS from "./Modal.css";

// CSS
const useStyles = makeStyles({ ...ModalCSS });

// Driver component
function Modal() {
  const classes = useStyles();

  return <div className={classes.root}>Modal</div>;
}

export default Modal;
