import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root: {
        paddingTop: 50,
        paddingBottom: 50
    }
});

function CVProfile(props){
    const style = useStyle();

    return(
        <Grid 
            container 
            className={style.root} 
            direction="column"
            alignItems="center"
        >
            {props.children}
        </Grid>
    )
}

export default CVProfile;