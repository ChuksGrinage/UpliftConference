import React from 'react';

import styles from './ImageContainer.module.scss';


interface ImageContainerProps {
  imgURL: string;
  title: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imgURL, title }, {...props}) => {
    return (
      <figure {...props} className={styles.imageContainer}>
        <img src={imgURL} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    );
}

export default ImageContainer;
