import React from "react";
import { makeStyles } from "@material-ui/styles";

import BlogListCSS from "./BlogList.css";

// CSS
const useStyles = makeStyles({ ...BlogListCSS });

// Driver component
function BlogList() {
  const classes = useStyles();

  return <div className={classes.root}>BlogList</div>;
}

export default BlogList;
