import React from "react";
import { makeStyles } from "@material-ui/styles";

import HeroCSS from "./Hero.css";

// CSS
const useStyles = makeStyles({ ...HeroCSS });

// Driver component
function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <h1 className={classes.header}>Header</h1>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper purus
          ultricies donec odio est et. Dignissim non magnis quam velit augue
          vitae urna. Hendrerit vivamus pellentesque venenatis risus nisl,
          aliquet velit. At tristique luctus id urna, in eu ante.
        </p>

        <button className={classes.button}>Hire Us</button>
      </div>
    </div>
  );
}

export default Hero;
