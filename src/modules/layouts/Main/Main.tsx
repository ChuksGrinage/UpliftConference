
import React from 'react';
import { NavBar, Footer } from 'modules/components';
import { ContainerQuery } from 'react-container-query';

interface MainLayoutProps {
    children: React.ReactNode;
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

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <ContainerQuery query={query}>
        {(params) => (
        <div >
          <NavBar />
          {children}
          <Footer />
        </div>
        )}
      </ContainerQuery>
    );
}

export default MainLayout;
