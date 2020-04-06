import React from "react";
import "./GalleryItem.scss";

function GalleryItem({ url, index, onClick, active }) {
  const imgUrl = url
    ? require(`${url}`)
    : require(`../imgs/img_${index + 1}.jpg`);

  const classes = ["gallery__item", active ? "gallery__item--active" : ""].join(
    " "
  );
  return <img onClick={onClick} src={imgUrl} className={classes} />;
}

export default GalleryItem;
