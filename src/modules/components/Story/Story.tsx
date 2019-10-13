
import React from 'react';
import styles from './Story.module.scss';

interface StoryProps {
  imgCaption: string;
  imgURL: string;
}

const Story: React.FC<StoryProps> = ({ imgCaption, imgURL }, {...props}) => {
    return (
      <div className={styles.story}>
          <figure>
            <img src={imgURL} alt={imgCaption} />
            <figcaption>{imgCaption}</figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quam esse, consequatur corrupti maxime reiciendis, quisquam veritatis.
          </p>
      </div>
    );
}

export default Story;
