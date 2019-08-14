import React from 'react';
import {Grid, Typography, Box, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    root:{
        height: 'auto',
        width: '100%'
    },
    wrap: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    }
});

function CVProfileList(props){
    const style = useStyle();

    let arrDesc;
    if(props.desc.constructor === Array)
        arrDesc = props.desc;
    else
        arrDesc = [props.desc];

    return (
        <React.Fragment>
            <Box item xs={4} px={0.5} component={Grid}>
                <img className={style.root} src={props.icon} alt={props.alt}/>
            </Box>
            <Box px={0.5} item xs={8}
                container direction="column" component={Grid} 
            >
                <Box item xs={12} component={Grid} marginBottom={1}>
                    <Typography variant="h5" noWrap>
                        {props.title}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    {
                        arrDesc.map((desc, index) => 
                            <Box marginBottom={2}>
                                <Typography key={index} variant="body1" className={style.wrap}>
                                    {desc}
                                </Typography>
                            </Box>
                        )
                    }
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default CVProfileList;