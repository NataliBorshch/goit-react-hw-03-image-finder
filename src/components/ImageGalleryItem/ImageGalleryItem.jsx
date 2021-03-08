import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";
const ImageGalleryItem = ({ url, id, alt, large }) => {
  return (
    <li id={id} className={styles.ImageGalleryItem}>
      <img
        src={url}
        alt={alt}
        className={styles.ImageGalleryItem_image}
        data-source={large}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  alt: "photo",
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  large: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
