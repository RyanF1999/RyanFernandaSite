import React, { Component, lazy, Suspense} from 'react';
import {Container} from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, withRouter, Switch}   from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetCurrentPage} from './actions/actions';
import {Transition, config} from 'react-spring/renderprops';
import styled from 'styled-components';

const Portfolio = lazy(() => import('./Portfolio'));
const CV = lazy(() => import('./CV'));

const StyledContainer = styled(Container)`
  min-height: 100%;
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cur: 0,
      prev: -1
    }
    bindActionCreators(SetCurrentPage, props.dispatch);

  }

  componentWillMount(){
    if(this.props.location.pathname == '/'){
      this.props.dispatch(SetCurrentPage('PORTFOLIO'));
      this.setState({cur: 0});
    }else{
      this.props.dispatch(SetCurrentPage('CV'));
      this.setState({cur: 1});
    }
  }

  componentWillReceiveProps(next){
    if(next.location.pathname == '/'){
      this.setState({cur: 0, prev: 1});
    }else{
      this.setState({cur: 1, prev: 0});
    }
  }

  componentDidUpdate(){
    console.log(this.state);
    console.log(this.props.location);
  }

  render() {
    return (
      <StyledContainer fluid={true}>
        <Header/>

        <Suspense fallback={<div>lel</div>}>
          <Transition 
          config={config.molasses}
          immediate={(this.state.prev == -1) ? true : false}
          items={this.state.cur}
          keys={this.props.location.pathname}
          from={{
            transform: (this.state.cur > this.state.prev) 
            ? 'translate3d(100%,0,0)'
            : 'translate3d(-100%,0,0)',
            position: 'absolute',
            opacity: 0
          }}
          enter={{
            transform: 'translate3d(0,0,0)', 
            position: 'relative',
            opacity: 1
          }}
          leave={{transform: (this.state.cur > this.state.prev) 
            ? 'translate3d(-100%,0,0)'
            : 'translate3d(100%,0,0)',
            position: 'absolute',
            opacity: 0
          }}
        >
              {
                  (item) => styles =>
                    <Switch location={this.props.location}>
                      <Route exact path="/" render={ (props) => <Portfolio {...props} styles={styles}/> }/>
                      <Route path="/cv" render={ (props) => <CV {...props} styles={styles}/> }/>
                    </Switch>
              }
          </Transition>
        </Suspense>

        <Footer/>
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    curPage: state.page
  }
}

export default connect(mapStateToProps)(withRouter(App));
