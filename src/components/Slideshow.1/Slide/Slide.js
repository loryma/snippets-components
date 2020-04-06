import React from "react";
import "./Slide.scss";

function Slide({ url, caption, index, count, activeIndex }) {
  const imgUrl = url
    ? require(`${url}`)
    : require(`../imgs/img_${index + 1}.jpg`);
  const active = activeIndex === index;

  return (
    <div
      style={{ display: active ? "block" : "none" }}
      className="slideshow__slide slide fade"
    >
      <span className="slide__count">
        {index + 1} / {count}
      </span>
      <img className="slide__img" src={imgUrl} />
      <p className="slide__caption">{caption}</p>
    </div>
  );
}

export default Slide;
