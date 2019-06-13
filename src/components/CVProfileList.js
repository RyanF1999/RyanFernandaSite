import React from 'react';
import GridRoot from './GridRoot';
import {Grid, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root:{
        height: 'auto',
        width: '100%'
    }
});

function CVProfileList(props){
    const style = useStyle();

    let arrDesc;
    if(props.desc.constructor === Array)
        arrDesc = props.desc;
    else
        arrDesc = [props.desc];

    let index = -1;
    let descriptions = arrDesc.map((desc) => {
            index++;
            return(
                <Box marginBottom={2}>
                    <Typography key={index} variant="body1">
                        {desc}
                    </Typography>
                </Box>
            );
        }
    )

    return (
        <React.Fragment>
            <Box item xs={4} px={0.5} component={GridRoot}>
                <img className={style.root} src={props.icon} alt={props.alt}/>
            </Box>
            <Box px={0.5} item xs={8}
                container direction="column" component={GridRoot} 
            >
                <Box item xs={12} component={GridRoot} marginBottom={1}>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    {descriptions}
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default CVProfileList;