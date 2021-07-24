import classes from "./Navigation.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/Slices/login-slice";
import "../../assets/scss/hamburgers/hamburgers.scss";
import Logo from "../Header/Logo/Logo";
import React from "react";
import CartIcon from "../Cart/CartIcon/CartIcon";

const Navigation = (props) => {
  const [isActive, setIsActive] = useState(false);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const dispatch = useDispatch();

  const showLoginHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.toggle());
  };

  const toggleMenuHandler = () => {
    setIsActive((active) => !active);
  }; //this function is used to toggle the menu

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.logOut());
  };

  const styleArr = ["nav--right", isActive ? "fadeIn" : ""];
  const navigationStyles = styleArr.map((style) => {
    return classes[style];
  });

  return (
    <nav className={classes.nav}>
      <Logo />
      <CartIcon />
      <div className={classes["nav--collapsible"]}>
        <button
          className={`hamburger hamburger--elastic ${classes["nav-menuBtn"]} ${
            isActive ? "is-active" : ""
          }`}
          type="button"
          onClick={toggleMenuHandler}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className={navigationStyles.join(" ")}>
          <a href="/">New Arrivals</a>
          <a href="/">Reviews</a>
          <a href="/">About</a>
          {!isLoggedIn && (
            <a href="/" className={classes.btn} onClick={showLoginHandler}>
              Join/Login
            </a>
          )}
          {isLoggedIn && (
            <a href="/" className={classes.btn} onClick={logOutHandler}>
              LogOut
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
