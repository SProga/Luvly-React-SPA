import React from "react";
import classes from "./Logo.module.scss";
import Luvly from "../../../assets/img/Luvly.png";

const Logo = (props) => {
  return (
    <div>
      <img className={classes.logo} src={Luvly} alt="Luvly Home Icon" />
    </div>
  );
};

export default Logo;
