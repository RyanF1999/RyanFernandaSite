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
    const GridRoot = React.forwardRef((props, ref)=>{
        return <Grid {...props} innerRef={ref}/>
    });
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
            <Box 
                item xs={4} 
                py={2}
                pl={1}
                pr={0.5}
                component={GridRoot} 
            >
                <img className={style.root} src={props.icon} alt={props.alt}/>
            </Box>
            <Box 
                py={2}
                pr={1}
                pl={0.5}
                item 
                xs={8}
                container 
                direction="column" 
                component={GridRoot} 
            >
                <Box item xs={12} component={GridRoot} marginBottom={1}>
                    <Typography variant="h4">
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