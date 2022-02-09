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
        <h1 className={classes.header}>Header</h1>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper purus
          ultricies donec odio est et. Dignissim non magnis quam velit augue
          vitae urna. Hendrerit vivamus pellentesque venenatis risus nisl,
          aliquet velit. At tristique luctus id urna, in eu ante.
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
