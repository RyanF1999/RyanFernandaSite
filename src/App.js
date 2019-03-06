import React, { Component, lazy, Suspense} from 'react';
import {Container} from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, withRouter}   from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetCurrentPage} from './actions/actions';
import PortfolioPreview from './components/PortfolioPreview';

const Portfolio = lazy(() => import('./Portfolio'));

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
        <PortfolioPreview isOpen={false} title="Test" content={()=>(<img className="img-fluid w-100" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>)} desc="Test"/>
        <Header/>

        <Suspense fallback={<div>lel</div>}>
          <Route exact path="/" render={ (props) => <Portfolio {...props}/> }/>
          <Route path="/cv" render={ (props) => <Portfolio {...props}/> }/>
        </Suspense>

        <Footer/>
      </Container>
    );
  }
}

export default connect(null)(withRouter(App));
