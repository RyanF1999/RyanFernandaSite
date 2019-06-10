import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';

function CvSideContainer(props){
    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Box fontWeight="fontWeightBold" textAlign="center">
                    <Typography variant="h2">
                        {props.title}
                    </Typography>
                </Box>
            </Grid>
            <Grid container item xs={12} spacing={1}>
                {props.children}
            </Grid>
        </Grid>
    );
}

export default CvSideContainer;