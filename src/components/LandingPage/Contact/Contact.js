import React from "react";
import { makeStyles } from "@material-ui/styles";

import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Contact</h2>

      <div className={classes.container}>
        <div className={classes.information}>
          <p>Mobile No. : 9404168827</p>
          <p>Email : dchobarkar@gmail.com</p>
          <p>
            Address : "Sudarshan", Dindayal Colony, <br />
            Mandva Road,
            <br />
            Ambajogai 431517
          </p>

          <p>LinkedIn</p>
          <p>Email</p>
        </div>

        <div className={classes.map}></div>
      </div>
    </div>
  );
}

export default Contact;
