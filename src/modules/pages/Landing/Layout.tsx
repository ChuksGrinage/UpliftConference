// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
// import ScrollAnimation from 'react-animate-on-scroll';

import { Countdown, CarouselCtnr, YoutubeCtnr, Quotes, Card } from 'modules/components';

import styles from './Layout.module.scss';
import banner from 'assets/images/banner.png';
import img1 from 'assets/images/photo1.jpeg';
import img2 from 'assets/images/photo2.jpg';
import img4 from 'assets/images/photo_1.jpg';
import img3 from 'assets/images/photo_2.jpg';
import { ReactComponent as FacebookLogo } from 'assets/SVG/facebook2.svg';
import { ReactComponent as InstagramLogo } from 'assets/SVG/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/SVG/twitter.svg';

import { css, jsx } from '@emotion/core';
import { ContainerQuery } from 'react-container-query';

interface LandingPageLayoutProps {
}

const query = {
  mobile: {
    minWidth: 320,
    maxWidth: 599
  },
  desktop: {
    minWidth: 600,
  }
};

export default class LandingPageLayout extends React.Component<LandingPageLayoutProps> {

  render() {
    return (
      <ContainerQuery query={query}>
        {(params) => (
      <div className={styles.layout}>
        <div className={styles.banner}>
          <div className={styles.banner__content}>
            <img src={banner} alt="uplift banner" />
            <Countdown date={new Date("November 02, 2019 07:00:00")} />
            {/* <div className={styles.button}>
              <a href="https://www.christembassyarlington.us/uplift" rel="noopener noreferrer" target="_blank">Register Now!</a>
            </div> */}
            {/* <ul className={styles.socialMediaList}>
              <li><a href="https://www.facebook.com/groups/upliftconference" rel="noopener noreferrer" target="_blank"><FacebookLogo /></a></li>
              <li><a href="https://www.instagram.com/upliftconference/" rel="noopener noreferrer" target="_blank"><InstagramLogo /></a></li>
              <li><a href="https://twitter.com/ChristEmbassyAT" rel="noopener noreferrer" target="_blank"><TwitterLogo /></a></li>
            </ul> */}
          </div>
        </div>
        <main className={styles.main}>
          <section className={styles.aboutUs}>
            <h3>What we are all about</h3>
            <div className={styles.aboutUs_content}>
              <div className={styles.aboutUs_content_text}>
                <h4>What is the Uplift Conference?</h4>
                <p>
                  The UPLIFT Conference is for youth ages 15 and up to adulthood and is designed to equip them with relevant information from the Word of God to make them successful in their sphere of life. There will be vendors, relevant breakout sessions, prizes and food trucks. It is November 2nd from 1pm-4pm.
                </p>
              </div>
                <div className={styles.aboutUs_content_img}>
                    <Card imgURLFront={img2} imgURLBack={img1} backText="...truly inspiring" />
                </div>
            </div>
                <div className={styles.aboutUs_content}>
                  <div className={styles.aboutUs_content_img}>
                    <Card imgURLFront={img3} imgURLBack={img4} backText="... one in a life time experience" />
                  </div>
                  <div className={styles.aboutUs_content_text}>
                    <h4>Want to get involved?</h4>
                    <p>
                      We are always looking for volunteers to help us make our vision a reality. We'll help you find a way to volunteer that best suits you. Contact us at <a href="mailto:upliftcon@gmail.com">upliftcon@gmail.com</a>
                    </p>
                    <h4>Thank you!</h4>
                    <p>
                      We couldn't accomplish our goals without the help of supporters like you. Thank you for your time and donations that makes this possible!
                    </p>
                  </div>
                </div>
          </section>
          <section className={styles.media}>
            <h3>Empower Your Mind</h3>
            <div className={styles.media_content}>
              {/* {true && 
                ( 
                  <div css={css`width: 45%`}>
                    <CarouselCtnr />
                  </div>
                )
              } */}
              <div className={styles.youtubeCtnr}>
                <YoutubeCtnr />
              </div>
            </div>
          </section>
          <section className={styles.social}>
            <h3>Connect With Us!</h3>
              <ul className={styles.socialMediaList}>
                <li><a href="https://www.facebook.com/groups/upliftconference" rel="noopener noreferrer" target="_blank"><FacebookLogo /></a></li>
                <li><a href="https://www.instagram.com/upliftconference/" rel="noopener noreferrer" target="_blank"><InstagramLogo /></a></li>
                <li><a href="https://twitter.com/ChristEmbassyAT" rel="noopener noreferrer" target="_blank"><TwitterLogo /></a></li>
              </ul>
          </section>
          <section className={styles.register}>
            <h3>Sign Up Here! Its Free!</h3>
            <embed width="100%" height="70%" src="https://www.eventbrite.com/checkout-external?eid=73044472985&parent=https%3A%2F%2Fwww.christembassyarlington.us%2Fuplift" />
          </section>
        </main>
          </div>
        )}
      </ContainerQuery>
    );
  }
}
