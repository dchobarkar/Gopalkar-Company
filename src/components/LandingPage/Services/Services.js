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
    <section className={classes.root}>
      <h2 className={classes.header}>Services</h2>

      <div className={classes.container}>
        <div className={classes.list}>
          <h3>Audit & Assurance</h3>

          <ul>
            <li>Statutory Audits</li>
            <li>Compliance</li>
            <li>Internal Audits</li>
            <li>Stock Audits</li>
          </ul>
        </div>

        <div className={classes.list}>
          <h3>Business Advisory</h3>

          <ul>
            <li>Direct & Indirect Taxation</li>
            <li>GST Transactions</li>
            <li>Periodic Amendment Updates</li>
            <li>Statutory Transactions</li>
          </ul>
        </div>

        <div className={classes.list}>
          <h3>Start-up Assistance</h3>

          <ul>
            <li>Company Registration</li>
            <li>Project Financing & Fund Raising</li>
            <li>Devising Internal Procedures</li>
            <li>Tax, Accounting & Financial Compliance</li>
          </ul>
        </div>

        <div className={classes.list}>
          <h3>Business Process Management Assistance</h3>

          <ul>
            <li>Virtual CFO Services</li>
            <li>Books of Accounts</li>
            <li>MIS Reporting</li>
            <li>Statutory Compliance</li>
          </ul>
        </div>
      </div>

      <Link className={classes.link} to="/services">
        More Services
      </Link>
    </section>
  );
}

export default Services;
