import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";

function Dropdown({
  children,
  title,
  open,
  close = "noclose",
  onClickOutside,
  containerStyle = {},
  btnStyle = {},
}) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    function handleClickOutside(e) {
      const target = e.target;
      if (!dropdownRef.current.contains(target)) {
        setShow(false);
      }
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      style={containerStyle}
      {...{ [open]: () => setShow(true), [close]: () => setShow(false) }}
    >
      <div className="dropdown__btn" style={btnStyle}>
        {title}
      </div>
      {show && <div className="dropdown__content">{children}</div>}
    </div>
  );
}

export default Dropdown;
