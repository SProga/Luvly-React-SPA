import React from "react";
import classes from "./Confirmation.module.scss";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/Slices/ui-slice";
import { cartActions } from "../../store/Slices/cart-slice";
import { sendCartData } from "../../store/Slices/Actions/cart-actions";
import Success from "./success.svg";
import Button from "../UI/Button/Button";

const Confirmation = () => {
  const dispatch = useDispatch();
  const cart = { items: 0, totalQuantity: 0 };
  const closeConfirmationPage = () => {
    dispatch(uiActions.closeConfirmationPage());
    dispatch(cartActions.resetCart());
    dispatch(sendCartData(cart));
  };

  return (
    <div className={classes.confirmation} onClick={closeConfirmationPage}>
      <div className={classes.confirmationWrapper}>
        <h1 className={classes.success}>
          Order <span className={classes.color}>Successful</span>
        </h1>
        <p className={classes.thankyou}>Thank you for choosing Luvly!</p>
        <svg className={classes.successImg}>
          <use xlinkHref={`${Success}#checked`}></use>
        </svg>
        <div className={classes.center}>
          <Button type="button" btn="btn--close" action={closeConfirmationPage}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
