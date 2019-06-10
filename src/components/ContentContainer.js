import React from 'react';
import {Container, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
	root: {
		minHeight: '60vh'
	}
});

function ContentContainer(props){
    const style = useStyle();
    
    return(
        <Container className={style.root}>
            <Box my={5}>
                {
                    props.children
                }
            </Box>
        </Container>
    )
}

export default ContentContainer;