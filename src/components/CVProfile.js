import React, {useEffect, useRef}  from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {useDispatch} from 'react-redux';
import { InitPageMark } from '../actions/uiActions';

function CVProfile(props){
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(()=>{
        dispatch(InitPageMark('Profile', ref.current));
    }, []);

    return(
        <Box component={Grid} ref={ref} container py={5}
            direction="column" alignItems="center"
        >
            {props.children}
        </Box>
    )
}

export default CVProfile;