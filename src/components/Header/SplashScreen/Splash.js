import React from "react";
import classes from "./Splash.module.scss";
import Button from "../../UI/Button/Button";
import SplashSofa from "../../../assets/img/furniture--01.png";

const Splash = (props) => {
  return (
    <div className={classes.splash}>
      <h1 className={`${classes.title} ${classes["mt-m"]}`}>
        Enhance your room with a our <span className={classes.new}> new </span>
        living room sets
      </h1>
      <div className={classes.wrapper}>
        <img src={SplashSofa} alt="our new sofa set" />
      </div>
      <Button type="button" btn="btn--browse">
        Browse Sets
      </Button>
    </div>
  );
};

export default Splash;
