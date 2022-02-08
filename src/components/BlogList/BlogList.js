import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import BlogListCSS from "./BlogList.css";

// CSS
const useStyles = makeStyles({ ...BlogListCSS });

// Driver component
function BlogList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
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
      </div>

      <div className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
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
      </div>

      <div className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
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
      </div>
      <div className={classes.container}>
        <h2 className={classes.header}>Header</h2>

        <div className={classes.info}>
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

        <div className={classes.link}>
          <Link to="/blog">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
