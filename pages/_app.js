import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {withRouter} from 'next/router';

import CssBaseline from '@material-ui/core/CssBaseline';

import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import NavigationProgress from '../components/NavigationProgress';
import ContentContainer from '../components/ContentContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CVScrollMarkWrapper from '../components/CVScrollMarkWrapper';

import reducers from '../reducers';

const store = createStore(reducers);

const theme = createMuiTheme({
  hide: {
    display: 'none'
  },
  palette:{
    primary: {
      main: '#69C4E4'
    },
    background: {
      default: '#E8EFEF'
    },
    work: '#53575C',
    education: '#E4E2CD',
    skill: '#E7A82C',
    progress: {
      main: '#5093ab',
      background: '#11c28a'
    },
    tonalOffset:  0.2,
    contrastThreshold: 3
  }
});

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

        <MuiThemeProvider theme={theme}>
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
                
                <ContentContainer py={4} mt={16}>
                  <Component {...pageProps} />
                </ContentContainer>
                
                <Footer/>
              </React.Fragment>
          }
        </MuiThemeProvider>

      </Provider>
    )
  }
}

export default withRouter(RootApp);