import React from "react";
import Slideshow, { Slide } from "./components/Slideshow.1";
import Accordeon from "./components/Accordion.3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Slideshow>
        <Slide caption={"Caption 1"} />
        <Slide caption={"Caption 2"} />
        <Slide caption={"Caption 3"} />
        <Slide caption={"Caption 4"} />
      </Slideshow>

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
  );
}

export default App;
