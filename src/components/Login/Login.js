import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/Slices/login-slice";
import { cartActions } from "../../store/Slices/cart-slice";
import classes from "./Login.module.scss";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import show from "./visibility.png";
import hide from "./invisible.png";

const Login = (props) => {
  const showLogin = useSelector((state) => state.login.isLoginVisible);
  const showModal = useSelector((state) => state.login.showModal);
  const toOrder = useSelector((state) => state.ui.toPurchase);
  const [isError, setIsError] = useState(false);
  const [showEye, setShowEye] = useState(true);
  const dispatch = useDispatch();

  const username = useRef();
  const password = useRef();

  const closeModal = () => {
    setIsError(false);
    dispatch(loginActions.toggle());
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const isUsernameValid = username.current.value === "demo" || "Demo";
    const isPasswordValid = password.current.value === "luvly@123";

    if (isUsernameValid && isPasswordValid) {
      dispatch(
        loginActions.logIn({
          username: username.current.value,
          password: password.current.value,
        })
      );
      setShowEye(true);
      dispatch(loginActions.toggle());
      if (toOrder) {
        dispatch(cartActions.toggleModal());
      }
    } else {
      setIsError(true);
    }
    //QUICK AND DIRTY DONT DO THIS INA REAL LIFE APP
    username.current.value = "";
    password.current.value = "";
  };

  const errorReset = () => {
    setIsError(false);
  };

  return (
    <React.Fragment>
      {showLogin && showModal && (
        <Modal onClose={closeModal}>
          <form className={classes.form} onSubmit={loginHandler}>
            <h1 className={classes["form-title"]}>
              Login to <span className={classes.color}>Luvly</span>
            </h1>
            <div className={classes["form-group"]}>
              <label labelfor="username" onFocus={errorReset}>
                Username:
                <span>
                  <small className={classes.color}>demo</small>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                id="username"
                ref={username}
                autoComplete="off"
              />

              {isError && (
                <p className={classes.error}>username must be "demo"</p>
              )}
            </div>
            <div className={classes["form-group"]}>
              <label labelfor="password">
                Password:
                <span>
                  <small className={classes.color}>luvly@123</small>
                </span>
              </label>
              <div className={classes.inline}>
                <input
                  type={showEye ? "password" : "text"}
                  placeholder="Enter Password"
                  id="password"
                  ref={password}
                  onFocus={errorReset}
                  autoComplete="off"
                />
                <span
                  className={classes.visible}
                  onClick={() => {
                    setShowEye((eye) => !eye);
                  }}
                >
                  <img src={showEye ? show : hide} alt="visible" />
                </span>
              </div>

              {isError && (
                <p className={classes.error}>password must be "luvly@123"</p>
              )}
            </div>
            <div className={classes["form-group--inline"]}>
              <Button type="submit" btn="btn--signup">
                Log In
              </Button>
              <Button type="button" btn="btn--cancel" action={closeModal}>
                cancel
              </Button>
            </div>

            <div className={classes["form-group"]}>
              <h3 className={classes["form-demo"]}>
                For this Demo you must be{" "}
                <span className={classes.color}>loggedIn</span> to confirm
                checkout
              </h3>
              <h3 className={classes["form-demo"]}>
                For this Demo the username is "
                <span className={classes.color}>demo</span>" and the password is
                " <span className={classes.color}>luvly@123</span>"
              </h3>
            </div>
          </form>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Login;
