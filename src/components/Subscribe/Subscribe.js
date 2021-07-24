import React from "react";
import classes from "./Subscribe.module.scss";
import subscribe from "./img/subscribe.png";
import Button from "../UI/Button/Button";

const Subscribe = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.subscribe}>
      <form action="#" onSubmit={formSubmitHandler} className={classes.form}>
        <h1 className={classes["form-title"]}>Subscribe to Our New Letter</h1>
        <div className={classes["form-group"]}>
          <label className={classes["form-label"]}>Email </label>
          <input
            tyoe="text"
            className={classes["form-input"]}
            placeholder="Enter Email"
            maxLength="40"
          ></input>
        </div>
        <div className={classes["form-group"]}>
          <label className={classes["form-label"]}>First Name </label>
          <input
            tyoe="text"
            className={classes["form-input"]}
            placeholder="Enter FirstName"
            maxLength="22"
          ></input>
        </div>
        <div className={classes["form-group"]}>
          <Button type="submit" btn="btn--subscribe">
            Subscribe
          </Button>
        </div>
        <img className={classes.subscribeImg} src={subscribe} alt="" />
      </form>
    </div>
  );
};

export default Subscribe;
