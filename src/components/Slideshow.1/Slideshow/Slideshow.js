import React, { useState } from "react";
import GalleryItem from "../GalleryItem/";
import "./Slideshow.scss";

function Slideshow({ arrowPrev, arrowNext, children, style = {}, gallery }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let galleryImgs;

  const count = React.Children.count(children);
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { index, count, activeIndex })
  );

  if (gallery) {
    galleryImgs = React.Children.toArray(children).map((child, index) => (
      <GalleryItem
        active={index === activeIndex}
        key={child.url}
        url={child.url}
        index={index}
        onClick={setActiveIndex.bind(undefined, index)}
      />
    ));
  }

  const dots = [...Array(count)].map((_, i) => (
    <div
      key={i}
      onClick={() => setActiveIndex(i)}
      className={`slideshow__dot ${
        activeIndex === i ? "slideshow__dot_active" : ""
      }`}
    ></div>
  ));

  const changeActive = (n) => {
    let newActive = activeIndex + 1;
    if (newActive < 0) {
      newActive = count - 1;
    } else if (newActive > count - 1) {
      newActive = 0;
    }
    setActiveIndex(newActive);
  };

  return (
    <div style={style} className="slideshow">
      <div className="slideshow">
        {childrenWithProps}
        <div className="slideshow__prev" onClick={() => changeActive(-1)}>
          {arrowPrev ? <img src={arrowPrev} /> : <span>&#10094;</span>}
        </div>
        <div className="slideshow__next" onClick={() => changeActive(1)}>
          {arrowPrev ? <img src={arrowNext} /> : <span>&#10095;</span>}
        </div>
      </div>
      <nav className="slideshow__nav">{dots}</nav>
      {gallery ? (
        <div className="slideshow__gallery gallery">{galleryImgs}</div>
      ) : null}
    </div>
  );
}

export default Slideshow;
