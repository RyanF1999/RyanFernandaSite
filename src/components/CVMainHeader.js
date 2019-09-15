import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CVMainDropdownBtn from './CVMainDropdownBtn';

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