import React from 'react';
import {Grid, Typography, Box, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    wrap: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    }
});

function CVMainList(props){
    const style = useStyle();

    const Desc = ()=>{
        if(props.desc !== undefined || props.desc !== ''){
            return(
                <Grid item xs={12}>
                    <Box component={Typography} paddingLeft={2} textAlign="left"
                        variant="body2" className={style.wrap}
                    >
                        {props.desc}
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
                    <Typography variant="h5" noWrap>
                        {props.title}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant="body1" noWrap>
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