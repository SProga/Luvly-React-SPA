import React from "react";
import classes from "./Description.module.scss";
import Sprite from "./img/sprite.svg";

const Description = (props) => {
  return (
    <section className={classes.description}>
      <div className={classes.content}>
        <div className={classes["content-group"]}>
          <figure className={"content-group-wrapper"}>
            <svg className="icon">
              <use xlinkHref={`${Sprite}#online-order`}></use>
            </svg>
          </figure>
          <h1>Order</h1>
          <p>choose from our beautiful sets. Chairs, Beds and much more!</p>
        </div>
        <div className={classes["content-group"]}>
          <figure className={"content-group-wrapper"}>
            <svg className="icon">
              <use xlinkHref={`${Sprite}#order`}></use>
            </svg>
          </figure>
          <h1>Confirmation</h1>
          <p>
            Add Item to cart and confirm by
            <span className={classes.color}> login</span> or by guest
          </p>
        </div>
        <div className={classes["content-group"]}>
          <figure className={"content-group-wrapper"}>
            <svg className="icon">
              <use xlinkHref={`${Sprite}#truck`}></use>
            </svg>
          </figure>
          <h1>Delivery</h1>
          <p>
            Items will be delivered in less than{" "}
            <span className={classes.color}>24hrs</span> . Items above{" "}
            <span className={classes.color}>$200</span> are delivered free of
            cost
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
