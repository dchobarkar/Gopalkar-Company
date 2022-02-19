import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import HeroCSS from "./Hero.css";

// CSS
const useStyles = makeStyles({ ...HeroCSS });

// Driver component
function Hero() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.hero}>
        <h1 className={classes.header}>LET’S MAKE FINANCES SIMPLE</h1>
        <p className={classes.text}>
          We are a group of experts who specialize in providing financial
          services to a wide range of businesses. We're here to walk you through
          the full process of starting a business so you can concentrate on what
          you do best.
        </p>
        <div>
          <Link className={classes.link} to="/contact">
            Hire Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
