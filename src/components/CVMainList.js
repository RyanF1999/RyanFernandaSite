import React from 'react';
import {Grid, Typography, Box, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    wrap: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    }
});

const GridTypography = React.forwardRef((props, ref)=>
    <Grid component={Typography} {...props} innerRef={ref}/>
);

function CVMainList(props){
    const style = useStyle();

    const Desc = ()=>{
        if(props.desc !== undefined || props.desc !== ''){
            return(
                <Box component={GridTypography} item xs={12} 
                    paddingLeft={2} variant="body2" className={style.wrap}
                >
                    {props.desc}
                </Box>
            );
        }
        else{
            return null;
        }
    }

    return (
        <React.Fragment>
            <Grid item xs={6} sm={8}>
                <Box component={Typography} fontWeight="fontWeightBold"
                    variant="h5" noWrap
                >
                    {props.title}
                </Box>
                <Box component={Typography} variant="body1" noWrap>
                    {props.subtitle}
                </Box>
            </Grid>
            <Box component={GridTypography} item xs fontStyle="italic" 
                fontWeight="fontWeightLight" variant="body1" textAlign="right"
            >
                {props.time}    
            </Box>
            <Desc/>
        </React.Fragment>
    );
}

export default CVMainList;