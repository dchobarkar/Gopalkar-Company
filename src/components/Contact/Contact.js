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
      <div>
        <h2>Some Cool Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing a,
          eleifend consequat nunc et ullamcorper luctus nisi quis. Platea ac
          egestas integer ipsum eget tempus commodo. Sapien, vitae integer
          porttitor elit tempus. Urna ut vulputate morbi proin consequat.
          Maecenas risus orci lectus sit lorem id. Sit in commodo natoque eu.
          Viverra sit imperdiet vulputate suspendisse nec gravida tempor id dui.
          Hendrerit imperdiet dui adipiscing tellus proin ullamcorper leo a. Sed
          volutpat morbi nullam lectus. Bibendum feugiat ipsum tincidunt sed
          amet, ridiculus nec. Dui, nunc nibh elit elementum tristique pulvinar
          felis, lacus. Gravida cursus amet vitae felis habitant adipiscing
          montes, nulla. In bibendum vestibulum in morbi id. Tristique et tortor
          fermentum aliquet adipiscing.
        </p>
      </div>

      <form>
        <label for="name">Name :</label>
        <input id="name" type="text" name="name" />

        <label for="email">Email :</label>
        <input id="email" type="email" name="email" />

        <label for="message">Message :</label>
        <input id="message" type="text" name="message" />

        <button type="submit">Send</button>
      </form>

      <div className={classes.mapBox}>
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
