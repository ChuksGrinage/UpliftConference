
import React from 'react';
import styles from './Quotes.module.scss';
// import photo_1 from 'assets/images/Pastor-Chris-Oyakhilome-1.webp';
import { ReactComponent as QuoteRight } from 'assets/SVG/quote-right.svg';
import { ReactComponent as QuoteLeft } from 'assets/SVG/quote-left.svg';

interface QuotesProps {
  quote: string;
  by: string;
}

const Quotes: React.FC<QuotesProps> = ({ quote, by }) => {
    return (
      <div className={styles.quotesCtnr}>
        <div className={styles.quotes}>
          <QuoteLeft className={styles.quotes__quoteLeft} />
          <div className={styles.quotes__text}>
            <p>{quote}</p>
            <span>&#8212; {by}</span>
          </div>
          <QuoteRight className={styles.quotes__quoteRight} />
        </div>
        {/* <img src={photo_1} /> */}
      </div>
    );
}

export default Quotes;
