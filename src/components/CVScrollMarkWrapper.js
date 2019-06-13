import React, { useState, useEffect, lazy} from 'react';
import {useSelector} from 'react-redux';
import {CurrentPage} from '../actions/actions';
import {useSpring} from 'react-spring';

const Hidden = lazy(()=>import('@material-ui/core/Hidden'));
const CVScrollMark = lazy(()=>import('./CVScrollMark'));

function CVScrollMarkWrapper(){
	const location = useSelector(state => state.page);
	const [active, SetActive] = useState(false);
	const [transition, SetTransition] = useState(false);

	useEffect(()=>{
		if(location == CurrentPage.CV) SetActive(true);
		else SetActive(false);

		SetTransition(setTimeout(()=>SetTransition(undefined), 500));
	}, [location]);

	const anim = useSpring({
        to: {
			transform: active ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)',
			opacity: active ? 1 : 0
        },
		config: {
			mass: 1,
			tension: 150,
			friction: 20
		},
		native: true
	});
	
    if(active || transition !== undefined){
        return(
			<Hidden smDown>
				<CVScrollMark style={anim}/>
			</Hidden>
        )
    }else{
        return(null)
    }
};

export default CVScrollMarkWrapper;