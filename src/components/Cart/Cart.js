import React from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import { cartActions } from "../../store/Slices/cart-slice";
import Remove from "./CartIcon/removeItem.svg";
import Empty from "./CartIcon/empty.svg";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import Button from "../UI/Button/Button";
import { uiActions } from "../../store/Slices/ui-slice";
import { loginActions } from "../../store/Slices/login-slice";

const Cart = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const showModal = useSelector((state) => state.cart.showModal);
  const cart = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const shippingFee = useSelector((state) => state.cart.shippingFee);
  const cartTax = useSelector((state) => state.cart.cartTax);
  const orderTotal = useSelector((state) => state.cart.orderTotal);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(cartActions.toggleModal());
  };

  const changeQuantityHandler = (e, item) => {
    const { id, name, src, price } = item;
    const quantity = +e.target.value;
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        src,
        price,
        quantity: quantity,
      })
    );
    dispatch(cartActions.orderTotal());
  };

  const removeCartHandler = (item) => {
    dispatch(cartActions.removeItemFromCart(item.id));
    dispatch(cartActions.orderTotal());
  };

  const handleCheckout = () => {
    if (!isLoggedIn && cart.length > 0) {
      dispatch(loginActions.toggle());
      dispatch(cartActions.toggleModal());
      dispatch(uiActions.toPurchase());
    }
    if (cart.length === 0) {
      return;
    } else {
      dispatch(uiActions.openConfirmationPage());
    }
  };

  let cartData;
  if (cart.length > 0) {
    cartData = cart.map((item) => {
      return (
        <div className={classes.card} key={item.id}>
          <svg
            className={classes.removeItem}
            onClick={removeCartHandler.bind(null, item)}
          >
            <use xlinkHref={`${Remove}#remove`}></use>
          </svg>
          <figure className={classes["card-wrapper"]}>
            <img
              className={classes["card-img"]}
              src={item.src}
              alt={item.name}
            />
          </figure>
          <div className={classes["card-title"]}>
            <h1>{item.name}</h1>
          </div>

          <div className={classes["card-quantity"]}>
            <p className={classes["card-title--bold"]}>Qty</p>
            <input
              required
              type="number"
              min="1"
              max="5"
              value={item.quantity}
              step="1"
              onChange={(e) => {
                changeQuantityHandler(e, item);
              }}
            />
            {/* <p>{item.quantity}</p> */}
          </div>

          <div className={classes["card-multiply"]}>
            <p>X</p>
          </div>

          <div className={classes["card-price"]}>
            <p className={classes["card-title--bold"]}>Item Price</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className={classes["card-total"]}>
            <p className={classes["card-title--bold"]}>Total Price</p>
            <p>${item.totalPrice.toFixed(2)}</p>
          </div>
        </div>
      );
    });
  } else {
    cartData = (
      <div className={classes.empty}>
        <div className={classes["empty-text"]}>
          <p>
            Cart is currently <span className={classes.color}>Empty</span>
          </p>
          <svg className="icon">
            <use xlinkHref={`${Empty}#box`}></use>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      {showModal && (
        <Modal onClose={closeModal}>
          <div className={classes.cartWrapper}>
            <h1 className={classes.title}>
              Your <span className={classes.color}>Cart</span>
            </h1>
            <div className={classes.cart}>{cartData}</div>
          </div>
          <div className={classes["checkout"]}>
            <div className={classes["checkout-group"]}>
              <p className={classes["checkout-group-title"]}>SubTotal</p>
              <p>:</p>
              <p>${cartTotal.toFixed(2)}</p>
            </div>
            <div className={classes["checkout-group"]}>
              <p className={classes["checkout-group-title"]}>Shipping Fee</p>
              <p>:</p>
              <p>${shippingFee.toFixed(2)}</p>
            </div>
            <div className={classes["checkout-group"]}>
              <p className={classes["checkout-group-title"]}>Estimated Tax:</p>
              <p>:</p>
              <p>${cartTax.toFixed(2)}</p>
            </div>

            <div className={classes["checkout-total"]}>
              <p className={classes["checkout-total-title"]}>Total</p>
              <p className={classes["checkout-total-dotted"]}>:</p>
              <p className={classes["checkout-total-price"]}>
                ${orderTotal.toFixed(2)}
              </p>
              <div className={classes.btnGroup}>
                <Button
                  type="button"
                  btn="btn--checkout"
                  action={handleCheckout}
                >
                  Checkout
                </Button>
                <Button type="button" btn="btn--cancel-2" action={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Cart;
