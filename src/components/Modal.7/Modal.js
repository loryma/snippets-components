import React from "react";
import "./Modal.scss";

function Modal({ isOpen, onClose, modalClassName, children }) {
  const classes = [
    isOpen ? "modal--visible" : "",
    modalClassName ? modalClassName : "",
  ].join(" ");
  return (
    <>
      <div className={`modal ${classes}`}>{children}</div>
      <div
        onClick={onClose}
        className={`modal__overlay ${isOpen ? "modal__overlay--visible" : ""}`}
      ></div>
    </>
  );
}

export default Modal;
