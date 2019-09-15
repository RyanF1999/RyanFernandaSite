import React, { useState, useEffect, lazy, Suspense, useContext} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Switch, __RouterContext} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';

import LoadingIndicator from './components/LoadingIndicator';
import {SetCurrentPage} from './actions/uiActions';
import {FetchPortfolio} from './actions/databaseActions';
import {FetchCV, FetchEducation, FetchSkill, FetchWork} from './actions/databaseActions';

const Header = lazy(()=>import('./components/Header'));
const Footer = lazy(()=>import('./components/Footer'));
const CssBaseline = lazy(()=>import('@material-ui/core/CssBaseline'));
const ContentContainer = lazy(()=>import('./components/ContentContainer'));
const Portfolio = lazy(() => import('./Portfolio'));
const CV = lazy(() => import('./CV'));
const CVScrollMarkWrapper = lazy(() => import('./components/CVScrollMarkWrapper'));

const AppContent = ()=>{
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
		immediate: (prev === -1) ? true : false,
		native: true
	});
  
    useEffect(()=>{
        if(location.pathname === '/'){
            dispatch(SetCurrentPage('PORTFOLIO'));
            SetCur(0);
            SetPrev(1);
        }else{
            dispatch(SetCurrentPage('CV'));
            SetCur(1);
            SetPrev(0);
        }
	}, [location.pathname]);

    return (
		<React.Fragment>
			{
				transitions.map(({item, props, key}) => {
					return(
						<animated.div style={props} key={key}>
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
};

function App(){
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(FetchPortfolio());
		dispatch(FetchCV());
        dispatch(FetchEducation());
        dispatch(FetchWork());
        dispatch(FetchSkill());
	}, []);
	
    return (
		<Suspense fallback={<LoadingIndicator/>}>
			<CssBaseline/>
			<Header/>
			<CVScrollMarkWrapper/>
			
			<ContentContainer>
				<Suspense fallback={<LoadingIndicator/>}>	
					<AppContent/>
				</Suspense>
			</ContentContainer>
			
			<Footer/>
		</Suspense>
    );
}

export default App;
