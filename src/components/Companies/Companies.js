import React from "react";
import classes from "./Companies.module.scss";
import Sprite from "./img/sprite.svg";

const Companies = (props) => {
  return (
    <section className={classes.companies}>
      <h1 className={classes.title}>
        Backed <span className={classes.color}>by</span>
      </h1>
      <div className={classes["companies--grid"]}>
        <div className={classes.pill}>
          <svg className={classes.icon}>
            <use xlinkHref={`${Sprite}#greens-food-suppliers`}></use>
          </svg>
        </div>
        <div className={classes.pill}>
          <svg className={classes.icon}>
            <use xlinkHref={`${Sprite}#cheshire-county-hygiene-services`}></use>
          </svg>
        </div>
        <div className={classes.pill}>
          <svg className={classes.icon}>
            <use xlinkHref={`${Sprite}#james-and-sons`}></use>
          </svg>
        </div>
        <div className={classes.pill}>
          <svg className={classes.icon}>
            <use xlinkHref={`${Sprite}#fast-banana`}></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Companies;
