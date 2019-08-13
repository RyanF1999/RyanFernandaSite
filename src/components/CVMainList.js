import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';

function CVMainList(props){
    const Desc = ()=>{
        if(props.desc !== undefined || props.desc !== ''){
            return(
                <Grid item xs={12}>
                    <Box paddingLeft={2} textAlign="left">
                        <Typography variant="body2">        
                            {props.desc}
                        </Typography>
                    </Box>
                </Grid>
            );
        }
        else{
            return null;
        }
    }

    return (
        <React.Fragment>
            <Grid container item xs={6} md={8} direction="row">
                <Box component={Grid} item xs={12} fontWeight="fontWeightBold">
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        {props.subtitle}
                    </Typography>
                </Grid>
            </Grid>
            <Box component={Grid} container item xs alignItems="center" 
                justify="flex-end" fontStyle="italic" fontWeight="fontWeightLight"
            >
                <Typography variant="body1">
                    {props.time}    
                </Typography>
            </Box>
            <Desc/>
        </React.Fragment>
    );
}

export default CVMainList;