import React, { useState } from "react";
import "./SideNavigation.scss";

function SideNavigation({
  title,
  btnClass = "",
  navClass = "",
  children,
  pushSelector,
  overlay,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    if (pushSelector) {
      const pushedContainer = document.querySelector(pushSelector);
      pushedContainer.style.transition = "margin-left 0.5s";
      if (!show) {
        pushedContainer.classList.add("sideNav__container-pushed");
      } else {
        pushedContainer.classList.remove("sideNav__container-pushed");
      }
    }

    setShow(!show);
  };
  return (
    <>
      <button onClick={toggleShow} className={`sideNav__btn ${btnClass}`}>
        {title}
      </button>
      <div
        className={`sideNav__nav ${navClass} ${
          show ? "sideNav__nav--visible" : ""
        }`}
      >
        {children(toggleShow)}
      </div>
      <div
        onClick={toggleShow}
        className={`sideNav__overlay ${
          show && overlay ? "sideNav__overlay--visible" : ""
        }`}
      ></div>
    </>
  );
}

export default SideNavigation;
