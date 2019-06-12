import React from 'react';
import {Grid, Typography, Box, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
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
                    <img className={style.root} src={props.icon} alt={props.alt}/>
                </Box>
            </Grid>
            <Grid item xs={8} container direction="column">
                <Grid item xs={12}>
                    <Box marginBottom={1}>
                        <Typography variant="h4">
                            {props.title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {descriptions}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default CVProfileList;