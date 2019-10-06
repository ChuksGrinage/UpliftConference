
import React from "react";
import styles from './Countdown.module.scss';

interface CountdownProps {}
interface CountdownState {}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
    constructor(props: CountdownProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.date}>
                <h3>11 &#183; 02 &#183; 2019</h3>
            <ul className={styles.date__countdown}>
                <li><span>07</span>days</li>
                <li><span>12</span>hours</li>
                <li><span>10</span>minutes</li>
                <li><span>45</span>seconds</li>
            </ul>
            </div>
        );
    }
}
