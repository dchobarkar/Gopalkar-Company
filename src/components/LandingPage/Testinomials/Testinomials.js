import React from "react";
import { makeStyles } from "@material-ui/styles";

import Image1 from "../../../assets/img/gopalkar-and-company-testinomial1.png";
import Image2 from "../../../assets/img/gopalkar-and-company-testinomial2.png";
import Image3 from "../../../assets/img/gopalkar-and-company-testinomial3.png";
import TestinomialsCSS from "./Testinomials.css";

// CSS
const useStyles = makeStyles({ ...TestinomialsCSS });

// Driver component
function Testinomials() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2 className={classes.header}>Testimonials</h2>

      <div className={classes.container}>
        <div className={classes.card}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial1"
            src={Image1}
          />

          <div className={classes.testinomial}>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              facilisi rutrum dignissim eget id eget diam accumsan viverra.
              Mauris nulla pretium cursus sit placerat curabitur est. Ultrices
              ornare porttitor duis sed. Sem nunc vitae integer sociis sit
              pretium nisl nisl pulvinar. Scelerisque arcu curabitur ac,
              eleifend. Amet vitae enim, neque pharetra, eu dolor. Aliquam non
              habitant lobortis neque sed suspendisse. Enim vehicula sem orci
              sem turpis dui enim.
            </p>

            <p className={classes.name}>- User Name, Post</p>
          </div>
        </div>

        <div className={classes.card}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial2"
            src={Image2}
          />

          <div className={classes.testinomial}>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              facilisi rutrum dignissim eget id eget diam accumsan viverra.
              Mauris nulla pretium cursus sit placerat curabitur est. Ultrices
              ornare porttitor duis sed. Sem nunc vitae integer sociis sit
              pretium nisl nisl pulvinar. Scelerisque arcu curabitur ac,
              eleifend. Amet vitae enim, neque pharetra, eu dolor. Aliquam non
              habitant lobortis neque sed suspendisse. Enim vehicula sem orci
              sem turpis dui enim.
            </p>

            <p className={classes.name}>- User Name, Post</p>
          </div>
        </div>

        <div className={classes.card}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial3"
            src={Image3}
          />

          <div className={classes.testinomial}>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              facilisi rutrum dignissim eget id eget diam accumsan viverra.
              Mauris nulla pretium cursus sit placerat curabitur est. Ultrices
              ornare porttitor duis sed. Sem nunc vitae integer sociis sit
              pretium nisl nisl pulvinar. Scelerisque arcu curabitur ac,
              eleifend. Amet vitae enim, neque pharetra, eu dolor. Aliquam non
              habitant lobortis neque sed suspendisse. Enim vehicula sem orci
              sem turpis dui enim.
            </p>

            <p className={classes.name}>- User Name, Post</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testinomials;
