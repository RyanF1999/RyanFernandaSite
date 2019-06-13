import React from 'react';
import {Box} from '@material-ui/core';
import GridRoot from './GridRoot';

function CVProfile(props){

    return(
        <Box component={GridRoot} ref={ref} container py={5}
            direction="column" alignItems="center"
        >
            {props.children}
        </Box>
    )
}

export default CVProfile;