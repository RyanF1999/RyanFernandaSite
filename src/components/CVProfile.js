import React, {useEffect, useRef}  from 'react';
import {Box, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { InitPageMark } from '../actions/actions';

function CVProfile(props){
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(()=>{
        dispatch(InitPageMark('Profile', ref));
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