import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import Author from "../../assets/img/gopalkar-and-company-chetan.png";
import BlogListCSS from "./BlogList.css";

// CSS
const useStyles = makeStyles({ ...BlogListCSS });

// Driver component
function BlogList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial1"
            src={Author}
          />

          <p>by Darshan Chobarkar | 20 Sept. 2021</p>
        </div>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          a eget lobortis ullamcorper consectetur pellentesque. Potenti laoreet
          volutpat adipiscing accumsan. Massa tellus suspendisse magnis
          ultricies risus a dui parturient. Orci consectetur in libero enim,
          proin donec placerat ut. Id orci vitae elementum id ut. Praesent in
          elit viverra porttitor odio ornare consectetur egestas quis. Morbi.
        </p>

        <Link className={classes.link} to="/blog">
          Read More
        </Link>
      </section>

      <section className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial1"
            src={Author}
          />

          <p>by Darshan Chobarkar | 20 Sept. 2021</p>
        </div>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          a eget lobortis ullamcorper consectetur pellentesque. Potenti laoreet
          volutpat adipiscing accumsan. Massa tellus suspendisse magnis
          ultricies risus a dui parturient. Orci consectetur in libero enim,
          proin donec placerat ut. Id orci vitae elementum id ut. Praesent in
          elit viverra porttitor odio ornare consectetur egestas quis. Morbi.
        </p>

        <Link className={classes.link} to="/blog">
          Read More
        </Link>
      </section>

      <section className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial1"
            src={Author}
          />

          <p>by Darshan Chobarkar | 20 Sept. 2021</p>
        </div>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          a eget lobortis ullamcorper consectetur pellentesque. Potenti laoreet
          volutpat adipiscing accumsan. Massa tellus suspendisse magnis
          ultricies risus a dui parturient. Orci consectetur in libero enim,
          proin donec placerat ut. Id orci vitae elementum id ut. Praesent in
          elit viverra porttitor odio ornare consectetur egestas quis. Morbi.
        </p>

        <Link className={classes.link} to="/blog">
          Read More
        </Link>
      </section>

      <section className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
          <img
            className={classes.image}
            alt="gopalkar-and-company-testinomial1"
            src={Author}
          />

          <p>by Darshan Chobarkar | 20 Sept. 2021</p>
        </div>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          a eget lobortis ullamcorper consectetur pellentesque. Potenti laoreet
          volutpat adipiscing accumsan. Massa tellus suspendisse magnis
          ultricies risus a dui parturient. Orci consectetur in libero enim,
          proin donec placerat ut. Id orci vitae elementum id ut. Praesent in
          elit viverra porttitor odio ornare consectetur egestas quis. Morbi.
        </p>

        <Link className={classes.link} to="/blog">
          Read More
        </Link>
      </section>
    </div>
  );
}

export default BlogList;
