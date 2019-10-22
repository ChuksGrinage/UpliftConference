// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import ReactPlayer from 'react-player'

import { css, jsx } from '@emotion/core';
// import styles from './YoutubeCtnr.module.scss';
// import { Options } from "yargs";

interface YoutubeCtnrProps {
}

export default class YoutubeCtnr extends React.Component<YoutubeCtnrProps> {

    render() {

        return (
            <div css={css`position: relative; padding-top: 56.25%;`}>
                <ReactPlayer
                    css={css`position: absolute; top: 0; left: 0;`}
                    url='https://www.youtube.com/watch?v=8qacyv6vC-Q&list=PLPwnp65QthXkty3laFVkZCXB6wDizKZI_'
                    width='100%'
                    height='100%'
                    // playing
                />
            </div>
        )
    }
}