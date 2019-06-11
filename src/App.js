import React, { useState, useEffect, lazy, Suspense, useContext} from 'react';
import {useDispatch} from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, withRouter, Switch, __RouterContext} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import ContentContainer from './components/ContentContainer';

import {SetCurrentPage} from './actions/actions';
import {useTransition, animated} from 'react-spring';

const Portfolio = lazy(() => import('./Portfolio'));
const CV = lazy(() => import('./CV'));

const AppContent = withRouter(()=>{
	const dispatch = useDispatch();
	const {location} = useContext(__RouterContext);
    const [cur, SetCur] = useState(0);
    const [prev, SetPrev] = useState(-1);
	
	const transitions = useTransition(location, location => location.pathname, {
		from:{
			transform: (cur > prev) ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)',
			position: 'fixed',
			opacity: 0.5
		},
		enter: {
			transform: 'translate3d(0,0,0)', 
			position: 'relative',
			opacity: 1
		},
		leave: {
			transform: (cur > prev) ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)',
			position: 'fixed',
			opacity: 0
		},
		config: {
			mass: 25,
			tension: 300,
			friction: 170,
			clamp: true
		},
		immediate: (prev == -1) ? true : false,
		native: true
	});
  
    useEffect(()=>{
        if(location.pathname == '/'){
            dispatch(SetCurrentPage('PORTFOLIO'));
            SetCur(0);
            SetPrev(1);
        }else{
            dispatch(SetCurrentPage('CV'));
            SetCur(1);
            SetPrev(0);
        }

        return ()=>{
            console.log({cur, prev});
            console.log(location);
        }
	}, [location.pathname]);

    return (
		<React.Fragment>
			{
				transitions.map(({item, props, key}) => {
					return(
						<animated.div 
							style={props} 
							key={key}
						>
							<Switch location={item}>
								<Route exact path="/" component={Portfolio}/>
								<Route path="/cv" component={CV}/>
							</Switch>
						</animated.div>
					);
				})
			}
		</React.Fragment>
    );
})

function App(){
    return (
		<React.Fragment>
			<CssBaseline/>
			<Header/>
			
			<ContentContainer>
				<Suspense fallback={<div>lel</div>}>	
					<AppContent/>
				</Suspense>
			</ContentContainer>
			
			<Footer/>
		</React.Fragment>
    );
}

export default App;
