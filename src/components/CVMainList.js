import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';

function CvMainList(props){
    const Desc = ()=>{
        if(props.desc != undefined || props.desc != ''){
            return(
                <Grid item xs={12}>
                    <Box paddingLeft={2} textAlign="left">
                        <Typography>        
                            {props.desc}
                        </Typography>
                    </Box>
                </Grid>
            );
        }
        else{
            return(null);
        }
    }

    return (
        <React.Fragment>
            <Grid container item xs={6} md={8} direction="row">
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold">
                        <Typography variant="h5">
                            {props.title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        {props.subtitle}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs alignItems="center" justify="flex-end">
                <Box fontStyle="italic" fontWeight="fontWeightLight">
                    <Typography variant="h6">
                        {props.time}    
                    </Typography>
                </Box>
            </Grid>
            <Desc/>
        </React.Fragment>
    );
}

export default CvMainList;