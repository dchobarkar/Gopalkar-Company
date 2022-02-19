import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2 className={classes.header}>About Us</h2>

      <p className={classes.text}>
        Gopalkar & Company is a rapidly expanding chartered accounting business
        that was founded in 2021. We endeavour to give our clients the highest
        level of professionalism and ethics in order to help them expand their
        businesses effectively. By delivering best-in-class tax compliance
        solutions, our firm aspires to bring value to the organization's
        business. Our goal is to deliver effective and high-quality services
        that will assist businesses in focusing on their core competencies. We
        provide a comprehensive variety of corporate services, including direct
        and indirect taxes, as well as regulatory compliance. Our team of
        professionals aids organizations in resuming and maintaining their core
        business operations.
      </p>

      <Link className={classes.link} to="/about">
        More
      </Link>
    </section>
  );
}

export default About;
