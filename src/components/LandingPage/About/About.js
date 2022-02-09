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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit ac
        elementum suspendisse id fermentum. Dui pharetra vulputate convallis
        elit nisl sed lacus. Facilisis congue purus condimentum risus a.
        Venenatis, augue leo molestie non nam adipiscing sed. Mauris ultrices ut
        sem sapien. Pretium ornare vel, nec turpis maecenas pellentesque. Etiam
        in et porta aliquam eu tincidunt vestibulum id. Nunc vitae pharetra sed
        porttitor gravida nibh. In proin at senectus nam semper sit. Auctor sed
        et consequat sed fames placerat eu egestas dis. A amet sit enim, magna
        sed enim, sed fringilla volutpat. Senectus tortor lorem ut nec aliquet
        turpis venenatis enim hendrerit. Proin non velit ipsum senectus
        fermentum aenean vehicula dignissim. A venenatis risus mauris at. Sed
        nunc volutpat commodo ultricies commodo viverra. Amet dolor tellus
        nullam nunc sollicitudin. Id duis quam enim integer. Eu et dui pretium
        vulputate quam montes, et quis. At consectetur viverra id congue. Purus
        elementum sit dis fusce. Sagittis massa donec at fermentum eu orci.
        Egestas suspendisse lectus at semper et, feugiat. Ut et viverra commodo
        a. In sollicitudin ut lorem congue volutpat turpis cras. Amet, aliquam
        diam hendrerit sed tortor nisl dolor. Ante sem at sit et vel nec. In
        turpis vel porttitor amet fermentum proin mollis vel varius. Vel quisque
        phasellus pharetra, lorem tellus. Erat consequat cursus quam eget sed
        ipsum in placerat. Mi id ultricies vitae auctor non dolor ac. Bibendum
        netus blandit donec tristique sollicitudin dis. Turpis nulla ornare
        aliquam magna et. Vitae mauris eleifend lectus fringilla. Gravida
        pharetra suspendisse donec non, diam fermentum leo diam praesent. Turpis
        vel turpis lacinia consectetur. Tortor accumsan mauris arcu metus,
        iaculis egestas hendrerit quis tellus. Nibh.
      </p>

      <Link className={classes.link} to="/about">
        More
      </Link>
    </section>
  );
}

export default About;
