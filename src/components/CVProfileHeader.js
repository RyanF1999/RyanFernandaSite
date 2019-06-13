import React from 'react';
import {Grid, Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

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
    const GridRoot = React.forwardRef((props, ref)=>{
        return <Grid {...props} innerRef={ref}/>
    });

    return(
        <Box component={GridRoot} item container
            xs direction="row" justifyContent="center"
        >
            <Box padding={2.5} component={GridRoot} xs item 
                container height={300} justifyContent="center"
            >
                <img className={style.root} src="https://via.placeholder.com/150"/>
            </Box>
            <Box component={GridRoot} xs={12} item py={2.5} px={10}>
                <Box fontStyle="italic" display="flex" flexWrap="wrap">
                    <Typography variant="h5">
                        
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CVProfileHeader;