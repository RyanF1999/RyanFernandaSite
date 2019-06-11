import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root:{
        height: 'auto',
        width: '100%'
    }
});

function CvSideContainer(props){
    const style = useStyle();

    let arrDesc;
    if(props.desc.constructor == Array)
        arrDesc = props.desc;
    else
        arrDesc = [props.desc];

    let index = -1;
    let descriptions = arrDesc.map((desc) => {
            index++;
            return(
                <Box marginBottom={2}>
                    <Typography key={index} variant="h5">
                        {desc}
                    </Typography>
                </Box>
            );
        }
    )

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Box padding={0.5}>
                    <img className={style.root} src={props.icon}/>
                </Box>
            </Grid>
            <Grid item container xs={8} direction="column">
                <Box padding={1}>
                    <Box marginBottom={1}>
                        <Typography variant="h4">
                            {props.title}
                        </Typography>
                    </Box>
                    {descriptions}
                </Box>
            </Grid>
        </React.Fragment>
    );
}

export default CvSideContainer;