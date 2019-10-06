
import React from 'react';
import { NavBar } from 'modules/components';
// import { css, jsx } from '@emotion/core';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div>
        <NavBar />
        {children}
      </div>
    );
}

export default MainLayout;
