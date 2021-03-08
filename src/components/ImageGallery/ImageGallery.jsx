import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ items, showModal }) => {
  return (
    <ul className={styles.ImageGallery} onClick={showModal}>
      {items.map((ele) => {
        return (
          <ImageGalleryItem
            url={ele.webformatURL}
            key={ele.id}
            id={ele.id}
            large={ele.largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default ImageGallery;
