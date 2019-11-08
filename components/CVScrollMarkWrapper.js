import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import {useSpring} from 'react-spring';

import Hidden from '@material-ui/core/Hidden';
import CVScrollMark from './CVScrollMark';

function CVScrollMarkWrapper(){
	const router = useRouter();
	const [active, SetActive] = useState(false);

	useEffect(()=>{
		if(router.pathname === '/profile') SetActive(true);
		else SetActive(false);
	}, [router]);

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
	
    if(active){
        return(
			<Hidden smDown implementation="css">
				<CVScrollMark style={anim}/>
			</Hidden>
        )
    }else{
        return null;
    }
};

export default CVScrollMarkWrapper;