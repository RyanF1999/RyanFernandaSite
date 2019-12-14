import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
                <Typography variant="h5" component="p" noWrap>
                    {props.title}
                </Typography>
                <Typography variant="body1" noWrap>
                    {props.subtitle}
                </Typography>
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