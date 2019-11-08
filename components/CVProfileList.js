import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

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

const GridTypography = React.forwardRef((props, ref)=>
    <Grid component={Typography} {...props} innerRef={ref}/>
);

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
                <Box component={GridTypography} item xs={12} 
                    marginBottom={1} variant="h5" noWrap
                >
                    {props.title}
                </Box>
                <Grid item xs={12}>
                    {
                        arrDesc.map((desc, index) => 
                            <Box component={Typography} marginBottom={2}
                                key={index} variant="body1" className={style.wrap}
                            >
                                {desc}
                            </Box>
                        )
                    }
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default CVProfileList;