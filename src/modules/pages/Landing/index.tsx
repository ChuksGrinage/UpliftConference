import React, { Component } from 'react';
import { MainLayout } from 'modules/layouts';
import LandingPageLayout from './Layout';
import {  } from 'modules/types';


interface LandingPageProps {}

interface LandingPageState {
}

class LandingPage extends Component<LandingPageProps, LandingPageState> {
  constructor(props: LandingPageProps) {
    super(props);
  }

  render() {
    return (
      <MainLayout>
        <LandingPageLayout/>
      </MainLayout>
    );
  }
}


export default LandingPage;