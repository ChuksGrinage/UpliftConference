
import React from "react";
import styles from './Footer.module.scss'


interface FooterProps {
}



const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.footer}>
            <section className={styles.footer_top}>
                <hr /> <h3>What We're About</h3> <hr />
            </section>
            <section className={styles.footer_bottom}>
                <div>
                    <h4>What is the Uplift Conference?</h4>
                    <p>
                        The UPLIFT Conference is for youth ages 15  and up to adulthood  and is designed to equip them with relevant information from the Word of God to make them successful in their sphere of life.  There will be vendors, relevant breakout sessions, prizes and food trucks.  It is November 2nd from 1pm-4pm.
                    </p>
                </div>
                <div>
                    <h4>Want to get involved?</h4>
                    <p>
                        We are always looking for volunteers to help us make our vision a reality. We'll help you find a way to volunteer that best suits you. Contact us at <a href="mailto:upliftcon@gmail.com">upliftcon@gmail.com</a>
                    </p>
                </div>
                <div>
                    <h4>Thank you!</h4>
                    <p>
                        We couldn't accomplish our goals without the help of supporters like you. Thank you for your time and donations that makes this possible!
                    </p>
                </div>
            </section>
            <section className={styles.footer_copyright}>
                <div className={styles.footer_copyright_top}>
                    <h5>The Uplift Conference</h5>
                    <p>Loveworld Auditorium 702 Greenview Dr. Grand Prairie, TX 75050. e. upliftcon@gmail.com</p>
                </div>
                <div className={styles.footer_copyright_bottom}>
                    <p>Copyright © 2019 The Uplift Conference - All Rights Reserved.</p>
                    <p>Created by Chuks Grinage</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;