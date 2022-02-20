import React from "react";
import { useForm } from "@formspree/react";
import clsx from "clsx";
import { Helmet } from "react-helmet";
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

  // Formspree handler
  const [state, handlerSubmit] = useForm("xzborpzd");

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Contact - Gopalkar & Company</title>

        <meta
          name="description"
          content="We are here to help. If you have a question or would like to speak to one of our team members, submit your inquiry below and we'll be in touch shortly."
        />
      </Helmet>

      <div className={classes.text}>
        <h2>Gopalkar & Company Help Desk</h2>

        <p>
          If you have any questions or concerns, a member of staff would be
          pleased to assist you. Please contact us by phone or email, and we
          will get back to you as soon as possible.
        </p>

        <div className={classes.mediaIcons}>
          <a
            href="https://in.linkedin.com/in/ca-chetan-gopalkar-62456066"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.mediaIcon} />
          </a>

          <a href="mailto: gopalkar.ca@gmail.com">
            <EmailIcon className={classes.mediaIcon} />
          </a>
        </div>
      </div>

      <form className={classes.form} onSubmit={handlerSubmit}>
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
          <button type="submit" disabled={state.succeeded}>
            Send
          </button>
        </div>
      </form>

      <div
        className={
          state.succeeded
            ? clsx(classes.response, classes.open)
            : classes.response
        }
      >
        Thank you for your message. We will get back to you soon.
      </div>

      <ContactSection />
    </div>
  );
}

export default Contact;
