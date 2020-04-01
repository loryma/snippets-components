import React, { useState } from "react";
import "./Accordeon.scss";

function Accordeon({ title, onClick, visible }) {
  return (
    <div
      className={`accordeon ${visible ? "accordeon--active" : ""}`}
      onClick={onClick}
    >
      <div>{title}</div>
    </div>
  );
}

function AccordeonHOC(Component) {
  return function WrappedAccordeon({ children, ...props }) {
    const [show, setShow] = useState(false);

    const onClick = () => setShow(!show);
    return (
      <>
        <Component {...props} onClick={onClick} visible={show} />

        {show && children}
      </>
    );
  };
}

export default AccordeonHOC(Accordeon);
