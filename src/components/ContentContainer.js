import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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