import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
