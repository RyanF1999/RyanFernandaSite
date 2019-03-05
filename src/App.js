import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './Portfolio';
import {Route}   from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Header/>

        <Route exact path="/" render={ (props) => <Portfolio {...props}/> }/>
        <Route path="/cv" render={ (props) => <Portfolio {...props}/> }/>

        <Footer/>
      </Container>
    );
  }
}

export default App;
