
import React from 'react';
import styles from './Quotes.module.scss';
import { ReactComponent as QuoteRight } from 'assets/SVG/quote-right.svg';
import { ReactComponent as QuoteLeft } from 'assets/SVG/quote-left.svg';

interface QuotesProps {
  quote: string;
  by: string;
}

const Quotes: React.FC<QuotesProps> = ({ quote, by }) => {
    return (
      <div className={styles.quotes}>
        <QuoteLeft className={styles.quotes__quoteLeft} />
        <div className={styles.quotes__text}>
          <p>{quote}</p>
          <span>&#8212; {by}</span>
        </div>
        <QuoteRight className={styles.quotes__quoteRight} />
      </div>
    );
}

export default Quotes;
