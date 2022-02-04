import React from "react";
import { makeStyles } from "@material-ui/styles";

import BlogCSS from "./Blog.css";

// CSS
const useStyles = makeStyles({ ...BlogCSS });

// Driver component
function Blog() {
  const classes = useStyles();

  return <div className={classes.root}>Blog</div>;
}

export default Blog;
