import React from 'react';
import { ImageContainer } from 'modules/components';

import styles from './Story.module.scss';

interface StoryProps {
  imgCaption: string;
  subCaption?: string;
  imgURL: string;
  styleName?: string;
}

const Story: React.FC<StoryProps> = ({ imgCaption, subCaption, imgURL, styleName }, {...props}) => {
    return (
      <div className={styles.story}>
          <figure {...props} className={styles.story__imageContainer}>
            <img src={imgURL} alt={imgCaption} />
            <figcaption>{imgCaption}</figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quam esse, consequatur corrupti maxime reiciendis, quisquam veritatis, soluta distinctio ad odit deserunt iusto hic eaque asperiores. Vero molestiae nam sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nam veniam ea laboriosam cumque accusantium esse voluptatum quae asperiores autem quo aspernatur maxime, eos explicabo!
          </p>
      </div>
    );
}

export default Story;
