import React, {useEffect, useRef}  from 'react';
import {Box} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { InitPageMark } from '../actions/actions';
import GridRoot from './GridRoot';

function CVProfile(props){
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(()=>{
        dispatch(InitPageMark('Profile', ref));
    }, []);

    return(
        <Box component={GridRoot} ref={ref} container py={5}
            direction="column" alignItems="center"
        >
            {props.children}
        </Box>
    )
}

export default CVProfile;