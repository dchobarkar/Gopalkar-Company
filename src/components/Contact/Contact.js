import React from "react";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as EmailIcon } from "../../assets/svg/email.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svg/linkedin.svg";
import ContactSection from "../LandingPage/Contact/Contact";
import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
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

        <div className={classes.mediaIcons}>
          <a
            href="https://in.linkedin.com/in/ca-chetan-gopalkar-62456066"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a href="mailto: gopalkar.ca@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>

      <form
        className={classes.form}
        action="https://formspree.io/f/xzborpzd"
        method="POST"
      >
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" name="name" placeholder="Name" required />

        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Message"
          required
        />

        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <ContactSection />
    </div>
  );
}

export default Contact;
