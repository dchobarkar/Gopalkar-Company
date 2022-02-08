import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import ServicesCSS from "./Services.css";

// CSS
const useStyles = makeStyles({ ...ServicesCSS });

// Driver component
function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Services</h2>

      <div className={classes.serviceContainer}>
        <div className={classes.serviceList}>
          <h3 className={classes.subHeader}>Service 1</h3>

          <ul>
            <li>Sub - service 1</li>
            <li>Sub - service 2</li>
            <li>Sub - service 3</li>
            <li>Sub - service 4</li>
          </ul>
        </div>

        <div className={classes.serviceList}>
          <h3 className={classes.subHeader}>Service 2</h3>

          <ul>
            <li>Sub - service 1</li>
            <li>Sub - service 2</li>
            <li>Sub - service 3</li>
            <li>Sub - service 4</li>
          </ul>
        </div>

        <div className={classes.serviceList}>
          <h3 className={classes.subHeader}>Service 3</h3>

          <ul>
            <li>Sub - service 1</li>
            <li>Sub - service 2</li>
            <li>Sub - service 3</li>
            <li>Sub - service 4</li>
          </ul>
        </div>

        <div className={classes.serviceList}>
          <h3 className={classes.subHeader}>Service 4</h3>

          <ul>
            <li>Sub - service 1</li>
            <li>Sub - service 2</li>
            <li>Sub - service 3</li>
            <li>Sub - service 4</li>
          </ul>
        </div>
      </div>

      <Link className={classes.link} to="/services">
        More Services
      </Link>
    </div>
  );
}

export default Services;
