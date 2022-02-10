import React from "react";
import { makeStyles } from "@material-ui/styles";

import Icon1 from "../../../assets/img/icon-mobile.png";
import Icon2 from "../../../assets/img/icon-email.png";
import Icon3 from "../../../assets/img/icon-address.png";
import Icon4 from "../../../assets/img/icon-linkedin.png";
import Icon5 from "../../../assets/img/icon-gmail.png";
import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2 className={classes.header}>Contact</h2>

      <div className={classes.container}>
        <div>
          <div className={classes.address}>
            <div>
              <img
                className={classes.image}
                alt="gopalkar-and-company-mobile"
                src={Icon1}
              />

              <p className={classes.text}>9421061989</p>
            </div>

            <div>
              <img
                className={classes.image}
                alt="gopalkar-and-company-email"
                src={Icon2}
              />

              <p className={classes.text}>gopalkar.ca@gmail.com</p>
            </div>

            <div>
              <div>
                <img
                  className={classes.image}
                  alt="gopalkar-and-company-address"
                  src={Icon3}
                />
              </div>

              <p className={classes.text}>
                Plot no.26, Cosmos Gardens,
                <br />
                Next to Learning Curve School,
                <br />
                Near Hotel Grillicious,
                <br />
                Baner, Pune - 411045
              </p>
            </div>
          </div>

          <div className={classes.mediaIcons}>
            <a
              href="https://in.linkedin.com/in/ca-chetan-gopalkar-62456066"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="gopalkar-and-company-linkedin" src={Icon4} />
            </a>

            <a href="mailto: gopalkar.ca@gmail.com">
              <img alt="gopalkar-and-company-email" src={Icon5} />
            </a>
          </div>
        </div>

        <div className={classes.map}>
          <iframe
            title="gopalkar-and-company-address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.279526239389!2d73.78137176485787!3d18.561432537385176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf71c4ca6f29%3A0xdeeeda98108514be!2sGopalkar%20%26%20Company!5e0!3m2!1sen!2sin!4v1644489498352!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
