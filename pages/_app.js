import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {withRouter} from 'next/router';

import CssBaseline from '@material-ui/core/CssBaseline';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import NavigationProgress from '../components/NavigationProgress';
import ContentContainer from '../components/ContentContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CVScrollMarkWrapper from '../components/CVScrollMarkWrapper';

import reducers from '../reducers';

const store = createStore(reducers);

class RootApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>Ryan Fernanda</title>
          <meta name="description" content="Ryan Fernanda's portfolio and profile"/>
          <meta name="keywords" content="Ryan Fernanda, RyanF42, StarfallProduction, Starfall Production, React, Angular, Electron, React Native, Web Development, Web developer, Mobile Development, Mobile developer, ElectronJS Developer, starfallproduction42, Freelancer"/>
        </Head>

        <CssBaseline/>

        {
          router.pathname !== '/' && router.pathname !== '/profile' ? 
            <ContentContainer py={0} mt={0}>
              <Component {...pageProps} />
            </ContentContainer>
          :
            <React.Fragment>
              <NavigationProgress/>
              <Header/>
              <CVScrollMarkWrapper/>
              
              <ContentContainer py={18} mt={5}>
                <Component {...pageProps} />
              </ContentContainer>
              
              <Footer/>
            </React.Fragment>
        }
      </Provider>
    )
  }
}

export default withRouter(RootApp);