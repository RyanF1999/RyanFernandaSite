import React from 'react';
import CVMainDropdownBtn from './CVMainDropdownBtn';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle= makeStyles({
    title: {
        color: 'black'
    }
});

// need props index, color and title
function CVMainHeader(props){
    const style = useStyle();

    return(
        <Grid container item>
            <Grid container item alignItems="center" direction="row" spacing={4} style={{backgroundColor: props.color}}>
                <Grid item xs="auto">
                    <CVMainDropdownBtn index={props.index}/>
                </Grid>
                <Grid item xs>
                    <Typography variant="h4" className={style.title}>
                        {props.title}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CVMainHeader;