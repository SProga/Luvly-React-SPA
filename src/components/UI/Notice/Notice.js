import React from "react";
import classes from "./Notice.module.scss";
import Img from "./notice.svg";

const Notice = () => {
  return (
    <span className={classes.exclamation}>
      <svg className={classes.icon}>
        <use xlinkHref={`${Img}#exclamation`}></use>
      </svg>
    </span>
  );
};

export default Notice;
