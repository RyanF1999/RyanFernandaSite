import React from 'react';
import {Grid, List} from '@material-ui/core';
import CVMainListAnim from './CVMainListAnim';
import CVMainHeader from './CVMainHeader';

function CVMainContainer(props){
    return (
        <Grid container item direction="column" spacing={5}>
            <CVMainHeader {...props}/>
            <List>
                <CVMainListAnim 
                    index={props.index} 
                    duration={650}
                    container
                >
                    {props.children}
                </CVMainListAnim>
            </List>
        </Grid>
    );
}

export default CVMainContainer;