import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${classes.btn} ${classes[props.btn]} ${classes["mt-m"]}`}
      type={props.type}
      onClick={props.action}
      disabled={props.disabled === true ? props.disabled : false}
    >
      {props.children}
    </button>
  );
};

export default Button;
