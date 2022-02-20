import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/styles";

import GIF from "../../assets/img/gopalkar-and-company-page-not-found.gif";
import NotFoundCSS from "./NotFound.css";

// CSS
const useStyles = makeStyles({ ...NotFoundCSS });

// Driver component
function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Page Not Found - Gopalkar & Company</title>
      </Helmet>

      <img
        className={classes.image}
        alt="gopalkar-and-company-page-not-found"
        src={GIF}
      />

      <h2 className={classes.header}>404 Page Not Found</h2>

      <p className={classes.text}>
        These are uncharted territory
        <br />
        Looking to explore?
        <br />
        Start from homepage
      </p>

      <Link className={classes.link} to="/">
        Home Page
      </Link>
    </div>
  );
}

export default NotFound;
