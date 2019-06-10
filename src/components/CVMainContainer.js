import React from 'react';
import CvMainDropdownBtn from './CVMainDropdownBtn';
import {Grid, Typography} from '@material-ui/core';
import CvMainChilds from './CVMainChilds';

function CvMainContainer(props){
    return (
        <Grid container item direction="row" spacing={3}>
            <Grid container item alignItems="center" spacing={4}>
                <Grid item xs="auto">
                    <CvMainDropdownBtn index={props.index}/>
                </Grid>
                <Grid>
                    <Typography variant="h4">
                        {props.title}
                    </Typography>
                </Grid>
            </Grid>
            <CvMainChilds 
                index={props.index} 
                duration={650}
                direction="row"
                container
            >
                {props.children}
            </CvMainChilds>
        </Grid>
    );
}

export default CvMainContainer;