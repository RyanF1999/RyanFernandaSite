import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './Portfolio';
import {Route, withRouter}   from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetCurrentPage} from './actions/actions';

class App extends Component {
  constructor(props){
    super(props);
    bindActionCreators(SetCurrentPage, props.dispatch);

  }

  componentWillMount(){
    if(this.props.location.pathname == '/'){
      this.props.dispatch(SetCurrentPage('PORTFOLIO'));
    }else{
      this.props.dispatch(SetCurrentPage('CV'));
    }
  }

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

export default connect(null)(withRouter(App));
