import React from "react";
import Slideshow, { Slide } from "./components/Slideshow.1";
import Accordeon from "./components/Accordion.3";
import Dropdown from "./components/Dropdown.4";
import SideNav from "./components/SideNavigation.5";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Slideshow>
          <Slide caption={"Caption 1"} />
          <Slide caption={"Caption 2"} />
          <Slide caption={"Caption 3"} />
          <Slide caption={"Caption 4"} />
        </Slideshow>
      </div>
      <div className="card">
        <Accordeon title="title 1">
          <div className="accordeon__content">content of accordeon 1</div>
        </Accordeon>
        <Accordeon title="title 2">
          <div className="accordeon__content">content of accordeon 2</div>
        </Accordeon>
        <Accordeon title="title 3">
          <div className="accordeon__content">content of accordeon 3</div>
        </Accordeon>
      </div>
      <div className="card">
        <div className="card__row">
          <Dropdown title="Hover" open="onMouseOver" close="onMouseLeave">
            <a className="link">Link 1</a>
            <a className="link">Link 2</a>
            <a className="link">Link 2</a>
          </Dropdown>
        </div>
        <div className="card__row">
          <Dropdown
            title="Click"
            open="onClick"
            btnStyle={{ backgroundColor: "#3498DB" }}
          >
            <a className="link">Link 1</a>
            <a className="link">Link 2</a>
            <a className="link">Link 2</a>
          </Dropdown>
        </div>
      </div>

      <div className="card">
        <div className="card__row">
          <SideNav title="side nav" btnClass="sidenavBtn">
            {(onClose) => (
              <div className="sidenav">
                <span className="closebtn" onClick={onClose}>
                  &times;
                </span>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            )}
          </SideNav>
        </div>
        <div className="card__row">
          <SideNav
            title="side nav push"
            btnClass="sidenavBtn"
            pushSelector={"#root"}
          >
            {(onClose) => (
              <div className="sidenav">
                <span className="closebtn" onClick={onClose}>
                  &times;
                </span>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            )}
          </SideNav>
        </div>
        <div className="card__row">
          <SideNav
            title="side nav push overlay"
            btnClass="sidenavBtn"
            pushSelector={"#root"}
            overlay
          >
            {(onClose) => (
              <div className="sidenav">
                <span className="closebtn" onClick={onClose}>
                  &times;
                </span>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            )}
          </SideNav>
        </div>
      </div>
    </div>
  );
}

export default App;
