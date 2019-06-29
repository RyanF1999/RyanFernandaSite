import React from 'react';
import {Container, Box} from '@material-ui/core';

function ContentContainer(props){
    return(
        <Box
            minHeight='100vh'
            component={Container} 
            maxWidth="xl"
            py={5}
            mt={18}
        >
            {
                props.children
            }
        </Box>
    )
}

export default ContentContainer;