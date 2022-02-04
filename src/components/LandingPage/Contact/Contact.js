import React from "react";
import { makeStyles } from "@material-ui/styles";

import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact() {
  const classes = useStyles();

  return <div className={classes.root}>Contact</div>;
}

export default Contact;
