import React from "react";
import Slideshow, { Slide } from "./components/Slideshow.1";
import Accordeon from "./components/Accordion.3";
import Dropdown from "./components/Dropdown.4";
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
        <Dropdown title="Hover" open="onMouseOver" close="onMouseLeave">
          <a className="link">Link 1</a>
          <a className="link">Link 2</a>
          <a className="link">Link 2</a>
        </Dropdown>

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
  );
}

export default App;
