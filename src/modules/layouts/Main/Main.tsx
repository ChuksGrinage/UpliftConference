// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from 'react';
import { NavBar, Footer } from 'modules/components';
import { css, jsx } from '@emotion/core';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div css={css`padding: 5rem;`}>
        <NavBar />
        {children}
        <Footer />
      </div>
    );
}

export default MainLayout;
