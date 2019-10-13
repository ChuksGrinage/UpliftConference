
import React from "react";
import styles from './Countdown.module.scss';

interface CountdownProps {
    date: Date;
}

interface CountdownState {
    distance: number
}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
    state = {
        distance: 0
    }

    componentDidMount() {
        setInterval(() => {
            const countDownDate = this.props.date.getTime();
            const now = new Date().getTime();
            this.setState({
                distance: countDownDate - now
            });
        }, 1000)
    }

    render() {
        const { distance } = this.state;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if( distance < 0) {
            return null;
        }
    
        return (
            <div className={styles.date}>
                <h3>11 &#183; 02 &#183; 2019</h3>
                <ul className={styles.date__countdown}>
                    <li><span>{days}</span>days</li>
                    <li><span>{hours}</span>hours</li>
                    <li><span>{minutes}</span>minutes</li>
                    <li><span>{seconds}</span>seconds</li>
                </ul>
            </div>
        );
}
}
