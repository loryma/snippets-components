import React from "react";
import Slideshow, { Slide } from "./components/Slideshow.1";
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
    </div>
  );
}

export default App;
