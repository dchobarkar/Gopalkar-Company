import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { ReactComponent as CloseIcon } from "../../assets/svg/Close.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/Menu.svg";
import NavLink from "./NavLink/NavLink";
import NavbarCSS from "./Navbar.css";

// CSS
const useStyles = makeStyles({ ...NavbarCSS });

// Driver component
function Navbar() {
  const classes = useStyles();

  // Flag to handle navbar state (Mobile view only)
  const [isOpen, setIsOpen] = useState(false);

  // Function to change the state of navbar menu
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Function to close the navbar menu
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className={classes.root}>
      <div className={classes.brand}>
        <Link to="/" onClick={closeMobileMenu}>
          Barbatos
        </Link>
      </div>

      <ul className={isOpen ? clsx(classes.menu, classes.open) : classes.menu}>
        <NavLink to="/services" label="Services" onClick={closeMobileMenu} />

        <NavLink to="/blog-list" label="Blog" onClick={closeMobileMenu} />

        <NavLink to="/about" label="About" onClick={closeMobileMenu} />

        <NavLink to="/contact" label="Contact" onClick={closeMobileMenu} />
      </ul>

      <div className={classes.navbarIcon} onClick={toggleNavbar}>
        {isOpen ? (
          <CloseIcon className={classes.icon} />
        ) : (
          <MenuIcon className={classes.icon} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
