import React from "react";
import classes from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className={classes.header}>
      <Navigation />
    </div>
  );
};

export default Header;
