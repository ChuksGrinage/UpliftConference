// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import { Countdown, Quotes } from 'modules/components';

import styles from './Layout.module.scss';
import banner from 'assets/images/upliftbanner.webp';
import { ReactComponent as FacebookLogo } from 'assets/SVG/facebook2.svg';
import { ReactComponent as InstagramLogo } from 'assets/SVG/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/SVG/twitter.svg';

import { css, jsx } from '@emotion/core';


export default class LandingPageLayout extends React.Component {

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.banner}>
          <div className={styles.banner__content}>
            <img src={banner} css={css`width: 100%; height: 100%;`} alt="uplift banner" />
            <Countdown date={new Date("November 02, 2019 07:00:00")} />
            <div className={styles.button}>
              <a href="https://www.christembassyarlington.us/uplift" rel="noopener noreferrer" target="_blank">Register Now!</a>
            </div>
            <ul className={styles.socialMediaList}>
              <li><a href="https://www.facebook.com/groups/upliftconference" rel="noopener noreferrer" target="_blank"><FacebookLogo /></a></li>
              <li><a href="https://www.instagram.com/upliftconference/" rel="noopener noreferrer" target="_blank"><InstagramLogo /></a></li>
              <li><a href="https://twitter.com/ChristEmbassyAT" rel="noopener noreferrer" target="_blank"><TwitterLogo /></a></li>
            </ul>
          </div>
        </div>
        {/* <main className={styles.main}>
          <section className={styles.section_testimonials}>
            <ScrollAnimation animateIn='flipInY'>
              <h3>Quotes</h3>
            </ScrollAnimation>
            <div className={styles.quoteCtnr}>
              <Quotes quote="One of the first things you must learn to do with your mind is to focus it on the right thing." by="Pst. Chris Oyakhilome" />
              <Quotes quote="upward and forward only" by="Yvonne Uwabuike" />
            </div>
          </section>
        </main> */}
      </div>
    );
  }
}
