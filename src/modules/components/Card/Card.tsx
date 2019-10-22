
import React from "react";
import styles from './Card.module.scss';


interface CardProps {
    imgURLFront: string;
    imgURLBack: string;
    backText?: string;
}


const Card: React.FC<CardProps> = ({ imgURLFront, imgURLBack, backText }) => {

        return (
            <div className={styles.card}>
                <div className={styles.card_front} style={{ backgroundImage: `url(${imgURLFront})`}} >
                    {/* <img className={styles.sprite} src={imgURL} alt="promo photo" /> */}
                </div>
                <div className={styles.card_back} style={{ backgroundImage: `url(${imgURLBack})` }}>
                    <p>"{backText}"</p>
                </div>
            </div>
        );
}

export default Card;