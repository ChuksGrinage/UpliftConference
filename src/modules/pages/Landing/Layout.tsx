// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";

import { Countdown } from 'modules/components';

import styles from './Layout.module.scss';
import banner from 'assets/images/upliftbanner.webp';
import { ReactComponent as FacebookLogo } from 'assets/SVG/facebook2.svg'
import { ReactComponent as InstagramLogo } from 'assets/SVG/instagram.svg'
import { ReactComponent as TwitterLogo } from 'assets/SVG/twitter.svg'

import { css, jsx } from '@emotion/core';


export default class LandingPageLayout extends React.Component {

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.banner}>
            <img src={banner} css={css`width: 100%; height: 100%;`} alt="uplift banner" />
            <Countdown />
        <div className={styles.button}>
          <a href="https://www.christembassyarlington.us/uplift" rel="noopener noreferrer" target="_blank">Register Now!</a>
        </div>
        <ul className={styles.socialMediaList}>
        <li><a href="#"><FacebookLogo /></a></li>
        <li><a href="#"><InstagramLogo /></a></li>
        <li><a href="#"><TwitterLogo /></a></li>
        </ul>
        </div>
      </div>
    );
  }
}
