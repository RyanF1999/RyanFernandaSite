import React from 'react';
import {Grid, List} from '@material-ui/core';
import CvMainListChilds from './CVMainListChilds';
import CvMainHeader from './CVMainHeader';

function CvMainContainer(props){
    return (
        <Grid container item direction="column" spacing={5}>
            <CvMainHeader {...props}/>
            <List>
                <CvMainListChilds 
                    index={props.index} 
                    duration={650}
                    container
                >
                    {props.children}
                </CvMainListChilds>
            </List>
        </Grid>
    );
}

export default CvMainContainer;