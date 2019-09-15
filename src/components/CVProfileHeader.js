import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
    root: {
        height: '100%',
        width: 'auto',
        borderRadius: '50%',
        border: '1.5px black dashed',
    }
});

function CVProfileHeader(props){
    const style = useStyle();
    return(
        <Box component={Grid} item container
            xs direction="row" justifyContent="center"
        >
            <Box padding={2.5} component={Grid} xs item 
                container height={300} justifyContent="center"
            >
                <img className={style.root} src={props.img}/>
            </Box>
            <Box component={Grid} xs={12} item py={2.5} px={10}>
                <Box fontStyle="italic" display="flex" flexWrap="wrap">
                    <Typography variant="h5">
                        {props.desc}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CVProfileHeader;